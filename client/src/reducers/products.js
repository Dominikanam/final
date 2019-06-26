import { createReducer } from 'redux-act';
import * as actions from '../actions/products';
import data from '../data/products';

const initialContactState = {
	items: data
};

export default createReducer(
	{
		[actions.getProducts]: state => state,
		[actions.getProducts.done]: state => state,
		[actions.getProducts.fail]: state => state
	},
	initialContactState
);