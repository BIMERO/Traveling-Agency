import React, { useEffect } from "react";
import GroupImage from "../../Assets/Group-2.png";

import aos from "aos";
import "aos/dist/aos.css";

const Lounge = () => {
  // useEffect(() => {
  //   aos.init({ duration: 2000 })
  // }, [])

  return (
    <div className="lounge container section">
      <div className="section-container grid">
        <div className="img-div">
          <img src={GroupImage} alt="" />
        </div>

        <div className="textdiv">
          <h2>Uncompanied Minor Lounge</h2>

          <div className="grids grid">
            <div
              // data-aos="fade-right"
              // data-aos-duration="2500"
              className="single-grid"
            >
              <span className="grid-title">Help through the airport</span>
              <p>
                You can also call airlines through your phone and book a flight
                ticket to one of your favourite destinations.
              </p>
            </div>

            <div
              // data-aos="fade-right"
              // data-aos-duration="2500"
              className="single-grid"
            >
              <span className="grid-title">Care on the flight</span>
              <p>
                You can also call airlines through your phone and book a flight
                ticket to one of your favourite destinations.
              </p>
            </div>

            <div
              // data-aos="fade-right"
              // data-aos-duration="2500"
              className="single-grid"
            >
              <span className="grid-title">Priority boarding</span>
              <p>
                You can also call airlines through your phone and book a flight
                ticket to one of your favourite destinations.
              </p>
            </div>

            <div
              // data-aos="fade-right"
              // data-aos-duration="2500"
              className="single-grid"
            >
              <span className="grid-title">Chaffeur drive-in service</span>
              <p>
                You can also call airlines through your phone and book a flight
                ticket to one of your favourite destinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
