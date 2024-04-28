from flask import Flask, jsonify, request
import flask
from flask_cors import CORS
import pdb

from langchain_community.llms import Ollama
from langchain_community.vectorstores import Chroma
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.embeddings.fastembed import FastEmbedEmbeddings
from langchain_community.document_loaders import PDFPlumberLoader
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain.chains import create_retrieval_chain
from langchain.prompts import PromptTemplate
import json
import torch
import intel_extension_for_pytorch as ipex
from transformers import AutoTokenizer, AutoModelForCausalLM, TextStreamer


app = Flask(__name__)
CORS(app)

folder_path = "db"

#cached_llm = Ollama(model="llama3")
Model = 'meta-llama/Meta-Llama-3-8B-Instruct'

model = AutoModelForCausalLM.from_pretrained(Model)
tokenizer = AutoTokenizer.from_pretrained(Model)
qconfig = ipex.quantization.get_weight_only_quant_qconfig_mapping(
  weight_dtype=torch.quint4x2, # or torch.qint8
  lowp_mode=ipex.quantization.WoqLowpMode.NONE, # or FP16, BF16, INT8
)
checkpoint = None # optionally load int4 or int8 checkpoint

# PART 3: Model optimization and quantization
model_ipex = ipex.llm.optimize(model, quantization_config=qconfig, low_precision_checkpoint=checkpoint)
embedding = FastEmbedEmbeddings()

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1024, chunk_overlap=80, length_function=len, is_separator_regex=False
)

raw_prompt = PromptTemplate.from_template(
    """ 
    <s>[INST] You are a technical assistant good at searching docuemnts. If you do not have an answer from the provided information say so. [/INST] </s>
    [INST] {input}
           Context: {context}
           Answer:
    [/INST]
"""
)

# Members API Route
@app.route("/llama3post", methods=["POST"])
def llama3_POST():

    pdb.set_trace()
    print("Post /llama3 called")
    json_content = flask.request.data.strip().decode("utf-8")
    query = json.loads(json_content)["query"]

    print(f"query: {query}")
    system= """\n\n You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. If you don't know the answer to a question, please don't share false information."""
    user= "\n\n You are an expert in astronomy. Can you tell me 5 fun facts about the universe?"
    model_answer_1 = 'None'

    llama_prompt_tempate = f"""
    <|begin_of_text|>\n<|start_header_id|>system<|end_header_id|>{system}
    <|eot_id|>\n<|start_header_id|>user<|end_header_id|>{user}
    <|eot_id|>\n<|start_header_id|>assistant<|end_header_id|>{model_answer_1}<|eot_id|>
    """

    inputs = tokenizer(llama_prompt_tempate, return_tensors="pt").input_ids
    #response = cached_llm.invoke(query)
    with torch.inference_mode():
        tokens = model_ipex.generate(
            inputs,
            pad_token_id=128001,
            eos_token_id=128001,
            max_new_tokens=300,
            repetition_penalty=1.5,
            )
    print(response)

    #response_answer = {"answer": response}
    response = tokenizer.decode(tokens[0], skip_special_tokens=True)
    encoded_response = json.dumps(response)
    print(encoded_response)
    return flask.Response(encoded_response, status=200, mimetype="application/json")

@app.route("/ask_pdf", methods=["POST"])
def askPDFPost():
    print("Post /ask_pdf called")
    json_content = request.json
    query = json_content.get("query")

    print(f"query: {query}")

    print("Loading vector store")
    vector_store = Chroma(persist_directory=folder_path, embedding_function=embedding)

    print("Creating chain")
    retriever = vector_store.as_retriever(
        search_type="similarity_score_threshold",
        search_kwargs={
            "k": 20,
            "score_threshold": 0.1,
        },
    )

    document_chain = create_stuff_documents_chain(cached_llm, raw_prompt)
    chain = create_retrieval_chain(retriever, document_chain)

    result = chain.invoke({"input": query})

    print(result)

    sources = []
    for doc in result["context"]:
        sources.append(
            {"source": doc.metadata["source"], "page_content": doc.page_content}
        )

    response_answer = {"answer": result["answer"], "sources": sources}
    return response_answer

@app.route("/backend-route", methods=["POST"])
def backend_route():
    prompt = request.json.get("prompt")
    print("Received prompt:", prompt)

    # Handle the request here

    return jsonify({"message": "Received request at /backend-route"})



@app.route("/pdf", methods=["POST"])
def pdfPost():
    file = request.files["file"]
    file_name = file.filename
    save_file = "pdf/" + file_name
    file.save(save_file)
    print(f"filename: {file_name}")

    loader = PDFPlumberLoader(save_file)
    docs = loader.load_and_split()
    print(f"docs len={len(docs)}")

    chunks = text_splitter.split_documents(docs)
    print(f"chunks len={len(chunks)}")

    vector_store = Chroma.from_documents(
        documents=chunks, embedding=embedding, persist_directory=folder_path
    )

    response = {
        "status": "Successfully Uploaded",
        "filename": file_name,
        "doc_len": len(docs),
        "chunks": len(chunks),
    }
    return response

def start_app():
    app.run(port = 8080, debug=True)



if __name__ == "__main__":
    start_app()