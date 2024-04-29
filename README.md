# Submission for HackDavis 2024

## Inspiration
Our entire team has immigrant parents, and have had experiences translating complicated documents for them. We decided to make an app that does the translation for them, whenever they need to.
## What it does
It parses through uploaded papers, and then clearly answers any questions the user has regarding the PDF.
## How we built it
We used flask for our backend server, react for the frontend, and Intel VM (XEON) to access the hardware to run our AI models.
## Challenges we ran into
Fine-tuning the model was very  difficult. On top of taking forever, after fine-tuning we noticed that a lot more work was to be done, which is difficult during a hackathon.
## Accomplishments that we're proud of
We are proud of learning so much about fine-tuning models and integrating intel technologies into our project. We started this project knowing nothing about the two, but emerged fourth place for the intel award in a hackathon of 800 people.
## What we learned
- Integrating open-source AI models using Intel Technologies
- Workflows for developing a full-stack app
- Debugging techniques used by industry professionals
## What's next
We hope to implement two big features next. These include the ability for text voiceovers, and the ability to translate between languages. Doing so further the demographic we are able to help, aligning ourselves with the AggieHacks 2024 theme of social good.

### Resources:
- [Towards Data Science Article](https://towardsdatascience.com/meta-llama-3-optimized-cpu-inference-with-hugging-face-and-pytorch-9dde2926be5c)
- [Huggingface LLM Leaderboard](https://huggingface.co/spaces/Intel/powered_by_intel_llm_leaderboard)
- [Jupyter Notebook to train gemma-2b model](https://idcbetabatch.eglb.intel.com/user/u222fffe3835dd9a22ee59ce79e80ecb/lab/tree/gemma_xpu_finetuning.ipynb)
