const initialState = {
  products: [],
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECTED_PRODUCTS":
      return { ...state, ...action.payload };
    case "REFRESH_SELECTED_PRODUCTS":
      return {};
    default:
      return state;
  }
};

const addtocartInitState = {
  cartProducts: [],
};

export const addToCartReducer = (state = addtocartInitState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cartProducts: action.payload };

    case "DELETE_CART_PRODUCT":
      const newList = state.cartProducts.filter(
        (products) => products.id !== action.payload
      );
      return {
        ...state,
        cartProducts: newList,
      };
    default:
      return state;
  }
};
