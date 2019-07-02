import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import BindActionCreators from 'redux';
import Basket from './Basket.jsx';

class BasketContainer extends PureComponent {
	static propTypes = {
		items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
	};
	render() {
		return <Basket items={this.props.items} />;
	}
}

const combineBasketInfo = (basketItems, products) => {
	return basketItems.map(item => {
		const product = products.find(p => p.id === item.id);
		return { ...item, ...product };
	});
};

export default connect(state => ({
	items: combineBasketInfo(state.basket.items, state.products.items)
}))(BasketContainer);
