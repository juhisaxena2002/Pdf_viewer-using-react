import React, { useEffect, useState } from "react";
import "../PdfViewer.css";

const PdfViewer = ({ pdfUrl, pageNumber = 1 }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(key + 1);
  }, [pageNumber]);

  const pdfSrc = `${pdfUrl}#page=${pageNumber}`;

  return (
    <div className="pdf-container">
      <iframe
        key={key}
        src={pdfSrc}
        title="PDF Viewer"
        className="pdf-iframe"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PdfViewer;
