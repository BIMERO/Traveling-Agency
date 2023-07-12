import React, { useEffect } from "react";
import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";

import aos from "aos";
import "aos/dist/aos.css";

const Info = () => {
  // useEffect(() => {
  //   aos.init({ duration: 2000 })
  // }, [])

  return (
    <div className="info section">
      <div className="info-container container">
        <div className="titles flex">
          <h2>Travel to make memeories all around the world</h2>
          <button data-aos="fade-left" data-aos-duration="2500" className="btn">
            View All
          </button>
        </div>
        <div className="cards-div grid">
          <div
            // data-aos="fade-up"
            // data-aos-duration="2500"
            className="single-card grid"
          >
            <div className="icons flex">
              <RxCalendar className="icon" />
            </div>
            <span className="card-title">Book and Relax</span>
            <p>
              You can also call airlines from your phone and book a flight
              ticket
            </p>
          </div>

          <div
            // data-aos="fade-up"
            // data-aos-duration="3500"
            className="single-card grid"
          >
            <div className="icons flex colorone">
              <BsShieldCheck className="icon" />
            </div>
            <span className="card-title">Smart CheckList</span>
            <p>
              You can also call airlines from your phone and book a flight
              ticket
            </p>
          </div>

          <div
            // data-aos="fade-up"
            // data-aos-duration="3500"
            className="single-card grid"
          >
            <div className="icons flex colortwo">
              <BsBookmarkCheck className="icon" />
            </div>
            <span className="card-title">Book and Relax</span>
            <p>
              You can also call airlines from your phone and book a flight
              ticket
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
