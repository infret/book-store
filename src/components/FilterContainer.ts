import {connect} from 'react-redux'
import * as booksActions from '../actions'
import Filter from './Filter'
import {bindActionCreators, Dispatch} from 'redux'
import {State} from '../types'

const mapStateToProps = (state : State) => ({
	sortBy: state.sortBy,
})

const mapDispatchToProps = (dispatch : Dispatch) => ({
	...bindActionCreators(booksActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)