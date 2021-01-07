import React from 'react';
import { useLocation } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './ApplicationForm.css';

const FormSchema = Yup.object().shape({
  afm: Yup.string()
    .length(9, 'Το πεδίο αποτελείται από 9 ψηφία')
    .required('Το πεδίο είναι απαραίτητο'),
  amka: Yup.string()
    .length(11, 'Το πεδίο αποτελείται από 11 ψηφία')
    .required('Το πεδίο είναι απαραίτητο'),
  arithmosKartasOaed: Yup.string()
    .length(16, 'Το πεδίο αποτελείται από 16 ψηφία')
    .required('Το πεδίο είναι απαραίτητο'),
  arithmosTautotitas: Yup.string()
    .matches('^[Α-Ω]{2}[0-9]{6}', 'Το πεδίο αποτελείται από 2 κεφαλαία γράμματα και 6 ψηφία')
    .required('Το πεδίο είναι απαραίτητο'),
});

// const testStyle = {
//   borderColor: "#dc3545",
//   paddingRight: "calc(1.5em + .75rem)",
//   backgroundImage: "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e)",
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "right calc(.375em + .1875rem) center",
//   backgroundSize: "calc(.75em + .375rem) calc(.75em + .375rem)",
// }

function ApplicationForm() {
  // const location = useLocation();

  const isValid = (field, restClassNames) => field
    ? `is-invalid ${restClassNames}`
    : `is-valid ${restClassNames}`;

  const [values, setValues] = React.useState({});

  // React.useEffect(() => console.log(location), []);

  return (
    <div className="col-md-6 col-sm-12">
      <Formik
        initialValues={{
          afm: '',
          amka: '',
          arithmosKartasOaed: '',
          arithmosTautotitas: '',
        }}
        validationSchema={FormSchema}
        onSubmit={values => {
          console.log(values);
          setValues(values);
        }}
      >
        {({ errors, touched, isSubmitting, resetForm }) => (
          <div className="card shadow mt-5">

            <div className="card-header">
              <h3>Υποβολή αίτησης</h3>
            </div>

            <div className="card-body">
              <Form>
                <div className="form-group">
                  <label htmlFor="afm">
                    ΑΦΜ
                    <span className="text-danger">*</span>
                  </label>
                  <Field
                    name="afm"
                    className={
                      touched.afm
                        ? isValid(errors.afm, "form-control")
                        : "form-control"}
                    inputMode="number"
                  />
                  {errors.afm && touched.afm ? (<div className="invalid-feedback">{errors.afm}</div>) : null}
                </div>

                <div className="form-group">
                  <label htmlFor="amka">
                    ΑΜΚΑ
                    <span className="text-danger">*</span>
                  </label>
                  <Field
                    name="amka"
                    className={
                      touched.amka
                        ? isValid(errors.amka, "form-control")
                        : "form-control"}
                    inputMode="number"
                  />
                  {errors.amka && touched.amka ? (<div className="invalid-feedback">{errors.amka}</div>) : null}
                </div>

                <div className="form-group">
                  <label htmlFor="arithmosKartasOaed">
                    Αριθμός Κάρτας Ανεργίας ΟΑΕΔ
                    <span className="text-danger">*</span>
                  </label>
                  <Field
                    name="arithmosKartasOaed"
                    className={
                      touched.arithmosKartasOaed
                        ? isValid(errors.arithmosKartasOaed, "form-control")
                        : "form-control"}
                    inputMode="number"
                  />
                  {errors.arithmosKartasOaed && touched.arithmosKartasOaed ? (<div className="invalid-feedback">{errors.arithmosKartasOaed}</div>) : null}
                </div>

                <div className="form-group">
                  <label htmlFor="arithmosTautotitas">
                    Αριθμός ταυτότητας
                    <span className="text-danger">*</span>
                  </label>
                  <Field
                    name="arithmosTautotitas"
                    className={
                      touched.arithmosTautotitas
                        ? isValid(errors.arithmosTautotitas, "form-control")
                        : "form-control"}
                    inputMode="number"
                  />
                  {errors.arithmosTautotitas && touched.arithmosTautotitas ? (<div className="invalid-feedback">{errors.arithmosTautotitas}</div>) : null}
                </div>

                <p><strong>*Προσοχή: </strong>έχετε δικαίωμα για μόνο μία προσπάθεια υποβολής αίτησης. Ελέγξτε τα στοιχεία σας.</p>

                <button className="btn btn-primary float-right ml-3" type="submit" disabled={isSubmitting}>Υποβολή</button>
                <button className="btn btn-outline-primary float-right" type="button" disabled={isSubmitting} onClick={resetForm}>Καθαρισμός</button>
              </Form>
            </div>
          </div>
        )}
      </Formik>

      <div className="mt-3">
        <pre>
          {Object.keys(values).length !== 0
            && JSON.stringify(values, undefined, 2)}
        </pre>
      </div>
    </div>
  );
}

export default ApplicationForm;
