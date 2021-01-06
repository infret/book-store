import {connect} from 'react-redux'
import * as booksActions from '../actions'
import Filter from './Filter'
import {bindActionCreators} from 'redux'

const mapStateToProps = ({books}) => ({
	sortBy: books.sortBy,
})

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(booksActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)