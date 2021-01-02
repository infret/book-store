import {connect} from 'react-redux'
import * as booksActions from '../actions/books'
import BooksPage from './BooksPage'
import {bindActionCreators} from 'redux'
import orderBy from 'lodash/orderBy'

const sortBy = (books, sortBy) => {
	switch (sortBy) {
		case 'price':
			return orderBy(books, 'price', 'asc')
		case 'title':
			return orderBy(books, 'title', 'asc')
		case 'author':
			return orderBy(books, 'author', 'asc')
		default:
			return orderBy(books, 'rating', 'desc')
	}
}

const mapStateToProps = ({books}) => ({
	books: sortBy(books.items, books.sortBy),
	isReady: books.isReady
})

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(booksActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage)