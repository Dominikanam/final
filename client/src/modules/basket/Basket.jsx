import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Basket = props => <div>basket {props.items.length}</div>;

Basket.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default memo(Basket);
