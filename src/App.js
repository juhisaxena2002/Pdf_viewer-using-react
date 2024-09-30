import React, { useState } from "react";
import PdfViewer from "./components/PdfViewer";
import "./App.css";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const pageInput = parseInt(e.target.pageInput.value, 10);

    if (pageInput > 0) {
      setPageNumber(pageInput);
    } else {
      alert("Please enter a valid page number");
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      const fileUrl = URL.createObjectURL(file);
      setPdfUrl(fileUrl);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  return (
    <div className="App">
      <h1 className="main-title">FileLook</h1>

      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileUpload}
        className="upload-input"
      />
      <label htmlFor="file-upload" className="upload-button">
        Upload PDF
      </label>

      {pdfUrl && (
        <div className="upload-card">
          <form onSubmit={handleSubmit} className="page-form">
            <input
              type="number"
              name="pageInput"
              min="1"
              placeholder="Enter page number"
              className="page-input"
            />
            <button type="submit" className="page-button">
              Go to Page
            </button>
          </form>
        </div>
      )}

      {pdfUrl && <PdfViewer pdfUrl={pdfUrl} pageNumber={pageNumber} />}
    </div>
  );
}

export default App;
