import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getProductSuccess } from "../actions";
const url = "https://fakestoreapi.com/products";

function getApi() {
  return axios
    .get(url)
    .then((res) => res.json)
    .catch((err) => err);
}

function* getchProduct(action) {
  try {
    const products = yield call(() => axios.get(url));
    yield put(getProductSuccess(products.data));
  } catch (e) {
    yield put({ type: "GET_PRODUCTS_FAILS", message: e.message });
  }
}

function* productSaga() {
  yield takeEvery("GET_PRODUCTS_REQUESTED", getchProduct);
}

export default productSaga;
