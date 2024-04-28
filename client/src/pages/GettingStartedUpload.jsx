import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import "./GettingStartedUpload.css";

const GettingStartedUpload = () => {
  const navigate = useNavigate();

  const onEasyReadTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUnionClick = useCallback(() => {
    navigate("/2-about-us");
  }, [navigate]);

  const onUpload1IconClick = useCallback(() => {
    navigate("/4-doc-preview");
  }, [navigate]);

  return (
    <div className="getting-startedupload">
      <FrameComponent
        onEasyReadTextClick={onEasyReadTextClick}
        onUnionClick={onUnionClick}
      />
      <main className="frame-main">
        <div className="frame-child2" />
        <h1 className="uploading-documents">Uploading Documents</h1>
        <div className="upload-component-wrapper">
          <div className="upload-component">
            <div className="rectangle-parent1">
              <div className="frame-child3" />
              <img
                className="upload-1-icon"
                loading="lazy"
                alt=""
                src="/upload-1@2x.png"
                onClick={onUpload1IconClick}
              />
            </div>
            <div className="please-upload-a-file-above-wrapper">
              <div className="please-upload-a">Please upload a file above!</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GettingStartedUpload;
