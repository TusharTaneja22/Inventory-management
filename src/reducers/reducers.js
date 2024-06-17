import {
  SET_PRODUCTS,
  SET_STATS,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  DISABLE_PRODUCT,
} from "../actions/actions";

const initialState = {
  products: [],
  stats: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_STATS:
      return {
        ...state,
        stats: action.payload,
      };
    case EDIT_PRODUCT:
      const updatedProducts = state.products.map((product, index) =>
        index === action.payload.index ? action.payload.updatedProduct : product
      );
      return {
        ...state,
        products: updatedProducts,
      };
    case DELETE_PRODUCT:
      const filteredProducts = state.products.filter(
        (product, index) => index !== action.payload
      );
      return {
        ...state,
        products: filteredProducts,
      };
    case DISABLE_PRODUCT:
      const disabledProducts = state.products.map((product, index) =>
        index === action.payload ? { ...product, disabled: true } : product
      );
      return {
        ...state,
        products: disabledProducts,
      };
    default:
      return state;
  }
};

export default reducer;
