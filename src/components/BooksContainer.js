import {connect} from 'react-redux'
import * as actions from '../actions'
import Books from './Books'
import {bindActionCreators} from 'redux'
import orderBy from 'lodash/orderBy'

const sortBy = (books, sortBy, filterBy) => {
	books = books.filter(object =>
			object.title.toLowerCase().indexOf(filterBy.toLowerCase()) >=0 || object.author.toLowerCase().indexOf(filterBy.toLowerCase()) >=0
	)
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
	books: books.items ? sortBy(books.items, books.sortBy, books.filterBy) : null,
	isReady: books.isReady
})

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Books)