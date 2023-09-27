import React from "react";
import { NavLink } from "react-router-dom";
import HeroImage from "../../assets/gourmet.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container global-max-width">
        <div className="hero-left">
          <h2>Little Lemon</h2>
          <h3>Los Angeles</h3>
          <p>
          At our Mediterranean restaurant, we celebrate family tradition with modern twists on classic dishes.
          </p>
          <NavLink to="/reservation">
            <button className="reserve-btn">Reserve a Table</button>
          </NavLink>
        </div>

        <div className="hero-right">
          <div className="hero-image">
            <img src={HeroImage} alt="Serving delicious dish" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
