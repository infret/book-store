import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import store from './store'
import {Provider} from 'react-redux'

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
	}
`

const Body = styled.main`
	width: 100%;
	height: 100%;
	max-width: 1000px;
	margin: 0 auto;
	padding: 0;
`

const Heading = styled.h1`
	text-align: center;
	margin: 10px;
`

ReactDOM.render(
		<React.StrictMode>
			<GlobalStyle/>
			<Provider store={store()}>
			<Body>
				<Heading>Store</Heading>
			</Body>
			</Provider>
		</React.StrictMode>,
		document.body,
)