import React from 'react';
import './Viewer.css';

function Viewer() {
  return (
    <div className="viewer ">
      <div className="card shadow mt-5">
        <div className="card-header">
          <h3>Voucher</h3>
        </div>
        <div className="card-body voucher-pdf p-0">
          <div className="iframe-container h-100 w-100">
            <iframe title="pdf" className="w-100 h-100" src={`${process.env.PUBLIC_URL}/perigrafi.pdf`} alt="pdf"></iframe>
          </div>
        </div>
        <div className="card-footer mt-0">

          <a href={`${process.env.PUBLIC_URL}/perigrafi.pdf`}
            download
            target="_blank"
            rel="noreferrer"
            className="voucher-btn btn btn-light ml-2 d-flex float-right"
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 1 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
            </span>
            <span className="ml-1">Λήψη</span>
          </a>

          <a href={`${process.env.PUBLIC_URL}/perigrafi.pdf`}
            download
            target="_blank"
            rel="noreferrer"
            className="voucher-btn btn btn-light d-flex float-right"
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer" viewBox="0 1 16 16">
                <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
              </svg>
            </span>
            <span className="ml-1">Εκτύπωση</span>
          </a>
        </div>
      </div>

    </div>
  );
}

export default Viewer;