import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, FormattedMessage } from 'react-intl';
import { noWrap } from '../../helpers/intlHelper';

const messages = defineMessages({
	message: {
		id: 'basket.orderConfirmation.message',
		defaultMessage: 'Please confirm your order'
	},
	confirm: {
		id: 'basket.orderConfirmation.confirm',
		defaultMessage: 'confirm'
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
