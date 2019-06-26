import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, FormattedMessage } from 'react-intl';
import { noWrap } from '../../helpers/intlHelper';

const messages = defineMessages({
	sortHeader: {
		id: 'home.SideNav.sortHeader',
		defaultMessage: 'Sort:'
	},
	filterHeader: {
		id: 'home.sideNav.filterHeader',
		defaultMessage: 'Filter:'
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
