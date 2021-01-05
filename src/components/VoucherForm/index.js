import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  voucherId: Yup.string().length(16, 'Ο αριθμός αποτελείται από 16 ψηφία').required('Ο αριθμός είναι απαραίτητος'),
});

function VoucherForm() {
  return (
    <Formik
      initialValues={{ voucherId: '' }}
      validationSchema={FormSchema}
      onSubmit={values => console.log(values)}
    >
      {({ isSubmitting, errors, touched }) => (
        <div className="card shadow mt-5">
          <div className="card-header">
            <h3>Εισαγωγή Voucher_ID</h3>
          </div>
          <div className="card-body">
            <Form>
              <label htmlFor="voucherId">Voucher_ID</label>

              <Field className={
                touched.voucherId
                  ? errors.voucherId
                    ? "is-invalid form-control"
                    : "is-valid form-control"
                  : "form-control"}
                name="voucherId"
                inputMode="number"
                placeholder="Voucher_ID"
              />
              {errors.voucherId && touched.voucherId
                ? (<div className="invalid-feedback">{errors.voucherId}</div>) : null}

              <button type="submit" disabled={isSubmitting} className="btn btn-primary">Υποβολή</button>
            </Form>
          </div>
        </div>
      )}
    </Formik>

  );
}

export default VoucherForm;
