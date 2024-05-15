import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {useParams} from 'react-router-dom'
import books from "./files";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;




export default function Pdf() {
   const {pdf} = useParams()
   const book = (async () => {})
   const [scale, setScale] = useState(1.0);
   const [numPages, setNumPages] = useState(null);
   const [pageNumber, setPageNumber] = useState(1);
   const [isLoading, setIsLoading] = useState(true);
  function onDocumentLoadSuccess({  }) {
    setNumPages(numPages);
    setIsLoading(false);
  }



  return (
    <>
      <div className="main">
        <Document file={books[0]} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </>
  );
} 
