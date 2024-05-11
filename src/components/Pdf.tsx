import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfurl from '../assets/math.pdf?url'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Pdf() {
 
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

    setNumPages(numPages);
    setPageNumber(1);
  }
  return (
    <>
      <div className="main">
        <Document file={pdfurl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </>
  );
}
