import {connect} from 'react-redux'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import Header from './Header'

const mapStateToProps = (state) => ({
	count: state.cartItems.length,
	isCartShown: state.isCartShown,
})

const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)