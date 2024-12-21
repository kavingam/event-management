import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
      <div className="container pb-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-4">
            <div className="bg-primary rounded p-4">
              <Link to="/">
                <h1 className="text-white text-uppercase mb-3">Venue</h1>
              </Link>
              <p className="text-white mb-0">
                Welcome to Venue <Link className="text-dark fw-medium" to="#">Let's make your event design</Link>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <h6 className="section-titlex text-start text-primary text-uppercase mb-4">Contact</h6>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Garamur Town Majuli, Assams, India</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 9707 212121</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>venueassams.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href=""><i className="fa-brands fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fa-brands fa-x-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fa-brands fa-instagram"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="row gy-5 g-4">
              <div className="col-md-6">
                <h6 className="section-titlex text-start text-primary text-uppercase mb-4">Company</h6>
                <Link className="btn btn-link" to="/about">About Us</Link>
                <Link className="btn btn-link" to="/contact">Contact Us</Link>
                <Link className="btn btn-link" to="/privacy-policy">Privacy Policy</Link>
                <Link className="btn btn-link" to="/terms">Terms & Condition</Link>
                <Link className="btn btn-link" to="/support">Support</Link>
              </div>
              <div className="col-md-6">
                <h6 className="section-titlex text-start text-primary text-uppercase mb-4">Services</h6>
                <Link className="btn btn-link" to="/food-restaurant">Food & Restaurant</Link>
                <Link className="btn btn-link" to="/spa-fitness">Spa & Fitness</Link>
                <Link className="btn btn-link" to="/event-party">Event & Party</Link>
                <Link className="btn btn-link" to="/sports-gaming">Sports & Gaming</Link>
                {/* <Link className="btn btn-link" to="/gym-yoga">GYM & Yoga</Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <Link className="border-bottom" to="#">venueassams.com</Link>, All Right Reserved. Owner By <Link className="border-bottom" to="#">bhaiti gam</Link>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <Link to="/">Home</Link>
                <Link to="/cookies">Cookies</Link>
                <Link to="/help">Help</Link>
                <Link to="/faqs">FQAs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
