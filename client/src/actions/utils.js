import { createAction } from 'redux-act';

// Create 4 actions bound together to be used with sagas:
// - The Action (action)
// - The success action (action.done)
// - The failure action (action.fail)
// - The skip action (action.skip) - optional
export const createSagaActions = (name, payloadReducer, createSkipAction) => {
	const request = createAction(name, payloadReducer);
	request.done = createAction(name + '_DONE');
	request.fail = createAction(name + '_FAIL');

	if (createSkipAction) {
		request.skip = createAction(name + '_SKIP');
	}

	return request;
};
