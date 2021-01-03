import React from 'react';
import ReactDOM from 'react-dom';
import styled, {createGlobalStyle} from 'styled-components'
import createStore from './store'
import {Provider} from 'react-redux'
import BooksPage from './components/BooksContainer'
import bookIcon from './resources/book.svg'
import cartIcon from './resources/cart.svg'

const GlobalStyle = createGlobalStyle`
	* {
		--accent-color: #427AA9;
		--low-elevation: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
		--high-elevation: 0 6px 6px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
		font-family: sans-serif;
		margin: 0;
		padding: 0;
	}
`

const Header = styled.header`
	width: 100%;
	box-shadow: var(--low-elevation);
	height: 60px;
	display: flex;
	align-items: center;
	position: sticky;
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
	font-size: 18px;
	color: var(--accent-color);
`

const CartButton = styled.button`
	background-color: transparent;
	background-image: url(${cartIcon});
	background-position: center;
	background-repeat: no-repeat;
	height: 36px;
	width: 28px;
	border: none;
	margin: 20px;
	justify-self: end;
`

ReactDOM.render(
		<React.StrictMode>
			<GlobalStyle/>
			<Provider store={createStore()}>
				<Header>
					<Logo href='#'>
						<img src={bookIcon} alt=''/>
						<Title>Bookstore</Title>
					</Logo>
					<CartButton/>
				</Header>
				<BooksPage/>
			</Provider>
		</React.StrictMode>,
		document.getElementById('root'),
)