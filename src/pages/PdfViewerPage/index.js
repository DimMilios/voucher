import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PdfViewer from '../../components/PdfViewer';

function PdfViewerPage() {
  return (
    <>
      <Header />
      <main>
        <PdfViewer />
      </main>
      <Footer />
    </>
  );
}

export default PdfViewerPage;
