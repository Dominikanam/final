import { createReducer } from 'redux-act';
import * as actions from '../actions/products';

const initialContactState = {
	items: [
		{
			id: 1,
			name: 'Product 1',
			images: {
				default: '/resources/images/products/1/default.jpg'
			},
			price: 2.5,
			categories: ['watch', 'men'],
			color: 'black'
		}
	]
};

export default createReducer(
	{
		[actions.getProducts]: state => state,
		[actions.getProducts.done]: state => state,
		[actions.getProducts.fail]: state => state
	},
	initialContactState
);
