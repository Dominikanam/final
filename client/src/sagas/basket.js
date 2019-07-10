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

function* removeProduct({ payload: { productId } }) {
	try {
		yield put(basketActions.removeProduct.done({ productId }));
	} catch {
		yield put(basketActions.removeProduct.fail());
	}
}

function* incrementProduct({ payload: { productId } }) {
	try {
		yield put(basketActions.incrementProduct.done({ productId }));
	} catch {
		yield put(basketActions.incrementProduct.fail());
	}
}

function* decrementProduct({ payload: { productId } }) {
	try {
		yield put(basketActions.decrementProduct.done({ productId }));
	} catch {
		yield put(basketActions.decrementProduct.fail());
	}
}

function* applyVoucher({ payload: { voucher } }) {
	try {
		let discount = 0;

		switch (voucher) {
			case 'summersale':
				discount = 0.2;
				break;
			case 'save10':
				discount = 10;
				break;
			default:
				yield put(basketActions.applyVoucher.fail());
				return;
		}

		yield put(basketActions.applyVoucher.done({ discount }));
	} catch {
		yield put(basketActions.applyVoucher.fail());
	}
}

function* clearBasket() {
	try {
		yield put(basketActions.clearBasket.done());
	} catch {
		yield put(basketActions.clearBasket.fail());
	}
}

export default function* team() {
	yield takeEvery(basketActions.addBasketProduct, addBasketProduct);
	yield takeEvery(basketActions.removeProduct, removeProduct);
	yield takeEvery(basketActions.incrementProduct, incrementProduct);
	yield takeEvery(basketActions.decrementProduct, decrementProduct);
	yield takeEvery(basketActions.applyVoucher, applyVoucher);
	yield takeEvery(basketActions.clearBasket, clearBasket);
}
