import {connect} from 'react-redux'
import * as actions from '../actions'
import BookCard from './BookCard'
import {bindActionCreators} from 'redux'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BookCard)