import {connect} from 'react-redux'
import * as cartActions from '../actions/cart'
import BooksFilter from './BooksFilter'
import {bindActionCreators} from 'redux'

const mapStateToProps = ({cart}) => ({
	total: cart.items.reduce((total, book) => total + book.price, 0)
})

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(booksActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BooksFilter)