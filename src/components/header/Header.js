import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faSearch,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const addToCartProductCount = useSelector(
    (state) => state.addToCartReducer.cartProducts
  );

  return (
    <>
      <div className="container-fluid headerNav">
        <div className="header py-2">
          <NavLink to="/">
            <img className="logo" src={logo} alt="logo" />
          </NavLink>
          <div className="delivertouser  NavflexBox">
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className="navContent ms-2">
              <p className="navLightFont">Deliver to User</p>
              <p className="navBoldFont">Dehradun 248001</p>
            </div>
          </div>

          <form class="form-inline my-2 my-lg-0 navSearchBar">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="delivertouser  NavflexBox">
              <div className="navContent">
                <p className="navLightFont">Hello, User</p>
                <NavLink to="/sign-in">
                  <p className="navBoldFont">Sign In</p>
                </NavLink>
              </div>
            </div>
            <div className="delivertouser  NavflexBox ms-4">
              <div className="navContent">
                <p className="navLightFont">Yourr</p>
                <p className="navBoldFont">Orders</p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <NavLink to="/add-to-cart" className="cartItems">
              <p>
                {" "}
                <span>
                  <FontAwesomeIcon icon={faBasketShopping} />
                </span>{" "}
                {addToCartProductCount.length}
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
