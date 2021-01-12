import {connect} from 'react-redux'
import * as actions from '../actions'
import {Book} from './Book'
import {bindActionCreators} from 'redux'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Book)