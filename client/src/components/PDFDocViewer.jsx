import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import EmbeddingPDFDocViewer from "./EmbeddingPDFDocViewer";
import "./PDFDocViewer.css";

const PDFDocViewer = () => {
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
          <div className="frame-wrapper5">
            <TextField
              className="frame-textfield"
              placeholder="Type..."
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="28px" height="28px" src="/search-1.png" />
                ),
              }}
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
          </div>
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
