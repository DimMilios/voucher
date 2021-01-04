import React from 'react';

function ReadonlyForm({ data }) {
  return (
    <form>
      {data.map(d =>
        <div className="row form-group" key={d.category}>
          <label htmlFor={d.category} className="m-0 col-4"><strong>{d.category}</strong></label>
          <input name={d.category} readOnly={true} className="col-8 mb-2 ml-3 form-control" value={d.value} />
        </div>
      )}
    </form>
  );
}

export default ReadonlyForm;
