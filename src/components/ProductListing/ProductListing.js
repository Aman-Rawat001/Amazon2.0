import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductComponent from "../Homepage/ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/index";

const ProductListing = () => {
  // const products = useSelector((state) => state.ProductReducer.products);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch(setProducts(response.data));
        setLoading(false);
        // console.log(response.data);
      })
      .catch((err) => err);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div>{loading ? <div>Loading...</div> : <ProductComponent />}</div>;
};

export default ProductListing;
