import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts, refreshSelectedProducts } from "../../redux/actions";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = () => {
  const [loadingDetails, setLoadingDetails] = useState(true);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.selectedProductReducer);

  const fetchProductDetails = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        console.log(res.data);
        dispatch(selectedProducts(res.data));
        setLoadingDetails(false);
      })
      .catch((err) => err);
  };

  useEffect(() => {
    fetchProductDetails();
    return () => {
      dispatch(refreshSelectedProducts());
    };
  }, []);

  return (
    <>
      {loadingDetails ? (
        <div className="container productDetails">
          <div className="row my-5">
            <div className="col-lg-6 p-4">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <FontAwesomeIcon icon={faSpinner} />
              </div>
            </div>
            <div className="col-lg-6 p-4">
              <p>Loading...</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container productDetails">
          <div className="row my-5">
            <div className="col-lg-6 p-4">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  className="productImg"
                  alt="Loading Image..."
                  src={product.image}
                />
              </div>
            </div>
            <div className="col-lg-6 p-4">
              <p>
                <small>Product id: {product.id}</small>
              </p>
              <h4>{product.title}</h4>
              <p>
                <small>Category: {product.category}</small>
              </p>
              <p>{product.description}</p>
              <h6>${product.price}</h6>
              <NavLink to="/add-to-cart">
                <button className="btn shopNowBtn">Shop Now</button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
