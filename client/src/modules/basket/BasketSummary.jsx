import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Msg from './BasketSummary.msg';
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
			<button onClick={props.applyVoucher}>
				<Msg s="applyVoucher" />
			</button>
		</div>
		<div className={styles.summary}>
			<div className={styles.subtotal}>{props.summary.subtotal}</div>
			<div className={styles.discount}>{props.summary.discount}</div>
			<div className={styles.total}>{props.summary.total}</div>
		</div>
		<button className={styles.pay} onClick={props.checkout}>
			<Msg s="checkout" />
		</button>
	</footer>
);

BasketSummary.propTypes = {
	applyVoucher: PropTypes.func.isRequired,
	checkout: PropTypes.func.isRequired,
	onVoucherChange: PropTypes.func.isRequired,
	summary: PropTypes.object.isRequired,
	voucher: PropTypes.string.isRequired
};

BasketSummary.defaultProps = {
	summary: { subtotal: 0, total: 0, discount: 0 },
	voucher: ''
};

export default memo(BasketSummary);
