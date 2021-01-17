import {connect} from 'react-redux'
import * as actions from '../actions'
import {bindActionCreators, Dispatch} from 'redux'
import Header from './Header'
import {State} from '../types'

const mapStateToProps = (state : State) => ({
	count: state.cartItems.length,
	toggleCart: state.toggleCart,
	isCartShown: state.isCartShown,
})

const mapDispatchToProps = (dispatch : Dispatch) => ({
	...bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)