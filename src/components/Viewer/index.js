import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Viewer() {
  const getDocumentPages = async ({ scale = 1, url }) => {
    // const PDFJS = window.pdfjsLib;
    const PDFJS = window['pdfjs-dist/build/pdf'];
    // PDFJS.GlobalWorkerOptions.workerSrc = "http://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js";
    // PDFJS.GlobalWorkerOptions.workerSrc = "//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js";
    // const PDFWorker = PDFJS.PDFWorker;
    // PDFJS.GlobalWorkerOptions.workerSrc = PDFWorker;

    // First, we need to load the document using the getDocument utility
    const loadingTask = PDFJS.getDocument(url);
    const pdf = await loadingTask.promise;

    const { numPages } = pdf;

    const canvasURLs = [];

    // Now for every page in the document, we're going to add a page to the array
    for (let i = 0; i < numPages; i++) {
      const page = await pdf.getPage(i + 1);

      const viewport = page.getViewport(scale);
      const { width, height } = viewport;
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      canvas.className = 'page'
      await page.render({
        canvasContext: canvas.getContext('2d'),
        viewport
      })

      canvasURLs.push(canvas.toDataURL('image/jpg'));
    }

    return canvasURLs;
  }

  const useDocument = ({
    url
  }) => {
    const [pages, setPages] = useState([]);
    useEffect(() => {
      const getPages = async () => {
        const canvases = await getDocumentPages({
          url
        });

        setPages(canvases);
      }
      getPages();
    }, [url])
    return {
      pages
    }
  }

  const { pages } = useDocument({
    url: `${process.env.PUBLIC_URL}/perigrafi.pdf`
  });

  return (
    <div className="viewer">
      {pages.map((canvasURL, index) => {
        return <div key={index}>
          <img src={canvasURL} alt="pdf" />
          <a
            href={`${process.env.PUBLIC_URL}/perigrafi.pdf`}
            download
            target="_blank"
            rel="noreferrer"
          >
            Download
          </a>
        </div>
      })}
    </div>
  );
}

export default Viewer;