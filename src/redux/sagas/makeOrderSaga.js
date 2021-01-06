import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { makeOrder } from "../actions";
const url = "https://fakestoreapi.com/products";
function* makeOrderRequest(action) {
  try {
    const products = yield call(() => axios.post(url, [...action.payload]));
    yield put(makeOrder(products.data));
  } catch (e) {
    yield put({ type: "MAKE_ORDER_FAILED", message: e.message });
  }
}

function* makeOrderSaga() {
  yield takeEvery("MAKE_ORDER_REQUESTED", makeOrderRequest);
}

export default makeOrderSaga;
