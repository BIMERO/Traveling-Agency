import React, { useEffect } from "react";
import { travelerdata } from "../../data";

import aos from "aos";
import "aos/dist/aos.css";

const Travellers = () => {
  // useEffect(() => {
  //   aos.init({ duration: 2000 })
  // }, [])

  return (
    <div className="travellers container section">
      <div className="section-container">
        <h2>Top travelers of this month!</h2>

        <div className="travellers-container grid">
          {travelerdata.map((val) => {
            return (
              <div
                // data-aos="fade-down"
                // data-aos-duration="2500"
                className="single-traveller"
              >
                <img src={val.cover} className="destination-image" />

                <div className="traveler-details">
                  <div className="traveler-picture">
                    <img src={val.user} className="traveler-image" />
                  </div>
                  <div className="traveler-name">
                    <span> {val.name} </span>
                    <p> {val.handle} </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Travellers;
