import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './BasketSummary.scss';

const BasketSummary = props => (
	<footer className={styles.root}>
		<div className={styles.voucher}>
			<input
				onChange={props.onVoucherChange}
				placeholder="voucher"
				type="text"
				value={props.voucher}
			/>
			<button onClick={props.applyVoucher}>apply</button>
		</div>
		<div className={styles.total}>{props.total}</div>
		<button className={styles.pay} onClick={props.checkout}>
			Checkout
		</button>
	</footer>
);

BasketSummary.propTypes = {
	applyVoucher: PropTypes.func.isRequired,
	checkout: PropTypes.func.isRequired,
	onVoucherChange: PropTypes.func.isRequired,
	total: PropTypes.number.isRequired,
	voucher: PropTypes.string.isRequired
};

BasketSummary.defaultProps = {
	total: 0,
	voucher: ''
};

export default memo(BasketSummary);
