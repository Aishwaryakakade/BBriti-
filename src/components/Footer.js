import React from "react";
import footerLogo from "../img/bbriti-high-resolution-logo.jpeg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-12 footer-info">
                <Link to="/" className="logo d-flex align-items-center">
                  <img src={footerLogo} alt="" title="" />
                </Link>
                <p>
                  We focus on Business Growth as a Service provides tailored
                  solutions to accelerate your business success, from strategic
                  planning to execution
                </p>
                <div className="social-links d-flex  mt-3">
                  <Link to="/" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </Link>

                  <Link to="/" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </Link>

                  <Link to="/" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to="/services/#Revenue-Generation">
                      Revenue Generation
                    </HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to="/services/#Sales-Process-Optimization">
                      Sales Process Optimization
                    </HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to="/services/#Sales-Enablement">
                      Sales Enablement
                    </HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to="/services/#Market-Strategy">
                      Market Strategy
                    </HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink
                      smooth
                      to="/services/#Customer_Relationship_Management"
                    >
                      Customer Relationship Management
                    </HashLink>
                  </li>

                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to="/services/#Digital_Transformation">
                      Digital Transformation
                    </HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink
                      smooth
                      to="/services/#Financial_Planning_and_Analysis"
                    >
                      Financial Planning and Analysis
                    </HashLink>
                  </li>

                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to="/services/#Operational_Efficiency">
                      Operational Efficiency
                    </HashLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <address>
                  Begur <br /> Bengaluru Karnataka
                  <br />
                  <br />
                  <strong>Phone:</strong> 9000090000 <br />
                  <strong>Email: </strong>
                  <a href="mailto:dummy@bbriti.com">dummy@bbriti.com</a>
                  <br />
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <div className="container">
            <div className="copyright">
              <span id="copyright">
                <script>
                  document.getElementById('copyright').appendChild(document.createTextNode(new
                  Date().getFullYear()) )
                </script>
              </span>
              &copy; Copyright
              <span> BBriti Pvt. Ltd </span>. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
