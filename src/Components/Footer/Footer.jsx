import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="row text-md-start">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">
              <i className="bi bi-building me-2"></i> SUSCOM ENERGY SOLUTIONS.
            </h5>
            <p className="footer-text">
              Delivering quality electromechanical solutions with innovation and
              excellence.
            </p>
            {/* Social Icons */}
            <div className="d-flex justify-content-md-start">
              <a href="#" className="footer-icon">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="footer-title">
              <i className="bi bi-link-45deg me-2"></i> Quick Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">
                  <i className="bi bi-house-door me-2"></i> Home
                </Link>
              </li>

              <li>
                <Link to="/About" className="footer-link">
                  <i className="bi bi-info-circle me-2"></i> About
                </Link>
              </li>

              <li>
                <Link to="/Product" className="footer-link">
                  <i className="bi bi-box-seam me-2"></i> Products
                </Link>
              </li>

              <li>
                <Link to="/Contact" className="footer-link">
                  <i className="bi bi-telephone me-2"></i> Contact
                </Link>
              </li>

              {/* Hidden Admin Login */}
              <li style={{ display: "none" }}>
                <Link to="/admin" className="footer-link">
                  <i className="bi bi-shield-lock me-2"></i> Admin Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Suscom Group – 9 Companies */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">
              <i className="bi bi-diagram-3 me-2"></i> Suscom Group
            </h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://suscom.in/home"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Suscom Electromechnical
                </a>
              </li>
              <li>
                <a
                  href="https://suscomagro.in"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Suscom Agro Foods
                </a>
              </li>
              <li>
                <a
                  href="https://suscominfotech.in/"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Suscom Information Technology
                </a>
              </li>
              <li>
                <a
                  href="https://suscomgroup.in/suscom-infrastructure/"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Suscom Infra
                </a>
              </li>
              <li>
                <a
                  href="https://suscomgroup.in/suscom-academy/"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Suscom Academy
                </a>
              </li>
              <li>
                <a
                  href="https://suscomgroup.in/susmech-interprises/"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Susmech Enterprises
                </a>
              </li>
              <li>
                <a
                  href="https://suscomgroup.in/sidesh-info-tech-system/"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sidesh Info-Tech system
                </a>
              </li>
              <li>
                <a
                  href="https://suscomgroup.in/suscom-foundation/"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Suscom Foundation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">
              <i className="bi bi-telephone me-2"></i> Contact Us
            </h5>

            <p className="footer-text">
              <i className="bi bi-geo-alt me-2"></i>Registered Office: 122-A,B
              Near D-Mart, Sagar High Street, Ayodhya Bypass Road, Bhopal,
              462041
            </p>

            <p className="footer-text">
              <i className="bi bi-geo-alt me-2"></i>Regional Office: MSB-II201,
              Near Chimney, New Siyaganj, Indore (M.P.)
            </p>

            <p className="footer-text">
              <i className="bi bi-envelope me-2"></i> info@suscomenergy.in
            </p>

            <p className="footer-text">
              <i className="bi bi-phone me-2"></i> +91 769 745 1009
            </p>
          </div>
        </div>

        <hr className="border-light" />

        <p className="text-center footer-bottom">
          &copy; 2025 SUSCOM ENERGY SOLUTIONS All Rights Reserved.
          <br />
          This site is designed and developed by Suscom Information Technology
          (SIT)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
