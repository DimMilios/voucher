import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import PreviewTable from '../../components/PreviewTable';

function ReviewPage() {
  return (
    <>
      <Header />

      <main>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <PreviewTable />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ReviewPage;
