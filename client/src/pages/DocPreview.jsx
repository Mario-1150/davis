import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import EmbeddingPDFDocViewer from "../components/EmbeddingPDFDocViewer";
import "./DocPreview.css";

const DocPreview = () => {
  const navigate = useNavigate();

  const onEasyReadTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUnionClick = useCallback(() => {
    navigate("/2-about-us");
  }, [navigate]);

  const onWhatDoesThisClick = useCallback(() => {
    navigate("/5-doc-preview-chat");
  }, [navigate]);

  const onWhatDoIClick = useCallback(() => {
    navigate("/5-doc-preview-chat");
  }, [navigate]);

  const onCanYouProvideClick = useCallback(() => {
    navigate("/5-doc-preview-chat");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/5-doc-preview-chat");
  }, [navigate]);

  const onOtherLetsChatTextClick = useCallback(() => {
    navigate("/5-doc-preview-chat");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/5-doc-preview-chat");
  }, [navigate]);

  return (
    <div className="doc-preview">
      <FrameComponent
        onEasyReadTextClick={onEasyReadTextClick}
        onUnionClick={onUnionClick}
      />
      <div className="doc-preview-child" />
      <div className="doc-preview-item" />
      <main className="rectangle-group">
        <div className="frame-inner" />
        <h1 className="document-preview">Document Preview</h1>
        <section className="frame-wrapper">
          <div className="embedding-p-d-f-doc-viewer-parent">
            <EmbeddingPDFDocViewer />
            <div className="what-does-this-mean-container-parent">
              <div className="what-does-this-mean-container">
                <div className="what-does-this-mean-container-child" />
                <div className="what-does-this" onClick={onWhatDoesThisClick}>
                  What does this mean?
                </div>
              </div>
              <div className="rectangle-container">
                <div className="rectangle-div" />
                <div className="what-do-i" onClick={onWhatDoIClick}>
                  What do I do?
                </div>
              </div>
              <div className="frame-div">
                <div className="frame-child1" />
                <div className="can-you-provide" onClick={onCanYouProvideClick}>
                  Can you provide references?
                </div>
              </div>
              <button className="what-does-this-mean-container1">
                <div
                  className="what-does-this-mean-container-item"
                  onClick={onRectangleClick}
                />
                <div className="what-does-this-mean-container2">
                  <div
                    className="otherlets-chat"
                    onClick={onOtherLetsChatTextClick}
                  >
                    Other/Let’s Chat!
                  </div>
                  <img
                    className="what-does-this-mean-container-inner"
                    alt=""
                    onClick={onRectangle2Click}
                  />
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DocPreview;
