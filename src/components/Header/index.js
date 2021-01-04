import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="container">
        {/* <ul className="nav p-3">
          <li className="nav-item nav-link active" href="#">Active</li>
          <li className="nav-item nav-link" href="#">Link</li>
          <li className="nav-item nav-link" href="#">Link</li>
          <li className="nav-item nav-link disabled" href="#" tabIndex="-1" ariaDisabled="true">Disabled</li>
        </ul> */}
        <nav className="nav">
          <a className="nav-link" href="#/">ΑΡΧΙΚΗ</a>
          <a className="nav-link" href="#/">ΑΙΤΗΣΗ</a>
          <a className="nav-link" href="#/">ΕΛΕΓΧΟΣ Voucher_ID</a>
          <a className="nav-link disabled" href="#/" tabIndex="-1" aria-disabled="true">Disabled</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
