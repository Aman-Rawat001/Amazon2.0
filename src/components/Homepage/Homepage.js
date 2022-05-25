import React from "react";
import ProductListing from "../ProductListing/ProductListing";
import TrendCarousel from "./TrendCarousel/TrendCarousel";
import heroScreen from "../../Assets/Images/heroImg.jpg";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homePage">
      <div className="">
        <div className="heroScreen">
          <img src={heroScreen} />
        </div>
      </div>
      <ProductListing />
    </div>
  );
};

export default Homepage;
