import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './modules/app';
import Home from './modules/home';

export default () => (
	<BrowserRouter>
		<App>
			<Route path="/" exact component={Home} />
		</App>
	</BrowserRouter>
);
