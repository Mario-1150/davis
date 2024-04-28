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
        const prompt = inputRef.current.value.trim();
        if (prompt) {
          // Send the prompt to ask_pdf route
          sendPromptToPDF(prompt);
          // Clear the input after sending the prompt
          inputRef.current.value = "";
        }
      }
    },
    [] // No dependencies needed for this function
  );

  const sendPromptToPDF = useCallback((prompt) => {
    // Send the prompt to the ask_pdf route
    fetch("http://localhost:8080/llama3post", {
      method: "POST",
      mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: prompt }),
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
        <img
          src={rectangleImage}
          alt="Rectangle 36"
          className="text-input" // Use the same class as the text input
          onClick={() => inputRef.current.focus()} // Focus the input when the image is clicked
        />
        <input
          type="text"
          className="text-input"
          placeholder="Type your prompt here and press Enter"
          ref={inputRef} // Set the ref to access the input element
          onKeyPress={handleKeyPress} // Add the key press event handler
        />
      </main>
    </div>
  );
};

export default DocPreviewChat;
