import React, { memo } from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({ product }) => <li>{product.name}</li>;

ProductItem.propTypes = {
	product: PropTypes.object.isRequired
};

export default memo(ProductItem);
