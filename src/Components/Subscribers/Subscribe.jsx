import React, { useEffect } from "react";

import aos from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
  // useEffect(() => {
  //   aos.init({ duration: 2000 })
  // }, [])

  return (
    <div className="subscribe section">
      <div
        // data-aos="fade-up"
        // data-aos-duration="2500"
        className="section-container container"
      >
        <h2>Subscribe to our Newsletters & get Latest News</h2>
        <div className="input">
          <input type="text" placeholder="Enter your email address" />
          <button className="btn">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
