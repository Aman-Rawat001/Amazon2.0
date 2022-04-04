import React, { useEffect, useState } from "react";
import "./AddToCart.css";
import emptyCartImg from "../../Assets/Images/empty_cart.svg";
import protectionImg from "../../Assets/Images/100protection.png";
import { useSelector, useDispatch } from "react-redux";
import { deleteCartProduct } from "../../redux/actions";

const AddToCart = () => {
  const [noProduct, setNoProduct] = useState(true);
  const [totalAmt, setTotalAmn] = useState("0");
  const cartProducts = useSelector(
    (state) => state.addToCartReducer.cartProducts
  );
  const dispatch = useDispatch();

  const calculateAmt = () => {
    var temp = 0;
    for (var i = 0; i < cartProducts.length; i++) {
      temp += cartProducts[i].price;
      // console.log(temp);
    }
    setTotalAmn(temp);
  };
  useEffect(() => {
    if (cartProducts.length !== 0) {
      setNoProduct(false);
    } else {
      setNoProduct(true);
    }
    calculateAmt();
  }, [cartProducts]);

  return (
    <>
      <div className="container-fluid">
        <div className="addtocartcontainer pt-3">
          <div className="row p-3">
            <strong className="mb-4 display-6">Shopping Cart</strong>
            <hr className="" />
            <div className="subTotalItems">
              <div>
                <div>
                  <img src={protectionImg} />
                </div>
                <div className="proceedToBuy mt-2 p-3">
                  <p>
                    Subtotal ({cartProducts.length} items):{" "}
                    <strong>₹ {totalAmt}</strong>
                  </p>
                  <div>
                    {" "}
                    <button>Proceed To Buy</button>
                  </div>
                </div>
              </div>
            </div>
            {noProduct && (
              <div className="emptyCart">
                <img src={emptyCartImg} alt="Empty cart" />
              </div>
            )}
            {cartProducts.map((value, idx) => {
              return (
                <div className="col-lg-8 cartBox ">
                  <div
                    className="deleteCartItem"
                    onClick={() => dispatch(deleteCartProduct(value.id))}
                  >
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
