import React, { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';

function PdfViewer() {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: `${process.env.PUBLIC_URL}/lib`,
        initialDoc: `${process.env.PUBLIC_URL}/perigrafi.pdf`
      },
      viewer.current,
    ).then(instance => {
      const { docViewer } = instance;
      console.log(docViewer);
    })
  }, [])

  return (
    <div className="MyComponent">
      <div className="webviewer" ref={viewer} style={{ height: "90vh" }}></div>
    </div>
  );
}

export default PdfViewer;