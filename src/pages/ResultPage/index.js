import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import FormResult from '../../components/FormResult';

function ResultPage() {
  return (
    <>
      <Header />

      <main>
        <div className="container">
          <div className="row d-flex justify-content-center">

            <FormResult
              type="success"
              title="Επιτυχής Υποβολή Αίτησης"
              content={{ message: "Η αίτησή σας υποβλήθηκε με επιτυχία. Τα αποτελέσματα της διαδικασίας μοριοδότησης θα ανακοινωθούν στον ιστότοπο του συστήματος Starbucks MIS στις 20/02/2021." }}
            />
          </div>

          <div className="row d-flex justify-content-center">
            <NavLink
              to="/"
              activeStyle={{ textDecoration: 'underline' }}
            >Επιστροφή στην αρχική σελίδα</NavLink>
          </div>

          {/* <div>
              <FormResult
                type="danger"
                title="Αποτυχία Υποβολής Αίτησης"
                content={{
                  message: "Κάτι πήγε στραβά κατά την υποβολή της αίτησή σας. Δοκιμάστε ξανά αργότερα ή επικοινωνήστε με το τμήμα εξυπηρέτησης πελατών της εταιρείας.",
                  href: "https://www.starbucks.com.gr/customer-service/"
                }}
              />
            </div> */}
          {/* <div>
              <FormResult
                type="danger"
                title="Αποτυχία Υποβολής Αίτησης"
                content={{
                  message: "Τα κριτήρια ηλικίας ή/και ανεργίας δεν ικανοποιούνται. Η υποβολή της αίτησής απέτυχε. Δοκιμάστε ξανά αργότερα ή επικοινωνήστε με το τμήμα εξυπηρέτησης πελατών της εταιρείας.",
                  href: "https://www.starbucks.com.gr/customer-service/"
                }}
              />
            </div> */}

        </div>
      </main>

      <Footer />
    </>
  );
}

export default ResultPage;
