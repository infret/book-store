import {connect} from 'react-redux'
import * as actions from '../actions'
import {Book} from './Book'
import {bindActionCreators} from 'redux'

const mapStateToProps = ({cart}, { id }) => ({
	showCount: cart.items.reduce(
			(count,book) => count + (book.id === id ? 1 : 0), 0
	)
})

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Book)