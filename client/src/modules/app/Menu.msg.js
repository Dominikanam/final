import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, FormattedMessage } from 'react-intl';
import { noWrap } from '../../helpers/intlHelper';

const messages = defineMessages({
	home: {
		id: 'app.menu.home',
		defaultMessage: 'Home'
	},
	faq: {
		id: 'app.menu.faq',
		defaultMessage: 'FAQ'
	},
	terms: {
		id: 'app.menu.terms',
		defaultMessage: 'Terms'
	},
	contact: {
		id: 'app.menu.contact',
		defaultMessage: 'Contact'
	}
});

const Msg = props => (
	<FormattedMessage children={noWrap} {...messages[props.s]} values={props.values} />
);

export const msgString = (s, values, formatMessage) => formatMessage(messages[s]);

Msg.propTypes = {
	s: PropTypes.string.isRequired,
	values: PropTypes.object
};

export default Msg;
