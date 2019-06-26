import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, FormattedMessage } from 'react-intl';
import { noWrap } from '../../helpers/intlHelper';

const messages = defineMessages({
	prev: {
		id: 'home.pagination.prev',
		defaultMessage: 'Previous'
	},
	next: {
		id: 'home.pagination.next',
		defaultMessage: 'Next'
	},
	first: {
		id: 'home.pagination.first',
		defaultMessage: 'First'
	},
	last: {
		id: 'home.pagination.last',
		defaultMessage: 'Last'
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
