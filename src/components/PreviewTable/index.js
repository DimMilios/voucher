import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { categories, citizens } from '../../db';

function PreviewTable() {
  // const dummyData = [
  //   { category: "ΑΦΜ", value: "99999999" },
  //   { category: "ΑMKA", value: "9999999922" },
  //   { category: "ΟΑΕΔ", value: "99999999345334" },
  //   { category: "ΑΔΤ", value: "ΑΗ232323" },
  // ];
  // const [afm, setAfm] = useState('99999999');
  // const [amka, setAmka] = useState('9999999922');
  // const [oaed, setOaed] = useState('99999999345334');
  // const [adt, setAdt] = useState('ΑΗ232323');
  const [values, setValues] = useState(Object.values(citizens[10]));
  const history = useHistory();

  // useEffect(() => {
  //   setAfm(values.afm);
  //   setAmka(values.amka);
  //   setOaed(values.oaed);
  //   setAdt(values.adt);
  // }, [values.adt, values.afm, values.amka, values.oaed]);

  const handleBackClick = () => history.goBack();

  return (
    <div className="col-lg-6 col-md-12 col-sm-12 col-12">

      <div className="card shadow mt-5">
        <div className="card-header">
          <h3>Επιβεβαίωση Στοιχείων</h3>
        </div>

        <div className="card-body">
          <table className="table table-bordered mb-0">
            <tbody>
              {categories.map((cat, index) => {
                return <tr key={cat}>
                  <th scope="col">{cat}</th>
                  <td>{values[index]}</td>
                </tr>
              })}
              <tr>
                <th scope="col">ΑΔΤ</th>
                <td>ΑΗ999999</td>
              </tr>
            </tbody>

          </table>
          <div>
            <p className="py-3 px-1">
              <span className="text-danger">*</span>
              <strong>Προσοχή: </strong>έχετε δικαίωμα για μόνο μία προσπάθεια υποβολής αίτησης. Ελέγξτε τα στοιχεία σας.</p>
            <div className="d-flex justify-content-between pb-3 px-2">
              <button className="btn btn-outline-primary" onClick={handleBackClick}>
                Πίσω
                {/* <Link to="/app-form">Πίσω</Link> */}
              </button>
              <button className="btn btn-primary">
                <Link to="/app-results">
                  Επιβεβαίωση
                </Link>
              </button>
            </div>
          </div>


        </div>

      </div>
    </div >
  );
}

export default PreviewTable;