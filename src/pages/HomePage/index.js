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
        <div className="container min-vh-100">
          <div className="panel-container">

            <div className="row panel mt-5 shadow rounded" id="panel1">
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
                <button className="btn btn-outline-light float-right mt-4 mr-4 pr-2">
                  <a className="text-white p-2" style={{ fontSize: 'large' }} href="https://www.starbucks.com.gr/menu-list/beverage-list" target="_blank" rel="noreferrer">
                    Δοκιμάστε ένα ρόφημα σήμερα
                </a>
                </button>
              </div>

            </div>

            <div className="row panel mt-5 mb-lg-0 mb-5 rounded shadow" id="panel2">
              <div className="col-lg-7 col-md-12 col-sm-12 align-self-center pl-lg-5 p-md-5 p-sm-5 p-5">
                <h1 className="text-white">**FIX TEXT**</h1>
                <h3 className="text-white">Πρόγραμμα Voucher</h3>
                <h5 className="text-white mt-4" style={{ lineHeight: '2.2rem' }}>
                  Η εταιρεία Starbucks για τη διανομή ηλεκτρονικών κουπονιών σε άνεργους. Κάθε κουπόνι αντιστοιχεί σε μία οικονομική αξία εξαργυρώσει σε καταστήματα της εταιρείας ανά τον κόσμο.
                  Υποψήφιοι
                  δικαιούχοι ενός κουπονιού είναι άτομα που έχουν γεννηθεί μετά την 31η
                  /12/1984 και έχουν ενεργή εγγραφή στο μητρώο πελατών της εταιρείας.
                </h5>

                <button className="btn btn-outline-light">
                  <NavLink
                    to="/app-form"
                    style={{ fontSize: 'large', textDecoration: 'underline' }}
                    className="text-white mt-3 py-2 px-1"
                    onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}
                  >
                    Κάντε αίτηση τώρα
                </NavLink>
                </button>
              </div>


              <img
                className="p-5 col-lg-5 col-md-12 col-sm-12"
                // style={{ height: '40vh', width: '30vw' }}
                src={`${process.env.PUBLIC_URL}/pistachio.png`}
                alt="Εικόνα ροφήματος"
              />
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;