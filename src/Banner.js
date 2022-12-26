import React from "react";
import banner from "./images/banner.png";

import "./banner.css";

function Banner() {
  return (
    <div className="banner-head">
      <div className="banner">
        <h1 style={{ marginTop: "140px"}}>Built for</h1>
        <h1>enterprise</h1>
        <h1>businesses</h1>
        <div className="buttons">
          <button className="btn1">Learn More &#8594;</button>
          <a href="#" className="link">
            Explore Pages
          </a>
        </div>
      </div>
      <div className="mobile-banner">
        <center>
          <div style={{ marginTop: "25%" }}>
            <h1 style={{ fontSize: "54.6px" }}>Built for</h1>
            <h1 style={{ fontSize: "54.6px" }}>enterprise</h1>
            <h1 style={{ fontSize: "54.6px" }}>businesses</h1>
          </div>
          <p
            style={{
              fontSize: "18px",
              width: "329.67px",
              letterSpacing: "-0.36px",
              lineHeight: "36px",
              fontWeight: "400",
              textAlign: "center",
              marginTop: "5%",
            }}
          >
            Opus includes everything you need to build a beautiful website for
            your business. Built to perform and look good doing so.
          </p>
          <div>
            <div className="buttons">
              <button className="btn1">Contact Us &#8594;</button>
              <a href="#" className="link">
                Explore Pages
              </a>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Banner;
