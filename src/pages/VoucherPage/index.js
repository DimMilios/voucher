import React from 'react';
import Footer from '../../components/Footer';
// import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import VoucherForm from '../../components/VoucherForm';
import './VoucherPage.css';

function VoucherPage() {
  return (
    <>
      {/* <Header /> */}
      <main id="voucher-page">
        <div className="voucher container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="container min-vh-100 d-flex align-items-center">
              <div className="row w-100 ">
                <h1 className="display-3 text-white text-center mb-5 w-100">Ενεργοποιήστε το κουπόνι σας</h1>

                <h4 className="text-white text-center mb-5">
                  Η διαδικασία μοριοδότησης έχει ολοκληρωθεί. Τα αποτελέσματα της διαδικασίας έχουν ανακοινωθεί στη σελίδα του Starbucks MIS.
                  </h4>
                <h5 className="text-white text-center mb-4 w-100">
                  Εισάγετε το Voucher ID που λάβατε για να εκτυπώσετε το κουπόνι σας.
                  </h5>
                <VoucherForm />
                <div className="mt-4 w-100 text-center">
                  <Link to="/" className="text-white" style={{ textDecoration: 'underline', fontSize: 'large' }}>
                    Επιστροφή στην αρχική σελίδα
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default VoucherPage;
