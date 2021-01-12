import {connect} from 'react-redux'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import Header from './Header'

const mapStateToProps = ({cart}) => ({
	count: cart.items.length,
	isShown: cart.isShown,
})

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)