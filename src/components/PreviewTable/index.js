import React from 'react';
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
          <form>
            {dummyData.map(data =>
              <div className="row form-group" key={data.category}>
                <label htmlFor={data.category} className="m-0 col-4"><strong>{data.category}</strong></label>
                <input name={data.category} readOnly={true} className="col-8 mb-2 ml-3 form-control" value={data.value} />
              </div>
            )}
          </form>
          <p><strong>*Προσοχή: </strong>έχετε δικαίωμα για μόνο μία προσπάθεια υποβολής αίτησης. Ελέγξτε τα στοιχεία σας.</p>
          <button className="btn btn-outline-primary">Πίσω</button>
          <button className="btn btn-primary float-right">Επιβεβαίωση</button>
        </div>

      </div>
    </div>


    // <div className="card shadow mt-5">
    //   <div className="card-body pt-0 pb-0">
    //     {dummyData.map(data =>
    //       <div className="row border" key={data.category}>
    //         <div className="col-4 p-2"><strong>{data.category}</strong></div>
    //         <div className="col-8 border-left p-2">{data.value}</div>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
}

export default PreviewTable;