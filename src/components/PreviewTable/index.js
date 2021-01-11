import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { categories, citizens } from '../../db';

function PreviewTable() {
  const [afm, setAfm] = useState('');
  const [amka, setAmka] = useState('');
  const [oaed, setOaed] = useState('');
  const [adt, setAdt] = useState('ΑΗ232323');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [fathersName, setFathersName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [unemploymentDuration, setUnemploymentDuration] = useState(0);
  const [status, setStatus] = useState(false);

  const [values, setValues] = useState({});
  const history = useHistory();
  const match = useRouteMatch("/app-review/:amka");
  const AGE_LIMIT = new Date('1984-12-31');

  useEffect(() => {
    const user = citizens.find(c =>
      c.amka.toString() === `${match.params.amka}`
    );

    setAfm(user.afm);
    setAmka(user.amka);
    setOaed(user.oaed_number);
    setAdt(user.adt);
    setLastName(user.lastName);
    setFirstName(user.firstName);
    setFathersName(user.fathersName);
    setBirthDate(user.birth_date);
    setUnemploymentDuration(user.unemployment_duration);
    setStatus(user.status);

    setValues({
      afm,
      amka,
      oaed,
      adt,
      lastName,
      firstName,
      fathersName,
      birthDate,
      unemploymentDuration,
      status,
    });
  }, [adt, afm, amka, birthDate, fathersName, firstName, lastName, match.params.amka, oaed, status, unemploymentDuration]);

  const handleBackClick = () => history.goBack();

  const redirectOnError = () => {
    if (Date.parse(birthDate) < AGE_LIMIT) {
      history.push('/app-results/not-found');
      return;
    }
  }

  return (
    <>
      {redirectOnError()}
      <div className="col-lg-6 col-md-12 col-sm-12 col-12">

        <div className="card shadow mt-5">
          <div className="card-header">
            <h3>Επιβεβαίωση Στοιχείων</h3>
          </div>

          <div className="card-body">
            <table className="table table-bordered mb-0">
              <tbody>
                {Object.values(categories).map((cat) => {
                  return <tr key={cat.category}>
                    <th scope="col">{cat.category}</th>
                    <td>{values[cat.value]?.toString() || ''}</td>
                  </tr>
                })}
                {/* {categories.map((cat, index) => {
                return <tr key={cat.category}>
                  <th scope="col">{cat.category}</th>
                  <td>{values[index]}</td>
                </tr>
              })} */}
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
                </button>
                <button className="btn btn-primary">
                  <Link to="/app-results/app-success">
                    Επιβεβαίωση
                </Link>
                </button>
              </div>
            </div>


          </div>

        </div>
      </div >
    </>
  );
}

export default PreviewTable;