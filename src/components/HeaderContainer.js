import {connect} from 'react-redux'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import Header from './Header'

const mapStateToProps = ({cart}) => ({
	total: cart.items.reduce((total, book) => total + book.price, 0)
})

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)