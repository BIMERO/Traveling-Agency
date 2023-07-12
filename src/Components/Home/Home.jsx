import React, { useEffect } from "react";
import video from "../../Assets/plane.mp4";
import plane from "../../Assets/plane.png";

import aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  // useEffect(() => {
  //   aos.init({ duration: 2000 })
  // }, [])

  return (
    <div className="home container flex">
      <div className="main-text">
        <h1>Create Lasting Memories With Us</h1>
      </div>

      <div
        // data-aos="fade-down"
        // data-aos-duration="2500"
        className="home-images flex"
      >
        <div className="video">
          <video src={video} className="video-play" autoPlay muted loop />
        </div>

        <img src={plane} alt="plane" className="plane" />
      </div>
    </div>
  );
};

export default Home;
