import * as type from "../types";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case type.GET_PRODUCTS_REQUESTED:
      return {
        ...state,
        loading: true,
        products: action.payload,
      };
    case type.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case type.GET_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
