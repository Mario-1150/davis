import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import EmbeddingPDFDocViewer from "./EmbeddingPDFDocViewer";
import "./PDFDocViewer.css";
import { useRef, useState } from "react";
const PDFDocViewer = () => {

  const [log, setLog] = useState([])
  const [current, setCurrent] = useState("");

  const onChangeHandler = (event) => {
    console.log(event.target.value)
    setCurrent(event.target.value);
  }

  return (
    <section className="p-d-f-doc-viewer">
      <div className="information-box">
        <div className="embedded-p-d-f">
          <EmbeddingPDFDocViewer
            propWidth="unset"
            propMinWidth="unset"
            propAlignSelf="stretch"
          />
        </div>
        <footer className="frame-footer">
          <div>
            <div className="message-container-container">

              <div className="message-container">
                {log.map((message, index) => <div className="message-group">
                  <div className="message-box" key={message.id}>
                    {message.request}
                  </div>
                  {message.response && <div className="message-box-response" key={index}>
                    {message.response}
                  </div>}
                </div>
                )}
              </div>
            </div>
            <div className="frame-wrapper5">
              <form onSubmit={async (e) => {
                e.preventDefault()


                // request message: current 
                if (current.length) {
                  const response = await fetch("http://localhost:8080/llama3post", { // Modify this line
                    method: "POST",
                    headers: {
                      "content-type": "application/json"
                    },
                    body: JSON.stringify({ query: current }),
                  });
                  const data = await response.json();
                  const answer = data.answer;
                  setLog([...log, {
                    id: Math.random().toString(36).substring(7),
                    request: current,
                    response: answer
                  }])
                }

                setCurrent("")
              }}>
                <TextField
                  className="frame-textfield"
                  placeholder="Type..."
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <img width="28px" height="28px" src="/search-1.png" />
                    ),
                  }}
                  onChange={onChangeHandler}
                  value={current}
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      paddingLeft: "19px",
                      borderRadius: "90px",
                      fontSize: "20px",
                    },
                    "& .MuiInputBase-input": {
                      paddingLeft: "-14px",
                      color: "#000",
                    },
                  }}
                />
              </form>
            </div>
          </div>
          <div />

          <button className="account-menu-icon">
            <div className="account-menu-icon-child" />
            <img
              className="speaker-icon-logo-600nw-759702"
              alt=""
              src="/speakericonlogo600nw759702361-1@2x.png"
            />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default PDFDocViewer;
