import { all } from "redux-saga/effects";

import productSaga from "./productSaga";
import makeOrderSaga from "./makeOrderSaga";
export default function* rootSaga() {
  yield all([productSaga(), makeOrderSaga()]);
}
