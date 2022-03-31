import React from "react";
import "./AddToCart.css";
import { useSelector } from "react-redux";

const AddToCart = () => {
  const cartProducts = useSelector(
    (state) => state.addToCartReducer.cartProducts
  );

  return (
    <>
      <div className="container">
        <div className="addtocartcontainer pt-3">
          <div className="row p-3">
            <strong className="mb-1">MY BAG</strong>
            {cartProducts.map((value, idx) => {
              return (
                <div className="col-lg-8 cartBox ms-3">
                  <div className="deleteCartItem">
                    <div>❌</div>
                  </div>
                  <div className="row py-3">
                    <div className="col-3 displayFlexProperty">
                      <img className="cartImageBox" src={value.image} />
                    </div>

                    <div className="col-9 cartDetailsBox">
                      <strong className="itemPrice mb-2">${value.price}</strong>
                      <p className="itemTitle">{value.title}</p>
                      <p className="itemCategory">Category: {value.category}</p>
                      <p className="itemDesc">{value.description}</p>
                      <p className="itemRating">
                        <small>
                          Rating{" "}
                          <span>
                            {value.rating.rate} ({value.rating.count})
                          </span>
                        </small>
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
