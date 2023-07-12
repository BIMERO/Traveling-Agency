import React, { useEffect } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";

import aos from "aos";
import "aos/dist/aos.css";

const Search = () => {
  // useEffect(() => {
  //   aos.init({ duration: 2000 })
  // }, [])

  return (
    <div className="search container section">
      <div
        // data-aos="fade-up"
        // data-aos-duration="2500"
        className="section-container grid"
      >
        <div className="btns flex">
          <div className="single-btn">
            <span>Economy</span>
          </div>

          <div className="single-btn">
            <span>Business</span>
          </div>

          <div className="single-btn">
            <span>First</span>
          </div>
        </div>

        <div
          // data-aos="fade-up"
          // data-aos-duration="2500"
          className="search-input flex"
        >
          <div className="single-input flex">
            <div className="icons">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input
                className="input"
                type="text"
                placeholder="Where do you want to explore?"
              />
            </div>
          </div>

          <div className="single-input flex">
            <div className="icons">
              <RiAccountCircleLine className="icon" />
            </div>
            <div className="texts">
              <h4>Travellers</h4>
              <input className="input" type="text" placeholder="Add Guests" />
            </div>
          </div>

          <div className="single-input flex">
            <div className="icons">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input className="input" type="text" placeholder="Add Date" />
            </div>
          </div>

          <div className="single-input flex">
            <div className="icons">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input className="input" type="text" placeholder="Add Date" />
            </div>
          </div>

          <button className="btn btnBlock flex">Search Flight</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
