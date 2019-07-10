import { createReducer } from 'redux-act';
import * as actions from '../actions/basket';

const initialBasketState = {
	items: [{ id: 1, quantity: 1 }],
	discount: null
};

export default createReducer(
	{
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
		[actions.removeProduct.done]: (state, { productId }) => ({
			...state,
			items: state.items.filter(item => item.id !== productId)
		}),
		[actions.clearBasket.done]: state => ({
			...state,
			items: []
		}),
		[actions.applyVoucher.done]: (state, { discount }) => ({
			...state,
			discount
		}),
		[actions.incrementProduct.done]: (state, { productId }) => {
			const items = [...state.items];
			const index = items.findIndex(item => item.id === productId);

			if (index >= 0) {
				const basketItem = { ...items[index] };
				basketItem.quantity++;
				items[index] = basketItem;
			}

			return { ...state, items };
		},
		[actions.decrementProduct.done]: (state, { productId }) => {
			const items = [...state.items];
			const index = items.findIndex(item => item.id === productId);

			if (index >= 0) {
				if (items[index].quantity <= 1) {
					return { ...state, items: items.filter(item => item.id !== productId) };
				}
				const basketItem = { ...items[index] };
				basketItem.quantity--;
				items[index] = basketItem;
			}

			return { ...state, items };
		}
	},
	initialBasketState
);
