import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductComponent from "../Homepage/ProductComponent";
import TrendCarousel from "../Homepage/TrendCarousel/TrendCarousel";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/index";

const ProductListing = () => {
  const products = useSelector((state) => state.ProductReducer.products);
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
    if (products.length == 0) {
      fetchProducts();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="container-fluid product-listing">
      {loading ? (
        <div>
          <strong>Loading Products...</strong>
        </div>
      ) : (
        <>
          <ProductComponent />
          <div className="mt-2">
            <TrendCarousel />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductListing;
