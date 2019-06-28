import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './modules/app';
import Home from './modules/home';
import ProductDetails from './modules/productDetails';
import Basket from './modules/basket';

export default () => (
	<BrowserRouter>
		<App>
			<Route component={Home} exact path="/" />
			<Route component={ProductDetails} exact path="/product/:id" />
			<Route component={Basket} exact path="/basket" />
		</App>
	</BrowserRouter>
);
