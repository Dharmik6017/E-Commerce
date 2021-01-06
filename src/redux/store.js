import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/index.js";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();
// const store = compose(window.devToolsExtension && window.devToolsExtension())(
//   createStore
// )(rootReducer);

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// const store = compose(window.devToolsExtension && window.devToolsExtension(),)(
//   createStore
// )(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;
