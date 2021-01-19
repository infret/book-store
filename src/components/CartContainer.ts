import { Book, State } from './../types'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators, Dispatch } from 'redux'
import Cart from './Cart'

function countItems(items: Book[]) {
  items.forEach((item) => {
    item.count = items.filter((object) => object.id === item.id).length
  })
  return [...new Set(items)]
}

const mapStateToProps = (state: State) => ({
  cartItems: countItems(state.cartItems),
  total: parseInt(state.cartItems.reduce((total, item) => total + item.price, 0).toFixed(1)),
  cartCount: state.cartItems.length
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
