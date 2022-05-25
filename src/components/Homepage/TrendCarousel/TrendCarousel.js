import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./TrendyCarousel.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { NavLink } from "react-router-dom";

const TrendCarousel = () => {
  const [trendyProducts, setTrendyProducts] = useState([{}]);
  var products = useSelector((state) => state.ProductReducer.products);
  // console.log("products", products);

  return (
    <>
      <div className="container-fluid TrendProductsContainer ">
        <div className="container-fluid pb-5">
          <div>
            <h4 className="">Today's Deals</h4>
          </div>
          <OwlCarousel
            items={4}
            margin={8}
            // autoplay={true}
            className="owl-theme bgWhite"
            // smartSpeed={1000}
            autoplayTimeout={1000}
            autoWidth={true}
            // nav={true}
            // animateIn={true}
            rewind={true}
          >
            {products.map((item, index) => {
              return (
                <NavLink
                  to={`product/${item.id}`}
                  className="carouselHyperLink"
                >
                  <div className="items trendyProdBox" key={index}>
                    <img src={item.image} alt="fasf" />

                    <p className="trendyProdPara">
                      {" "}
                      <span className="trendyProdSpan me-1">
                        Up to 70% off{" "}
                      </span>
                      {item.category}
                    </p>
                    {/* <p></p> */}
                  </div>
                </NavLink>
              );
            })}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default TrendCarousel;
