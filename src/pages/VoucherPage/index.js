import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import VoucherForm from '../../components/VoucherForm';

function VoucherPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <VoucherForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default VoucherPage;
