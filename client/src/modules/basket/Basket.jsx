import React, { memo } from 'react';
import PropTypes from 'prop-types';
import BasketProductContainer from './BasketProductContainer.jsx';
import BasketSummaryContainer from './BasketSummaryContainer.jsx';
import Msg from './Basket.msg';
import styles from './Basket.scss';

const Basket = props => (
	<div className={styles.root}>
		<h1 className={styles.name}>
			<Msg s="header" />
		</h1>
		<ul className={styles.productDetails}>
			{props.items.map(item => (
				<BasketProductContainer item={item} key={item.id} />
			))}
		</ul>
		<BasketSummaryContainer items={props.items} />
	</div>
);

Basket.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default memo(Basket);
