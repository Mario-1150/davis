import { useMemo } from "react";
import "./EmbeddingPDFDocViewer.css";

const EmbeddingPDFDocViewer = ({ propWidth, propMinWidth, propAlignSelf }) => {
  const embeddingPDFDocViewerStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propMinWidth, propAlignSelf]);

  return (
    <div
      className="embedding-p-d-f-doc-viewer"
      style={embeddingPDFDocViewerStyle}
    >
      <div className="what-does-this-mean-container3">
        <img className="rectangle-icon" alt="" src="/rectangle-27.svg" />
        <div className="embedding-pdfdoc-viewer">{`Embedding PDF/Doc viewer `}</div>
      </div>
      <img
        className="question-mark-48-1-icon"
        loading="lazy"
        alt=""
        src="/questionmark48-1@2x.png"
      />
    </div>
  );
};

export default EmbeddingPDFDocViewer;
