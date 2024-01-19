/** @format */

import React, { Component } from "react";
import "../css/styles-footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 footer-column">
              <h5>COMPANY INFO</h5>
              <ul className="list-unstyled">
                <li>About ClickedIn</li>
                <li>Fashion Blogger</li>
                <li>Sustainability</li>
                <li>Careers</li>
                <li>#BeClickedInmodels</li>
              </ul>
            </div>
            <div className="col-md-3 footer-column">
              <h5>HELP & SUPPORT</h5>
              <ul className="list-unstyled">
                <li>Shipping Info</li>
                <li>Returns</li>
                <li>Refund</li>
                <li>How To Order</li>
                <li>How To Track</li>
                <li>Size Guide</li>
              </ul>
            </div>
            <div className="col-md-3 footer-column">
              <h5>CUSTOMER CARE</h5>
              <ul className="list-unstyled">
                <li>Contact Us</li>
                <li>Payment Method</li>
                <li>Bonus Point</li>
                <li>ClickedIn VIP</li>
              </ul>
            </div>

            <div className="col-md-3 footer-column">
              <h5>FIND US ON</h5>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <img
                    src={require("../img/FB.png")}
                    alt="Facebook Logo"
                    className="footer-logo"
                  />
                </li>
                <li className="list-inline-item">
                  <img
                    src={require("../img/insta.png")}
                    alt="Instagram Logo"
                    className="footer-logo"
                  />
                </li>
                <li className="list-inline-item">
                  <img
                    src={require("../img/tiktok.webp")}
                    alt="Tiktok Logo"
                    className="footer-logo"
                  />
                </li>
              </ul>
            </div>
            <div className="flex-end footer-column">
              <p id="subscribe-text">SIGN UP FOR CLICKEDIN STYLE NEWSLETTER</p>

              <form className="subscribe-form">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email Address"
                  required
                />
                <input
                  type="tel"
                  className="form-control"
                  placeholder="PH +63 Contact Number"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <hr></hr>
          <div className="row" id="footer-down">
            <div className="col-md-12 py-0">
              <p>&copy;2009-2024 ClickedIn All Rights Reserved</p>
              <p>
                <a href="#">Privacy Center</a> |{" "}
                <a href="#">Privacy & Cookie Policy</a> |{" "}
                <a href="#">Terms & Conditions</a> | <a href="#">IP Notice</a> |{" "}
                <a href="#">Imprint</a> | <a href="#">Ad Choice</a>
                <br />
              </p>
              <p>Philippines</p>
              <p>
                This site is protected by Trustwave's Trusted Commerce program{" "}
                <a href="#">DMCA.com Protection Status</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
