import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row  py-3 ">
          <div className="col-1">
            <Link className="mr-3" to="/">
              <img src="starbucks-logo.png" alt="Starbucks logo" />
            </Link>
          </div>

          <div className="col-9">
            <nav className="navbar navbar-expand-lg align-self-end">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item px-1"><Link className="nav-link" to="/app-form">ΑΙΤΗΣΗ</Link></li>
                <li className="nav-item px-1"><Link className="nav-link" to="/app-review">REVIEW</Link></li>
                <li className="nav-item px-1"><Link className="nav-link" to="/app-results">RESULTS</Link></li>
              </ul>
            </nav>

          </div>

          <div className="col-2">
            <button className="btn btn-outline-dark">
              <Link className="nav-link" to="/activate">
                ΕΝΕΡΓΟΠΟΙΗΣΗ ΚΟΥΠΟΝΙΟΥ
              </Link>
            </button>
          </div>
        </div>

      </div>
    </header >
  );
}

export default Header;
