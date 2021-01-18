import { Book, State } from './../types'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators, Dispatch } from 'redux'
import Cart from './Cart'

function countItems(array: Book[], key: keyof Book) {
  const uniqueKeys = Array.from(new Set(array.map((item) => item[key])))
  return uniqueKeys.map((uniqueKey) => {
    const filteredArray = array.filter((item) => item[key] === uniqueKey)
    return { cartCount: filteredArray.length, ...filteredArray[0] }
  })
}

const mapStateToProps = (state: State) => ({
  cartItems: countItems(state.cartItems, 'id'),
  total: parseInt(
    state.cartItems.reduce((total, item) => total + item.price, 0).toFixed(1)
  ),
  cartCount: state.cartItems.length
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
