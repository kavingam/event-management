import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid bg-dark px-0">
      <div className="row gx-0">
        {/* Logo Section */}
        <div className="col-lg-3 bg-dark d-none d-lg-block">
          <Link
            to="/"
            className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
          >
            <h1 className="m-0 text-primary text-uppercase">Venue</h1>
          </Link>
        </div>

        <div className="col-lg-9">
          {/* Contact Info */}
          <div className="row gx-0 bg-white d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                <i className="fa fa-envelope text-primary me-2"></i>
                <p className="mb-0">bhaitigam71@gmail.com</p>
              </div>
              <div className="h-100 d-inline-flex align-items-center py-2">
                <i className="fa fa-phone-alt text-primary me-2"></i>
                <p className="mb-0">+91 9707 212121</p>
              </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
              <div className="d-inline-flex align-items-center py-2">
                <a className="me-3" href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a className="me-3" href="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a className="me-3" href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a className="" href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Bar */}
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
            <Link to="/" className="navbar-brand d-block d-lg-none">
              <h1 className="m-0 text-primary text-uppercase">Venue</h1>
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav mr-auto py-0">
                <NavLink to="/" className="nav-item nav-link">
                  Home
                </NavLink>
                <NavLink to="/about" className="nav-item nav-link">
                  About
                </NavLink>
                <NavLink to="/services" className="nav-item nav-link">
                  Services
                </NavLink>
                <NavLink to="/rooms" className="nav-item nav-link">
                  Rooms
                </NavLink>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    Pages
                  </a>
                  <div className="dropdown-menu rounded-0 m-0">
                    <NavLink to="/booking" className="dropdown-item">
                      Booking
                    </NavLink>
                    <NavLink to="/team" className="dropdown-item">
                      Our Team
                    </NavLink>
                  </div>
                </div>
                <NavLink to="/contact" className="nav-item nav-link">
                  Contact
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
