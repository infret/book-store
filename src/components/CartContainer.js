import {connect} from 'react-redux'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {Cart} from './Cart'

const mapStateToProps = ({cart}) => ({
	total: cart.items.reduce((total, book) => total + book.price, 0).toFixed(1),
	items: cart.items.filter((item, i, filteredItems) => filteredItems.indexOf(item) === i),
	count: cart.items.length,
})

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)