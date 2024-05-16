import  { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {useParams} from 'react-router-dom'

import books from "./files";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;




export default function Pdf() {
   const {pdf} = useParams()
  
   const [scale, setScale] = useState(1);
   const [numPages, setNumPages] = useState(null);
   const [pageNumber, setPageNumber] = useState(1);
   const [isLoading, setIsLoading] = useState(true);
  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
    setIsLoading(false);
  }



  return (
    <>
 <div>
    
 
        <Document
          file={books[0]}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
   
    </div>
    </>
  );
} 
