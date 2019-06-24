import { all, fork } from 'redux-saga/effects';
import products from './products';

const sagas = [products];

export default function* rootSaga() {
	yield all(sagas.map(saga => fork(saga)));
}
