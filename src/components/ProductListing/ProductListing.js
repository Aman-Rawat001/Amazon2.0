import React, { useEffect } from "react";
import axios from "axios";
import ProductComponent from "../Homepage/ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/index";

const ProductListing = () => {
  // const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/")
      .catch((err) => {
        console.log("Err: ", err);
      });
    // console.log(response.data);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
