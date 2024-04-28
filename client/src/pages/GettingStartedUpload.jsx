import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import uploadIcon from "../../public/upload.png"; // Import the Flaticon icon
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

  const onFileChange = useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      
      fetch("http://localhost:8080/pdf", { // Modify this line
        method: "POST",
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Redirect or perform actions based on the response
        // For example, redirecting to another page
        navigate("/4-doc-preview");
      })
      .catch(error => {
        console.error("Error:", error);
      });
    }
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
              <label htmlFor="file-upload" className="upload-1-icon">
                <img src={uploadIcon} alt="Upload Icon" />
              </label>
              <input
                id="file-upload"
                type="file"
                style={{ display: "none" }} // Hide the actual file input
                accept=".pdf"
                onChange={onFileChange}
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
