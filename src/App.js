import React from "react";
import "./App.css";

// import ApplicationForm from "./components/ApplicationForm";
import Footer from "./components/Footer";
// import FormResult from "./components/FormResult";
import Header from "./components/Header";
import PreviewTable from "./components/PreviewTable";


function App() {
  return (
    <>
      <Header />

      <main>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <PreviewTable />

            {/* <ApplicationForm /> */}
            {/* <FormResult
              type="success"
              title="Επιτυχής Υποβολή Αίτησης"
              content={{ message: "Η αίτησή σας υποβλήθηκε με επιτυχία. Τα αποτελέσματα της διαδικασίας μοριοδότησης θα ανακοινωθούν στον ιστότοπο του συστήματος Starbucks MIS στις 20/02/2021." }}
            />
            <div>
              <FormResult
                type="danger"
                title="Αποτυχία Υποβολή Αίτησης"
                content={{
                  message: "Κάτι πήγε στραβά κατά την υποβολή της αίτησή σας. Δοκιμάστε ξανά αργότερα ή επικοινωνήστε με το τμήμα εξυπηρέτησης πελατών της εταιρείας.",
                  href: "https://www.starbucks.com.gr/customer-service/"
                }}
              />
            </div>
            <div>
              <FormResult
                type="danger"
                title="Αποτυχία Υποβολή Αίτησης"
                content={{
                  message: "Τα κριτήρια ηλικίας ή/και ανεργίας δεν ικανοποιούνται. Η υποβολή της αίτησής απέτυχε. Δοκιμάστε ξανά αργότερα ή επικοινωνήστε με το τμήμα εξυπηρέτησης πελατών της εταιρείας.",
                  href: "https://www.starbucks.com.gr/customer-service/"
                }}
              />
            </div> */}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
