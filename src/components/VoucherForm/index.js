import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import './VoucherForm.css';

import { aitiseis } from '../../db';

const FormSchema = Yup.object().shape({
  voucherId: Yup.string()
    .length(16, 'Ο αριθμός αποτελείται από 16 ψηφία')
    .required('Ο αριθμός είναι απαραίτητος'),
});

function VoucherForm() {
  const history = useHistory();

  return (
    <Formik
      initialValues={{ voucherId: '' }}
      validationSchema={FormSchema}
      onSubmit={values => {
        console.log(values);
        const winner = aitiseis.find(a =>
          a.is_moriodotimeni
          && a.voucher_id.toString() === values.voucherId);

        winner ? history.push('/coupon-pdf') : history.push('/app-results/invalid-voucher');
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        // <div className="card shadow mt-5">
        //   <div className="card-header">
        //     <h3>Voucher_ID</h3>
        //   </div>
        //   <div className="card-body">
        <Form className="form-inline w-100 align-items-start">
          <div className="col-12 col-lg-6 col-md-12 col-sm-12 form-group p-0">
            <Field className={
              touched.voucherId
                ? errors.voucherId
                  ? "is-invalid form-control w-100 py-4"
                  : "is-valid form-control w-100 py-4"
                : "form-control w-100 py-4"}
              name="voucherId"
              inputMode="number"
              placeholder="Voucher ID"
            />
            {errors.voucherId && touched.voucherId
              ? (<div className="invalid-feedback">{errors.voucherId}</div>) : null}
          </div>

          <div className="col-12 col-lg-6 col-md-12 col-sm-12 form-group p-0 mt-lg-0 mt-md-4 mt-sm-4 mt-4">

            <button type="submit" disabled={isSubmitting} className="w-100 btn btn-primary float-right"><h4>Υποβολή</h4></button>
          </div>
        </Form>
        //   </div>
        // </div>
      )}
    </Formik>

  );
}

export default VoucherForm;
