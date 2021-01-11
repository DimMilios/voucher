import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Viewer from '../../components/Viewer';

function PdfViewerPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="row justify-content-center">
            <Viewer />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default PdfViewerPage;
