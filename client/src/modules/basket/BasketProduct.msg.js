import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, FormattedMessage } from 'react-intl';
import { noWrap } from '../../helpers/intlHelper';

const messages = defineMessages({
	remove: {
		id: 'basket.basketProduct.remove',
		defaultMessage: 'remove'
	},
	increment: {
		id: 'basket.basketProduct.increment',
		defaultMessage: '+'
	},
	decrement: {
		id: 'basket.basketProduct.decrement',
		defaultMessage: '-'
	}
});

const Msg = props => (
	<FormattedMessage children={noWrap} {...messages[props.s]} values={props.values} />
);

Msg.propTypes = {
	s: PropTypes.string.isRequired,
	values: PropTypes.object
};

export default Msg;
