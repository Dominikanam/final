import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, FormattedMessage } from 'react-intl';
import { noWrap } from '../../helpers/intlHelper';

const messages = defineMessages({
	copyrights: {
		id: 'app.footer.copyrights',
		defaultMessage: 'All rights reserved'
	},
	home: {
		id: 'app.footer.home',
		defaultMessage: 'Home'
	},
	faq: {
		id: 'app.footer.faq',
		defaultMessage: 'FAQ'
	},
	terms: {
		id: 'app.footer.terms',
		defaultMessage: 'Terms'
	},
	contact: {
		id: 'app.footer.contact',
		defaultMessage: 'Contact'
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
