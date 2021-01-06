import React from 'react';
import { aitiseis } from '../../db';

function ApplicationTable() {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ΑΜΚΑ</th>
          <th scope="col">ΜΟΡΙΑ</th>
        </tr>
      </thead>
      <tbody>
        {aitiseis
          .filter(a => !!a.is_moriodotimeni)
          .sort((a, b) => b.moria - a.moria)
          .map((aitisi, index) =>
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{aitisi.amka}</td>
              <td>{aitisi.moria}</td>
            </tr>
          )}

      </tbody>
    </table>
  );
}

export default ApplicationTable;
