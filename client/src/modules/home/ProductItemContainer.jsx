import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductItem from './ProductItem.jsx';
import * as BasketActions from '../../actions/basket';

const actions = { ...BasketActions };

const ProductItemContainer = props => (
	<ProductItem addProduct={props.addProduct} product={props.product} />
);

ProductItemContainer.propTypes = {
	addProduct: PropTypes.func.isRequired,
	product: PropTypes.object.isRequired
};

export default connect(
	null,
	dispatch => bindActionCreators(actions, dispatch)
)(memo(ProductItemContainer));
