import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './modules/app';
import Home from './modules/home';

export default () => (
	<BrowserRouter>
		<App>
			<Route component={Home} exact path="/" />
		</App>
	</BrowserRouter>
);
