import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './HomePage.css';

function HomePage() {
  return (
    <>
      <Header />

      <main>
        <div className="container-fluid min-vh-75 p-0">

          <div id="panel1">
            <div className="panel-container container">
              <div className="row panel">
                <img
                  className="p-5 col-lg-5 col-md-12 col-sm-12"
                  // style={{ height: '40vh', width: '28vw' }}
                  src={`${process.env.PUBLIC_URL}/beverage1.png`}
                  alt="Εικόνα ροφήματος"
                />
                <div className="col-lg-7 col-md-12 col-sm-12 align-self-center pr-lg-5 p-md-5 p-sm-5 p-5">
                  <h2 className="text-white">Ροφήματα</h2>
                  <h5 className="text-white mt-4" style={{ lineHeight: '2.2rem' }}>
                    Σας προσφέρουμε τον τέλειο καφέ. Γι' αυτό ξεκινήσαμε το 1971 και γι' αυτό συνεχίζουμε μέχρι σήμερα.
                </h5>
                  <a className="text-white mt-4 mr-4 p-2 border rounded float-right" style={{ fontSize: 'large' }} href="https://www.starbucks.com.gr/menu-list/beverage-list" target="_blank" rel="noreferrer">
                    Δοκιμάστε ένα ρόφημα
                  </a>
                </div>

              </div>
            </div>
          </div>

          <div id="panel2">
            <div className="panel-container container">
              <div className="row panel mb-lg-0 mb-5">
                <div className="col-lg-7 col-md-12 col-sm-12 align-self-center pl-lg-5 p-md-5 p-sm-5 p-5">
                  <h3 className="text-white">Πρόγραμμα Voucher</h3>
                  <h5 className="text-white mt-4 mb-4" style={{ lineHeight: '2.2rem' }}>
                    Η εταιρεία Starbucks δημιούργησε το πρόγραμμα Voucher με σκοπό τη διανομή ηλεκτρονικών κουπονιών σε 10.000 άνεργους. Κάθε κουπόνι μπορεί να εξαργυρωθεί σε καταστήματα της εταιρείας ανά τον κόσμο.
                </h5>
                  <NavLink
                    to="/app-form"
                    style={{ fontSize: 'large' }}
                    className="text-white mt-auto p-2 border rounded"
                    onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}
                  >
                    Κάντε αίτηση τώρα
                </NavLink>
                  <div className="mt-5">
                    <small className="text-white">
                      *Υποψήφιοι δικαιούχοι ενός κουπονιού είναι άτομα που έχουν γεννηθεί μετά τις 31/12/1984 και έχουν ενεργή εγγραφή στο μητρώο πελατών της εταιρείας.
                    </small>
                  </div>
                </div>


                <img
                  className="p-5 col-lg-5 col-md-12 col-sm-12"
                  src={`${process.env.PUBLIC_URL}/pistachio.png`}
                  alt="Εικόνα ροφήματος"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;