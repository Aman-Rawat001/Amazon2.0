import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.ProductReducer.products);
  return (
    <div>
      <div className="container">
        Products
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
                    <div>
                      <NavLink to={`product/${val.id}`} class="btn btn-primary">
                        More Details
                      </NavLink>
                    </div>
                    <button className="btn, btn-primary">Add To Cart</button>
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
