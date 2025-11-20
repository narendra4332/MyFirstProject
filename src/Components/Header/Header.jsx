import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import SES from "./Images/SES.png"
import {
  FaShoppingCart,
  FaUserShield,
  FaHome,
  FaInfoCircle,
  FaBoxOpen,
  FaPhoneAlt,
  FaComments,
} from "react-icons/fa";

export default function Header({ cart, handleLogout, userRole }) {
  const location = useLocation();

  const activeLink = (path) =>
    `nav-link text-dark ${location.pathname === path ? "active" : ""}`;

  return (
    <nav className="navbar navbar-expand-lg bg-light py-2 fixed-top shadow-sm">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          <span className="brand-name"><img src={SES} alt="" /></span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav mx-auto">

            <li className="nav-item px-3">
              <Link className={activeLink("/")} to="/">
                <FaHome className="me-1" /> Home
              </Link>
            </li>

            <li className="nav-item px-3">
              <Link className={activeLink("/About")} to="/About">
                <FaInfoCircle className="me-1" /> About
              </Link>
            </li>

            <li className="nav-item px-3">
              <Link className={activeLink("/Product")} to="/Product">
                <FaBoxOpen className="me-1" /> Products
              </Link>
            </li>

            {/* ⭐ ADMIN ONLY MENU OPTION */}
            {userRole === "admin" && (
              <li className="nav-item px-3">
                <Link className={activeLink("/Orders")} to="/Orders">
                  <FaComments className="me-1" /> Inquiries
                </Link>
              </li>
            )}

            <li className="nav-item px-3">
              <Link className={activeLink("/Contact")} to="/Contact">
                <FaPhoneAlt className="me-1" /> Contact Us
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">

            <Link className="btn btn-sm cart-btn me-2" to="/Cart">
              <FaShoppingCart className="me-1" />
              Inquiry Cart ({cart.length})
            </Link>

            {/* ⭐ ADMIN ONLY LOGOUT BUTTON */}
            {userRole === "admin" && (
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={handleLogout}
              >
                <FaUserShield className="me-1" /> Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
