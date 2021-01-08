import React from 'react';
import Footer from '../../components/Footer';
// import Header from '../../components/Header';
import VoucherForm from '../../components/VoucherForm';
import './VoucherPage.css';

function VoucherPage() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <div className="voucher container-fluid min-vh-100">
          <div className="row d-flex justify-content-center">
            <div className="container min-vh-100 d-flex align-items-center">
              <VoucherForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default VoucherPage;
