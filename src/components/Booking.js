import React, { useState } from 'react';
const Booking = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [event, setEvent] = useState('Event');
  const [place, setPlace] = useState('Place');

  const handleFind = () => {
    console.log('Find button clicked');
    console.log({ checkInDate, checkOutDate, event, place });
  };

  return (
    <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container">
        <div className="bg-white shadow" style={{ padding: '35px' }}>
          <div className="row g-2">
            <div className="col-md-10">
              <div className="row g-2">
                <div className="col-md-3">
                  <div className="date" id="date1" data-target-input="nearest">
                    <input
                      type="text"
                      className="form-control datetimepicker-input"
                      placeholder="Check in"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="date" id="date2" data-target-input="nearest">
                    <input
                      type="text"
                      className="form-control datetimepicker-input"
                      placeholder="Check out"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <select
                    className="form-select"
                    value={event}
                    onChange={(e) => setEvent(e.target.value)}
                  >
                    <option value="Event">Event</option>
                    <option value="1">Birth Day</option>
                    <option value="2">Wedding</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select
                    className="form-select"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                  >
                    <option value="Place">Place</option>
                    <option value="1">Assams</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary w-100" onClick={handleFind}>
                Find
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
