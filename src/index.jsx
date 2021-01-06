import React from 'react';
import ReactDOM from 'react-dom';
import styled, {createGlobalStyle} from 'styled-components'
import createStore from './store'
import {Provider} from 'react-redux'
import BooksPage from './components/BooksContainer'
import Header from './components/HeaderContainer'

const GlobalStyle = createGlobalStyle`
	* {
		--accent-color: #427AA9;
		--low-elevation: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
		--high-elevation: 0 6px 6px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
		font-family: sans-serif;
		margin: 0;
		padding: 0;
		text-decoration: none;
		-moz-appearance: none;
	}
`

const Footer = styled.footer`
	box-shadow: var(--low-elevation);
	height: 60px;
	display: flex;
	background-color: white;
	border-radius: 4px 4px 0 0;
	align-items: center;
	width: 100%;
	max-width: 1000px;
	margin-top: 20px;
	position: relative;
	bottom: 0;
`

const Link = styled.a`
	display: block;
	text-transform: lowercase;
	font-family: serif;
	color: grey;
	margin: 0 auto;
`

function toggleCart(){

}

ReactDOM.render(
		<React.StrictMode>
			<GlobalStyle/>
			<Provider store={createStore()}>
				<Header/>
				<BooksPage/>
				<Footer>
					<Link href='https://infret.github.io'><i>by Infret</i></Link>
				</Footer>
			</Provider>
		</React.StrictMode>,
		document.getElementById('root'),
)