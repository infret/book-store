import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components'
import createStore from './store'
import {Provider} from 'react-redux'
import BooksPage from './components/BooksPage'

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		--low-elevation: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
		--high-elevation: 0 6px 6px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
		font-family: sans-serif;
		text-transform: none;
	}
`

const store = createStore()

ReactDOM.render(
		<React.StrictMode>
			<GlobalStyle/>
			<Provider store={store}>
				<BooksPage/>
			</Provider>
		</React.StrictMode>,
		document.getElementById('root'),
)