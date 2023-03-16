import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./const";

function* getProducts() {
  let data = yield fetch("http://localhost:3500/product");
  data = yield data.json();
  // console.log("add to cart action :-", data)
  yield put({ type: SET_PRODUCT_LIST, data });
  // console.log("Api calling");
}

function* searchProduct(data) {
  let result = yield fetch(`http://localhost:3500/product?q=${data.query}`);
  result = yield result.json();
  console.log("search action :-", data)
  yield put({ type: SET_PRODUCT_LIST, data:result });
  // console.log("Api calling");
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProduct);
}

export default productSaga;
