import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import FormResult from '../../components/FormResult';

function ResultPage() {
  const match = useRouteMatch("/app-results/:messageType");

  // React.useEffect(() => console.log(`${match.params.messageType}`), []);
  const renderMessage = (messageType) => {
    switch (messageType) {
      case 'invalid-voucher':
        return (
          <FormResult
            type="danger"
            title="Λάθος Voucher ID"
            content={{
              message: "Ο αριθμός Voucher ID που εισάγατε δεν είναι σωστός. Δοκιμάστε ξανά αργότερα ή επικοινωνήστε με το τμήμα εξυπηρέτησης πελατών της εταιρείας.",
              href: "https://www.starbucks.com.gr/customer-service/"
            }}
          />);
      case 'duplicate-app':
        return (
          <FormResult
            type="danger"
            title="Σφάλμα"
            content={{
              message: "Έχει ήδη καταχωρηθεί αίτηση με αυτά τα στοιχεία. Δοκιμάστε ξανά αργότερα ή επικοινωνήστε με το τμήμα εξυπηρέτησης πελατών της εταιρείας.",
              href: "https://www.starbucks.com.gr/customer-service/"
            }}
          />);
      case 'not-found':
        return (
          <FormResult
            type="danger"
            title="Σφάλμα"
            content={{
              message: "Δεν υπάρχει εγγραφή με αυτά τα στοιχεία στο μητρώο πελατών μας. Δοκιμάστε ξανά αργότερα ή επικοινωνήστε με το τμήμα εξυπηρέτησης πελατών της εταιρείας.",
              href: "https://www.starbucks.com.gr/customer-service/"
            }}
          />);
      case 'invalid-application':
        return (
          <FormResult
            type="danger"
            title="Αποτυχία Υποβολής Αίτησης"
            content={{
              message: "Κάτι πήγε στραβά κατά την υποβολή της αίτησή σας. Δοκιμάστε ξανά αργότερα ή επικοινωνήστε με το τμήμα εξυπηρέτησης πελατών της εταιρείας.",
              href: "https://www.starbucks.com.gr/customer-service/"
            }}
          />);
      case 'app-success':
        return (
          <FormResult
            type="success"
            title="Επιτυχής Υποβολή Αίτησης"
            content={{ message: "Η αίτησή σας υποβλήθηκε με επιτυχία. Τα αποτελέσματα της διαδικασίας μοριοδότησης θα ανακοινωθούν στον ιστότοπο του συστήματος Starbucks MIS στις 20/02/2021." }}
          />
        )

      default: return null;
    }
  }

  return (
    <>
      <Header />

      <main>
        <div className="container">
          <div className="row d-flex justify-content-center">
            {renderMessage(`${match.params.messageType}`)}

            {/* <FormResult
              type="success"
              title="Επιτυχής Υποβολή Αίτησης"
              content={{ message: "Η αίτησή σας υποβλήθηκε με επιτυχία. Τα αποτελέσματα της διαδικασίας μοριοδότησης θα ανακοινωθούν στον ιστότοπο του συστήματος Starbucks MIS στις 20/02/2021." }}
            /> */}
          </div>

          <div className="row d-flex justify-content-center">
            {/* <NavLink
              to="/"
              activeStyle={{ textDecoration: 'underline' }}
            >Επιστροφή στην αρχική σελίδα</NavLink> */}
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
