import {connect} from 'react-redux'
import * as actions from '../actions'
import Books from './Books'
import {bindActionCreators} from 'redux'

const sortBy = (books, sortBy, filterBy) => {
	books = books.filter(object => object.title.toLowerCase().indexOf(filterBy.toLowerCase()) >= 0 || object.author.toLowerCase().indexOf(filterBy.toLowerCase()) >= 0,)
	switch (sortBy) {
		case 'price':
			return books.sort((a, b) => (a.price - b.price))
		case 'title':
			return books.sort((a, b) => (a.title.localeCompare(b.title)))
		case 'author':
			return books.sort((a, b) => (a.author.localeCompare(b.author)))
		default:
			return books.sort((a, b) => (b.rating - a.rating))
	}
}

const mapStateToProps = ({books}) => ({
	books: books.items ? sortBy(books.items, books.sortBy, books.filterBy) : null,
	isReady: books.isReady,
})

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Books)