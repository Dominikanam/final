import { all, fork } from 'redux-saga/effects';
import products from './products';
import basket from './basket';

const sagas = [products, basket];

export default function* rootSaga() {
	yield all(sagas.map(saga => fork(saga)));
}
