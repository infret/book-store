import React from 'react'
import bookIcon from '../resources/book.svg'
import cartIcon from '../resources/cart.svg'
import styled from 'styled-components'
import Cart from './CartContainer'

const Body = styled.header`
  box-shadow: var(--low-elevation);
  height: 60px;
  display: flex;
  top: 0;
  z-index: 1;
  background-color: white;
  border-radius: 0 0 4px 4px;
  align-items: center;
  position: sticky;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`

const Logo = styled.a`
  display: flex;
  align-items: center;
  margin: 20px;
  text-decoration: none;
`

const Title = styled.h1`
  font-weight: bold;
  margin-left: 5px;
  font-size: 20px;
  color: var(--accent-color);
`

const CartButton = styled.button`
  background-color: white;
  background-image: url(${cartIcon});
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  margin: 0 20px 0 auto;
  position: relative;
  border-radius: 5px;
  padding: 6px;
  height: 40px;
  width: 40px;
  transition: ease 0.4s;

  :hover {
    background-color: var(--grey-color);
  }
`

const CartDot = styled.div`
  width: 16px;
  height: 16px;
  font-size: 13px;
  line-height: 15px;
  color: white;
  font-weight: bold;
  border-radius: 50%;
  background-color: var(--danger-color);
  position: absolute;
  top: 0;
  right: -2px;
`

interface Props {
  count: number
  toggleCart: () => void
  isCartShown: boolean
}

const Header = ({ count, toggleCart, isCartShown }: Props) => (
  <Body>
    <Logo href='#'>
      <img src={bookIcon} alt='' />
      <Title>Bookstore</Title>
    </Logo>
    <CartButton onClick={toggleCart}>
      {count > 0 && <CartDot>{count}</CartDot>}
    </CartButton>
    {isCartShown && <Cart />}
  </Body>
)
export default Header
