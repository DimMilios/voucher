import React from 'react';

import ApplicationTable from '../../components/ApplicationTable';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function AppResultPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container min-vh-100">
          <div className="row d-flex justify-content-center">
            <ApplicationTable />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AppResultPage;
