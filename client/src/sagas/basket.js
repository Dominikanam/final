import { put, takeEvery } from 'redux-saga/effects';
import * as basketActions from '../actions/basket';

function* addBasketProduct({ payload: { productId } }) {
	try {
		//const response = yield call(ProductService.getProducts);
		yield put(basketActions.addBasketProduct.done({ productId }));
	} catch {
		yield put(basketActions.addBasketProduct.fail());
	}
}

export default function* team() {
	yield takeEvery(basketActions.addBasketProduct, addBasketProduct);
}
