import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

function Header() {


  return (
    <header className="shadow">
      <div className="container px-0">

        <nav className="navbar navbar-expand-lg navbar-light bg-light pl-0">
          <Link className="mr-3 navbar-brand" to="/">
            <img src={`${process.env.PUBLIC_URL}/starbucks-logo.png`} alt="Starbucks logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item px-1"><Link className="nav-link" to="/app-form">ΑΙΤΗΣΗ</Link></li>
              <li className="nav-item px-1"><Link className="nav-link" to="/admin">ADMIN</Link></li>
              <li className="nav-item px-1"><Link className="nav-link" to="/admin/applications">ΑΠΟΤΕΛΕΣΜΑΤΑ</Link></li>
            </ul>
            <Link id="voucher-link" className="btn nav-link" to="/activate">
              ΕΝΕΡΓΟΠΟΙΗΣΗ ΚΟΥΠΟΝΙΟΥ
            </Link>
          </div>
        </nav>

      </div>
    </header >
  );
}

export default Header;
