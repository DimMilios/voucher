import React from 'react';
import ReadonlyForm from '../ReadonlyForm';
// import './PreviewTable.css';

function PreviewTable() {
  const dummyData = [
    { category: "ΑΦΜ", value: "99999999" },
    { category: "ΑMKA", value: "9999999922" },
    { category: "ΟΑΕΔ", value: "99999999345334" },
    { category: "ΑΔΤ", value: "ΑΗ232323" },
  ];

  return (
    <div className="col-md-6 col-sm-12">

      <div className="card shadow mt-5">
        <div className="card-header">
          <h3>Επιβεβαίωση Στοιχείων</h3>
        </div>

        <div className="card-body">
          <ReadonlyForm data={dummyData} />

          <p><strong>*Προσοχή: </strong>έχετε δικαίωμα για μόνο μία προσπάθεια υποβολής αίτησης. Ελέγξτε τα στοιχεία σας.</p>
          <button className="btn btn-outline-primary">Πίσω</button>
          <button className="btn btn-primary float-right">Επιβεβαίωση</button>
        </div>

      </div>
    </div>
  );
}

export default PreviewTable;