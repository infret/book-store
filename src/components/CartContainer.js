import {connect} from 'react-redux'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import Cart from './Cart'

function countItems(array, key) {
	const uniqueKeys = Array.from(new Set(array.map((item) => item[key])));
	return uniqueKeys.map((uniqueKey) => {
		const filteredArray = array.filter((item) => item[key] === uniqueKey);
		return {count: filteredArray.length, ...filteredArray[0]};
	});
}

const mapStateToProps = (state) => ({
	cartItems: countItems(state.cartItems, 'id'),
	total: state.cartItems.reduce((total, item) => total + item.price, 0).toFixed(1),
	count: state.cartItems.length
})

const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)