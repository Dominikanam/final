import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BasketSummary from './BasketSummary.jsx';
import OrderConfirmtion from './OrderConfirmation.jsx';
import * as BasketActions from '../../actions/basket';

const actions = { ...BasketActions };

class BasketSummaryContainer extends PureComponent {
	static propTypes = {
		applyVoucher: PropTypes.func.isRequired,
		clearBasket: PropTypes.func.isRequired,
		discount: PropTypes.number,
		items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
	};

	static defaultProps = {
		discount: 0
	};

	constructor(props) {
		super(props);

		this.state = {
			voucher: '',
			order: null,
			summary: this.calculateTotals()
		};

		this.applyVoucher = this.applyVoucher.bind(this);
		this.checkout = this.checkout.bind(this);
		this.onVoucherChange = this.onVoucherChange.bind(this);
		this.closeConfirmation = this.closeConfirmation.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.items !== this.props.items || prevProps.discount !== this.props.discount) {
			this.setState({ summary: this.calculateTotals() });
		}
	}

	applyVoucher() {
		this.props.applyVoucher({ voucher: this.state.voucher });
		this.setState({ voucher: '' });
	}

	checkout() {
		this.setState({ order: { items: this.props.items, summary: this.state.summary } });
	}

	onVoucherChange(event) {
		this.setState({ voucher: event.target.value });
	}

	closeConfirmation() {
		this.props.clearBasket();
		this.setState({ order: null });
	}

	calculateTotals() {
		const summary = {
			subtotal: this.props.items.reduce((accumulator, item) => {
				return accumulator + item.price * item.quantity;
			}, 0)
		};

		const discount = this.props.discount;
		if (!discount || discount <= 0) {
			summary.discount = 0;
		} else if (discount < 1) {
			summary.discount = Math.floor(summary.subtotal * discount);
		} else {
			summary.discount = discount;
		}

		summary.total = summary.subtotal - summary.discount;
		return summary;
	}

	render() {
		return (
			<>
				<BasketSummary
					applyVoucher={this.applyVoucher}
					checkout={this.checkout}
					onVoucherChange={this.onVoucherChange}
					summary={this.state.summary}
					voucher={this.state.voucher}
				/>
				{this.state.order && (
					<OrderConfirmtion onClose={this.closeConfirmation} order={this.state.order} />
				)}
			</>
		);
	}
}

export default connect(
	state => ({
		discount: state.basket.discount
	}),
	dispatch => bindActionCreators(actions, dispatch)
)(BasketSummaryContainer);
