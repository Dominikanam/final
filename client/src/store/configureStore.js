import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';

import createRootReducer from '../reducers';
import rootSaga from '../sagas';

export const history = createBrowserHistory();

export default function configureStore(initialState) {
	const sagaMiddleware = createSagaMiddleware();

	const logger = createLogger({
		collapsed: true,
		level: 'warn',
		predicate: () => process.env.ScimConfig === 'development'
	});

	const router = routerMiddleware(history);
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const store = createStore(
		createRootReducer(history),
		initialState,
		composeEnhancers(
			applyMiddleware(
				sagaMiddleware,
				router,
				thunkMiddleware, // Allows returning a function as an action (https://redux.js.org/advanced/async-actions#async-action-creators)
				logger
			)
		)
	);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers').default; // eslint-disable-line global-require
			store.replaceReducer(nextReducer);
		});
	}

	sagaMiddleware.run(rootSaga);
	return store;
}
