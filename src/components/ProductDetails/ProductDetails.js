import React, { useEffect } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts, refreshSelectedProducts } from "../../redux/actions";
import axios from "axios";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.selectedProductReducer);

  const fetchProductDetails = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        console.log(res.data);
        dispatch(selectedProducts(res.data));
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
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
