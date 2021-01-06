import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ApplicationForm from '../../components/ApplicationForm';

function ApplicationFormPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container min-vh-100">
          <div className="row d-flex justify-content-center">
            <ApplicationForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ApplicationFormPage;
