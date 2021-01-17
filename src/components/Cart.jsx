import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import closeIcon from '../resources/close.svg'

const Body = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	min-height: 60px;
	max-height: 90vh;
	max-width: 400px;
	background-color: white;
	border-radius: 0 0 4px 4px;
	box-shadow: var(--low-elevation);
`

const CartItems = styled.div`
	overflow-y: auto;
	max-height: calc(90vh - 120px);
`

const CloseButton = styled.button`
	background-color: white;
	background-image: url(${closeIcon});
	background-position: center;
	background-repeat: no-repeat;
	height: 60px;
	width: 28px;
	border: none;
	margin: 0 20px;
	position: absolute;
	top: 0;
	right: 0;
	display: inline;
`

const CartItem = styled.div`
	display: grid;
	width: 100%;
	align-items: center;
	grid-template-rows: 80px;
	grid-template-columns: 70px 1fr 20px 100px;
	grid-template-areas: 'img desc count btn';
`

const ItemPreview = styled.img`
	height: 70px;
	width: auto;
	margin: 5px 10px;
	grid-area: img;
`

const ItemDesc = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-width: 150px;
	grid-area: desc;
`

const Title = styled.h3`
	font-size: 17px;
	font-weight: 500;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`

const Author = styled.p`
	color: grey;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`

const ItemButton = styled.button`
	background-color: var(--danger-color);
	color: white;
	border: none;
	border-radius: 4px;
	padding: 10px;
	margin: 10px 10px 10px auto;
	font-size: 15px;
	height: 37px;
`

const CheckoutContainer = styled.div`
	display: flex;
	align-items: center;
`

const CartText = styled.p`
	margin: 10px;
	min-width: 20px;
	font-weight: bold;
	font-size: 18px;
	color: var(--accent-color);
`

const CheckoutButton = styled(NavLink)`
	background-color: var(--accent-color);
	color: white;
	border: none;
	border-radius: 4px;
	padding: 10px;
	font-size: 15px;
	margin: 10px 10px 10px auto;
`

const CartHeading = styled.p`
	color: var(--accent-color);
	font-size: 20px;
	margin-left: 10px;
	font-weight: bold;
	display: inline;
	line-height: 60px;
`

const Cart = ({total, count, cartItems, removeFromCart, toggleCart}) => (
		<Body>
			<CartHeading>Cart</CartHeading>
			{count ?
					<>
					<CartItems>
						{cartItems.map(item => (
							<CartItem key={item.id}>
								<ItemPreview src={item.image}/>
								<ItemDesc>
									<Title>{item.title}</Title>
									<Author>{item.author}</Author>
								</ItemDesc>
								<CartText>{item.count}</CartText>
								<ItemButton onClick={removeFromCart.bind(this, item.id)}>Remove</ItemButton>
							</CartItem>
						))}
					</CartItems>
					<CheckoutContainer>
						<CartText>Total: {count} book{count !== 1 && 's'} worth ${total}</CartText>
						<CheckoutButton to='/checkout'>Checkout</CheckoutButton>
					</CheckoutContainer>
					</>
					: <CartHeading>is empty</CartHeading>
			}
			<CloseButton onClick={toggleCart.bind(this, false)}/>
		</Body>
)
export default Cart