import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="mt-auto">
      <div className="container text-center">
        &copy; Dimitris Milios {(new Date()).getFullYear()} - Human Computer Interaction Class
      </div>
    </footer>
  );
}

export default Footer;
