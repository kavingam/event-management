import React from "react";
import Carousel from "../components/Carousel.js";
import Booking from "../components/Booking.js";
import androidImage from '../assets/images/android.jpg'; 
const About = () => {
    return (
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6x">
              <h1 className="mb-4">
                Welcome to <span className="text-primary text-uppercase">Venue Assams</span>
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                justo magna dolore erat amet
              </p>
              <div className="row g-3 pb-4">
                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                  <div className="borderx rounded p-1">
                    <div className="border rounded text-center p-4">
                      <i className="fa-solid fa-cake-candles fa-2x text-primary mb-2"></i>
                      <h2 className="mb-1" data-toggle="counter-up">
                        890
                      </h2>
                      <p className="mb-0">Birthday parties</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                  <div className="borderx rounded p-1">
                    <div className="border rounded text-center p-4">
                      <i className="fa-solid fa-gifts fa-2x text-primary mb-2"></i>
                      <h2 className="mb-1" data-toggle="counter-up">
                        200
                      </h2>
                      <p className="mb-0">Wedding Events</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                  <div className="borderx rounded p-1">
                    <div className="border rounded text-center p-4">
                      <i className="fa-solid fa-calendar-day fa-thin fa-calendar-day fa-2x text-primary mb-2"></i>
                      <h2 className="mb-1" data-toggle="counter-up">
                        123
                      </h2>
                      <p className="mb-0">Clients</p>
                    </div>
                  </div>
                </div>
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="">
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const Room = () => {
    return (
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="mb-5">
              Explore Our <span className="text-primary text-uppercase">venue</span>
            </h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src={androidImage} alt="" />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                  10,000 <i className="fa-solid fa-indian-rupee-sign"></i>
                  </small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Junior Suite</h5>
                    <div className="ps-2">
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-3 pe-3">
                      <i className="fa-solid fa-champagne-glasses"></i>
                    </small>
                    <small className="border-end me-3 pe-3">
                      <i className="fa-solid fa-gift"></i>
                    </small>
                    <small className="border-end me-3 pe-3">
                      <i className="fa-solid fa-calendar-days"></i>
                    </small>
                    <small>
                      <i className="fa-solid fa-map-location-dot"></i>
                    </small>
                  </div>
                  <p className="text-body mb-3">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.
                  </p>
                  <div className="d-flex justify-content-between">
                    <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">
                      Detail
                    </a>
                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const Newsletter = () => {
    return (
      <div className="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="row justify-content-center">
          <div className="col-lg-10 border rounded p-1">
            <div className="borderx rounded text-center p-1">
              <div className="bg-white rounded text-center p-5">
                <h4 className="mb-4">
                  Subscribe Our <span className="text-primary text-uppercase">Newsletter</span>
                </h4>
                <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                  <input
                    className="form-control w-100 py-3 ps-4 pe-5"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button type="button" className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
const Home = () => {
    return (
        <div>
            <Carousel />
            <Booking />
            <About />
            <Room />
            <Newsletter />
        </div>
    );
    
};

export default Home;
