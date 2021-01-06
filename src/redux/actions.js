import * as type from "./types";

export function getProducts(data) {
  return {
    type: type.GET_PRODUCTS_REQUESTED,
    payload: data,
  };
}

export function getProductSuccess(data) {
  return {
    type: type.GET_PRODUCTS_SUCCESS,
    payload: data,
  };
}

export function getProductFailure(data) {
  return {
    type: type.GET_PRODUCTS_FAILED,
    payload: data,
  };
}
