import  { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {useParams} from 'react-router-dom'
import { Container } from "@mui/material";
import Controls from "./Controls";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import books from "../assets/data/files";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;




export default function Pdf() {
   const {pdf} = useParams()
  
   const [scale, setScale] = useState(2);
   const [numPages, setNumPages] = useState(0);
   const [pageNumber, setPageNumber] = useState(1);
   const [file, setFile] = useState<File>()
  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

    for(const path in books) {
      if(path.includes(pdf!)) {
        books[path]().then((mod ) => {
          setFile((mod as {default: File}).default as File)
          console.log(mod)
        })
      }
    }



  return (
    <Container >
          <Controls 
                      
                      scale={scale}
                      setScale={setScale}
                      numPages={numPages}
                      pageNumber={pageNumber}
                      setPageNumber={setPageNumber}
          />
       <Document
          
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
       >
          <Page pageNumber={pageNumber} scale={scale} />
       </Document>
    </Container>
  );
} 
