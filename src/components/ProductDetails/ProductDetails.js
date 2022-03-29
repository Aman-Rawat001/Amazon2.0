import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../../redux/actions";
import axios from "axios";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  // const product = useSelector((state) => state.selectedProductReducer);

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("err", err));

    dispatch(selectedProducts(response.data));
    // console.log(response.data);
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return <div>Product Details</div>;
};

export default ProductDetails;
