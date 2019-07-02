import { createReducer } from 'redux-act';
import * as actions from '../actions/basket';

const initialBasketState = {
	items: [{ id: 1, quantity: 1 }],
	discount: null
};

export default createReducer(
	{
		[actions.addBasketProduct]: state => state,
		[actions.addBasketProduct.done]: (state, { productId }) => {
			const items = [...state.items];
			const index = items.findIndex(item => item.id === productId);

			if (index < 0) {
				items.push({ id: productId, quantity: 1 });
			} else {
				const basketItem = { ...items[index] };
				basketItem.quantity++;
				items[index] = basketItem;
			}

			return { ...state, items };
		},
		[actions.addBasketProduct.fail]: state => state
	},
	initialBasketState
);
