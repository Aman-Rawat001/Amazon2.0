import React, { useEffect, useState } from "react";
import "./ProductComponent.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../redux/actions/index";

const ProductComponent = () => {
  const [productSelecter, setProductSelecter] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductReducer.products);

  const ATCProducts = useSelector(
    (state) => state.addToCartReducer.cartProducts
  );
  console.log(ATCProducts);

  const temp = {};
  const handleAddToCart = (val) => {
    setProductSelecter((productSelecter) => [...productSelecter, val]);
    dispatch(addToCart(productSelecter));
    // console.log(productSelecter);
  };

  useEffect(() => {
    setProductSelecter(ATCProducts);
  }, []);

  return (
    <div>
      <div className="container mt-4">
        <strong> Latest Products </strong>
        <div className="row cardBox">
          {products.map((val, index) => {
            return (
              <div className="col-lg-4">
                <div class="cardImg m-2">
                  <div className="imgBox">
                    <img src={val.image} className="card-img-top" alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">{val.title}</h5>
                    <p class="card-text">${val.price}</p>
                    <NavLink
                      className="moreDetails"
                      to={`product/${val.id}`}
                      class="btn btn-primary"
                    >
                      <div className="card-moreDetails">More Details</div>
                    </NavLink>
                    <div>
                      <button
                        className="btn, btn-primary atcBtn"
                        onClick={() => handleAddToCart(val)}
                      >
                        Add To Basket 🛒
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>{" "}
      </div>
    </div>
  );
};

export default ProductComponent;
