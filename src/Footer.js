import "./Footer.css";
import React from 'react';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row" style={{color:"white"}}>
          {/* Column1 */}
          <div className="col">
            <h4>WYT INC</h4>
            <h4 className="list">
              <li>343-420-6969</li>
              <li>Ottawa, Canada</li>
              <li>123 Streeet South North</li>
            </h4>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Socials</h4>
            <ui className="list">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm" style={{color:"white"}}>
            &copy;{new Date().getFullYear()} WYT | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;