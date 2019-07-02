import React, { memo } from 'react';
import PropTypes from 'prop-types';
import BasketProduct from './BasketProduct.jsx';
import BasketSummary from './BasketSummary.jsx';

const Basket = props => (
	<div>
		<h1>items</h1>
		<ul>
			{props.items.map(item => (
				<BasketProduct item={item} key={item.id} />
			))}
		</ul>
		<BasketSummary />
	</div>
);

Basket.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default memo(Basket);
