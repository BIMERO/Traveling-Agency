import React, { useEffect } from "react";
import Group from "../../Assets/Grid.png";

import aos from "aos";
import "aos/dist/aos.css";

const Support = () => {
  // useEffect(() => {
  //   aos.init({ duration: 2000 })
  // }, [])

  return (
    <div className="support container section">
      <div className="section-container">
        <div className="titles">
          <small>Travel Support</small>
          <h2>Plan your travel with confidence</h2>
          <p>
            Find help with booking and travel plans, see what to expect along
            the journey
          </p>
        </div>

        <div className="infot grid">
          <div className="textdiv grid">
            <div
              // data-aos="fade-down"
              // data-aos-duration="2500"
              className="single-info"
            >
              <span className="number">01</span>
              <h4>Travel requirements for Thailand</h4>
              <p>
                Find help with your booking and travel plans, see what to expect
                along the journey to your favourite destinations!
              </p>
            </div>

            <div
              // data-aos="fade-down"
              // data-aos-duration="3500"
              className="single-info"
            >
              <span className="number colorone">02</span>
              <h4>Chaffeurs at your service</h4>
              <p>
                Find help with your booking and travel plans, see what to expect
                along the journey to your favourite destinations!
              </p>
            </div>

            <div
              // data-aos="fade-down"
              // data-aos-duration="4500"
              className="single-info"
            >
              <span className="number colortwo">03</span>
              <h4>Multi-risk travel Insurance</h4>
              <p>
                Find help with your booking and travel plans, see what to expect
                along the journey to your favourite destinations!
              </p>
            </div>
          </div>

          <div
            // data-aos="fade-left"
            // data-aos-duration="2500"
            className="img-div"
          >
            <img src={Group} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
