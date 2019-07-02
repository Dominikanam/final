import { createReducer } from 'redux-act';
import * as actions from '../actions/basket';

const initialBasketState = {
	items: [],
	discount: null
};

export default createReducer(
	{
		[actions.addProduct]: state => state,
		[actions.addProduct.done]: state => state,
		[actions.addProduct.fail]: state => state
	},
	initialBasketState
);
