import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent3.css";

const FrameComponent3 = () => {
  const navigate = useNavigate();

  const onPngtreeFileDownloadIconPngImageClick = useCallback(() => {
    navigate("/3-getting-startedupload");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/3-getting-startedupload");
  }, [navigate]);

  return (
    <section className="frame-section">
      <div className="frame-parent3">
        <div className="getting-started-parent">
          <h1 className="getting-started">{`Getting Started `}</h1>
          <div className="simply-upload-your">{`Simply upload your file and just like that you have your file broken down into an intelligible and concise format for your convenience. `}</div>
        </div>
        <div className="rectangle-parent5">
          <div className="frame-child7" />
          <img
            className="arrow-icon"
            loading="lazy"
            alt=""
            src="/arrow-2.svg"
          />
          <img
            className="frame-child8"
            loading="lazy"
            alt=""
            src="/arrow-2.svg"
          />
          <div className="pngtree-file-download-icon-png-wrapper">
            <img
              className="pngtree-file-download-icon-png"
              loading="lazy"
              alt=""
              src="/pngtreefiledownloadiconpngimage-4647924-1@2x.png"
              onClick={onPngtreeFileDownloadIconPngImageClick}
            />
          </div>
          <div className="image-shvetsa">
            <div className="image-shvetsa-child" />
            <div className="image-shvetsa-item" />
            <div className="image-shvetsa-inner" />
          </div>
          <div className="e2586bdc1cda16d92fd0632491a710-wrapper">
            <img
              className="e2586bdc1cda16d92fd0632491a710-icon"
              loading="lazy"
              alt=""
              src="/e2586bdc1cda16d92fd0632491a71092-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="image-pexelslizasummer-wrapper">
        <div className="image-pexelslizasummer">
          <img
            className="image-pexelslizasummer-child"
            loading="lazy"
            alt=""
            src="/rectangle-18.svg"
            onClick={onRectangleClick}
          />
          <div className="get-started-now">Get Started Now!</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
