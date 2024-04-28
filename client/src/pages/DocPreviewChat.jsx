import React, { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import PDFDocViewer from "../components/PDFDocViewer";
import rectangleImage from "../../public/rectangle36.png"; // Import the image
import "./DocPreviewChat.css";

const DocPreviewChat = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null); // Reference to the text input element

  const onEasyReadTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        const prompt = inputRef.current.textContent.trim(); // Get the text content of the rectangle
        if (prompt) {
          // Send the prompt to the backend
          sendPromptToBackend(prompt);
          // Clear the input after sending the prompt
          inputRef.current.textContent = "";
        }
      }
    },
    [] // No dependencies needed for this function
  );

  const sendPromptToBackend = useCallback((prompt) => {
    // Send the prompt to the backend
    // Example fetch request, modify it according to your backend endpoint
    fetch("http://localhost:8080/backend-route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response if needed
        console.log(data); // Log the response to the console
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="doc-preview-chat">
      <FrameComponent onEasyReadTextClick={onEasyReadTextClick} />
      <main className="rectangle-parent2">
        <div className="frame-child4" />
        <h1 className="document-preview1">Document Preview</h1>
        <PDFDocViewer />
        <div
          className="text-input"
          contentEditable={true} // Make the div editable
          ref={inputRef} // Set the ref to access the div element
          onKeyDown={handleKeyPress} // Add the key press event handler
          style={{ backgroundImage: `url(${rectangleImage})` }} // Set the background image
        />
      </main>
    </div>
  );
};

export default DocPreviewChat;
