import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  voucherId: Yup.string()
    .length(16, 'Ο αριθμός αποτελείται από 16 ψηφία')
    .required('Ο αριθμός είναι απαραίτητος'),
});

function VoucherForm() {
  return (
    <Formik
      initialValues={{ voucherId: '' }}
      validationSchema={FormSchema}
      onSubmit={values => console.log(values)}
    >
      {({ isSubmitting, errors, touched }) => (
        // <div className="card shadow mt-5">
        //   <div className="card-header">
        //     <h3>Voucher_ID</h3>
        //   </div>
        //   <div className="card-body">
        <Form className="form-inline w-100 align-items-start">
          <div className="col-6 form-group p-0">
            <Field className={
              touched.voucherId
                ? errors.voucherId
                  ? "is-invalid form-control w-100 py-3"
                  : "is-valid form-control w-100 py-3"
                : "form-control w-100"}
              name="voucherId"
              inputMode="number"
              placeholder="Voucher_ID"
            />
            {errors.voucherId && touched.voucherId
              ? (<div className="invalid-feedback">{errors.voucherId}</div>) : null}
          </div>

          <div className="col-6 form-group p-0">

            <button type="submit" disabled={isSubmitting} className="w-100 btn btn-primary float-right">Υποβολή</button>
          </div>
        </Form>
        //   </div>
        // </div>
      )}
    </Formik>

  );
}

export default VoucherForm;
