import {connect} from 'react-redux'
import * as actions from '../actions'
import BookCard from './BookCard'
import {bindActionCreators, Dispatch} from 'redux'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch : Dispatch) => ({
	...bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BookCard)