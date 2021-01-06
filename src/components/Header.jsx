import React from 'react'
import bookIcon from '../resources/book.svg'
import cartIcon from '../resources/cart.svg'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

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

const StyledLink = styled(NavLink)`
	background-image: url(${cartIcon});
	background-position: center;
	background-repeat: no-repeat;
	height: 36px;
	width: 28px;
	border: none;
	margin: 0 20px 0 auto;
	position: relative;
`

const CartDot = styled.div`
	width: 16px;
	height: 16px;
	font-size: 13px;
	line-height: 15px;
	color: white;
	font-weight: bold;
	border-radius: 50%;
	background-color: #e7493d;
	position: absolute;
	top: 0;
	right: -2px;
`

export default function Header({count}) {
	return (
			<Body>
				<Logo href='#'>
					<img src={bookIcon} alt=''/>
					<Title>Bookstore</Title>
				</Logo>
				<StyledLink to='/cart'>
					{(count > 0) && <CartDot>{count}</CartDot>}
				</StyledLink>
			</Body>
	)
}