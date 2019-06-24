import { put, takeLatest } from 'redux-saga/effects';
import * as productsActions from '../actions/products';

function* getProducts() {
	try {
		//const response = yield call(ProductService.getProducts);
		yield put(productsActions.getProducts.done());
	} catch {
		yield put(productsActions.getProducts.fail());
	}
}

export default function* team() {
	yield takeLatest(productsActions.getProducts, getProducts);
}
