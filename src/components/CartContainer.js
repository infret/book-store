import {connect} from 'react-redux'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {Cart} from './Cart'

const mapStateToProps = ({cart}) => ({
	total: cart.items.reduce((total, book) => total + book.price, 0),
	items: cart.items,
	count: cart.items.length,
})

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)