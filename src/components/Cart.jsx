import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import closeIcon from '../resources/close.svg'

const Body = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 50%;
	min-height: 60px;
	min-width: 360px;
	background-color: white;
	border-radius: 0 0 4px 4px;
	box-shadow: var(--low-elevation);
`

const CloseButton = styled.button`
	background-color: transparent;
	background-image: url(${closeIcon});
	background-position: center;
	background-repeat: no-repeat;
	height: 60px;
	width: 28px;
	border: none;
	margin: 0 20px;
	cursor: pointer;
	position: absolute;
	top: 0;
	right: 0;
	display: inline;
`

const CartItem = styled.div`
	display: flex;
	width: 100%;
	min-height: 50px;
	align-items: center;
`

const ItemPreview = styled.img`
	height: 70px;
	width: auto;
	margin: 10px;
`

const ItemDesc = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;
	min-width: 200px;
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
	cursor: pointer;
	font-size: 15px;
	height: 37px;
`

const CheckoutContainer = styled.div`
	display: flex;
	align-items: center;
`

const Total = styled.p`
	margin: 10px;
	font-weight: bold;
	font-size: 20px;
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
	margin-left: 10px;
	font-size: 20px;
	font-weight: bold;
	display: inline;
	line-height: 60px;
`

export const Cart = ({total, count, items, removeFromCart}) => (
		<Body>
			<CartHeading>Cart</CartHeading>
			{count ?
					<div>
						{items.map(item => (
							<CartItem key={item.id}>
								<ItemPreview src={item.image}/>
								<ItemDesc>
									<Title>{item.title}</Title>
									<Author>{item.author}</Author>
								</ItemDesc>
								<ItemButton onClick={removeFromCart.bind(this, item.id)}>Remove</ItemButton>
							</CartItem>
						))}
						<CheckoutContainer>
							<Total>Total: {count} book{count !== 1 && 's'} worth ${total}</Total>
							<CheckoutButton to='/checkout'>Checkout</CheckoutButton>
						</CheckoutContainer>
					</div>
					: <CartHeading>is empty</CartHeading>
			}
			<CloseButton/>
		</Body>
)