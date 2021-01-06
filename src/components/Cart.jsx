import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
	background-color: white;
	height: inherit;
`

const CartItem = styled.div`
	height: 100px;
	display: flex;
`

export const Cart = ({total, items, count, removeFromCart}) => (
		<Body>
			{(count > 0) ? {total} +
					items.map(item =>
					<CartItem>
						<h4>{item.title} ({item.author})</h4>
						<button onClick={removeFromCart(item.id)}>Remove</button>
					</CartItem>,
			) : <div>Cart is empty</div>}
		</Body>
)