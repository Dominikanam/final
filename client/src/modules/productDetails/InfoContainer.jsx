import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Info from './Info.jsx';
import * as BasketActions from '../../actions/basket';

const actions = { ...BasketActions };

const InfoContainer = props => (
	<Info
		addBasketProduct={props.addBasketProduct}
		className={props.className}
		product={props.product}
	/>
);

InfoContainer.propTypes = {
	addBasketProduct: PropTypes.func.isRequired,
	className: PropTypes.string,
	product: PropTypes.object.isRequired
};

export default connect(
	null,
	dispatch => bindActionCreators(actions, dispatch)
)(memo(InfoContainer));
