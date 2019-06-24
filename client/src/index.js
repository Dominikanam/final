import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Router from './router.jsx';
import configureStore from './store/configureStore';
/* intl */
import { addLocaleData } from 'react-intl';
import { IntlProvider } from 'react-intl-redux';
import IntlHelper from './helpers/intlHelper';

(() => {
	const intl = new IntlHelper();
	addLocaleData(intl.getLocaleData());
	const userLanguage = navigator.languages
		? navigator.languages[0]
		: navigator.language || navigator.userLanguage;
	const store = configureStore({
		intl: intl.getInitialIntlState(userLanguage)
	});

	intl.shimRender(() => {
		render(
			<Provider store={store}>
				<IntlProvider>
					<Router />
				</IntlProvider>
			</Provider>,
			document.getElementById('app')
		);
	});
})();
