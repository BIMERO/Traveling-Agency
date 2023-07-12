import React, { useEffect } from "react";
import logo from "../../Assets/logo.png";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

import aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  // useEffect(() => {
  //   aos.init({ duration: 2000 });
  // }, []);

  return (
    <div className="footer">
      <div className="section-container container grid">
        <div className="grid-one">
          <div className="logo">
            <img src={logo} className="logo-image" />
          </div>
          <p>Your mind is stronger than your feelings, fly!!</p>
          <div className="social flex">
            <TiSocialFacebook className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiFillYoutube className="icon" />
            <FaPinterest className="icon" />
          </div>
        </div>

        <div
          // data-aos="fade-up"
          // data-aos-duration="2500"
          className="footer-links"
        >
          <span className="link-title">Information</span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Check-In</a>
          </li>
          <li>
            <a href="">Manage your booking</a>
          </li>
        </div>

        <div
          // data-aos="fade-up"
          // data-aos-duration="2500"
          className="footer-links"
        >
          <span className="link-title">Quick Guide</span>
          <li>
            <a href="">FAQs</a>
          </li>
          <li>
            <a href="">How to</a>
          </li>
          <li>
            <a href="">Baggage</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Route Map</a>
          </li>
          <li>
            <a href="">Our Communities</a>
          </li>
        </div>

        <div
          // data-aos="fade-up"
          // data-aos-duration="2500"
          className="footer-links"
        >
          <span className="link-title">Information</span>
          <li>
            <a href="">Chaffeur</a>
          </li>
          <li>
            <a href="">Our partners</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Transportation</a>
          </li>
          <li>
            <a href="">Programme Rules</a>
          </li>
          <li>
            <a href="">Manage your booking</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
