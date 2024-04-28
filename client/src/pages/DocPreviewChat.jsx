import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import PDFDocViewer from "../components/PDFDocViewer";
import "./DocPreviewChat.css";

const DocPreviewChat = () => {
  const navigate = useNavigate();

  const onEasyReadTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="doc-preview-chat">
      <FrameComponent onEasyReadTextClick={onEasyReadTextClick} />
      <main className="rectangle-parent2">
        <div className="frame-child4" />
        <h1 className="document-preview1">Document Preview</h1>
        <PDFDocViewer />
      </main>
    </div>
  );
};

export default DocPreviewChat;
