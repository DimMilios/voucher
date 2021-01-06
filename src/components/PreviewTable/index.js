import React from 'react';

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
          {/* <ReadonlyForm data={dummyData} /> */}
          <table className="table table-borderless mb-0">
            <tbody>
              {dummyData.map(cat =>
                <tr key={cat.category}>
                  <th scope="col">{cat.category}</th>
                  <td>{cat.value}</td>
                </tr>)}
            </tbody>

          </table>
          <div>
            <p className="py-3 px-1"><strong>*Προσοχή: </strong>έχετε δικαίωμα για μόνο μία προσπάθεια υποβολής αίτησης. Ελέγξτε τα στοιχεία σας.</p>
            <div className="d-flex justify-content-between pb-3 px-2">
              <button className="btn btn-outline-primary">Πίσω</button>
              <button className="btn btn-primary">Επιβεβαίωση</button>
            </div>
          </div>


        </div>

      </div>
    </div >
  );
}

export default PreviewTable;