import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './BasketProduct.scss';
import { getImagesPaths } from '../../helpers/imageHelper';
import Msg from './BasketProduct.msg';

const BasketProduct = props => (
	<li className={styles.root}>
		<img src={getImagesPaths(props.item)[0]} />
		<div className={styles.description}>
			<h2 className={styles.name}>{props.item.name}</h2>
			<button className={styles.remove} onClick={props.remove}>
				<Msg s="remove" />
			</button>
		</div>
		<span className={styles.price}>{props.item.price}</span>
		<div className={styles.quantity}>
			<button className={styles.decrease} onClick={props.decrementQuantity}>
				<Msg s="decrement" />
			</button>
			<span>{props.item.quantity}</span>
			<button className={styles.increase} onClick={props.incrementQuantity}>
				<Msg s="increment" />
			</button>
		</div>
	</li>
);

BasketProduct.propTypes = {
	decrementQuantity: PropTypes.func.isRequired,
	incrementQuantity: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired,
	remove: PropTypes.func.isRequired
};

export default memo(BasketProduct);
