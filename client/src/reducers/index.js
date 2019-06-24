import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { intlReducer as intl } from 'react-intl-redux';

import products from './products';

export default history =>
	combineReducers({
		router: connectRouter(history),
		intl,
		products
	});
