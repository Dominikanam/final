import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, FormattedMessage } from 'react-intl';
import { noWrap } from '../../helpers/intlHelper';

const messages = defineMessages({
	applyVoucher: {
		id: 'basket.basketSummary.applyVoucher',
		defaultMessage: 'apply'
	},
	checkout: {
		id: 'basket.basketSummary.checkout',
		defaultMessage: 'checkout'
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
