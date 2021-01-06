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

export function makeOrderRequested(data) {
  return {
    type: type.MAKE_ORDER_REQUESTED,
    payload: data,
  };
}

export function makeOrder(data) {
  return {
    type: type.MAKE_ORDER_SUCCESS,
    payload: data,
  };
}
