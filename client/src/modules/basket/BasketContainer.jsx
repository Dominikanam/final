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

export default connect(state => ({
	items: state.basket.items
}))(BasketContainer);
