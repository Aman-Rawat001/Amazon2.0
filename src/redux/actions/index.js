export const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};
export const selectedProducts = (products) => {
  return {
    type: "SELECTED_PRODUCTS",
    payload: products,
  };
};
export const refreshSelectedProducts = () => {
  return {
    type: "REFRESH_SELECTED_PRODUCTS",
  };
};

export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};
