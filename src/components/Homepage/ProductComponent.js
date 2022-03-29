import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.ProductReducer.products);
  return (
    <div>
      <div className="container">
        Products
        <div className="row">
          {products.map((val, index) => {
            return (
              <div className="col-lg-4">
                <div class="card">
                  <img
                    src={val.image}
                    className="card-img-top"
                    alt="..."
                    style={{ width: "10rem" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">{val.title}</h5>
                    <p class="card-text">${val.price}</p>
                    {/* <p class="card-text">{val.description}</p> */}
                    <NavLink to={`product/${val.id}`} class="btn btn-primary">
                      More Details
                    </NavLink>
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
