import * as type from "../types";

const initialState = {
  products: [],
  loading: false,
  makeOrder: null,
  error: null,
  makeOrderLoading: false,
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

    case type.MAKE_ORDER_SUCCESS:
      return {
        ...state,
        makeOrderLoading: false,
        makeOrder: action.payload,
      };

    case type.MAKE_ORDER_REQUESTED:
      return {
        ...state,
        makeOrderLoading: true,
        makeOrder: action.payload,
      };
    default:
      return state;
  }
}
