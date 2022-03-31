import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const addToCartProductCount = useSelector(
    (state) => state.addToCartReducer.cartProducts
  );

  return (
    <>
      <div className="container-fluid headerNav">
        <div className="container header py-2">
          <NavLink to="/">
            <h4 className="logoText">INDKart</h4>
          </NavLink>
          <NavLink to="/add-to-cart">
            <p>
              {" "}
              <span> 🛒</span> {addToCartProductCount.length}
            </p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
