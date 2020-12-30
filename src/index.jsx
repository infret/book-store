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
		--elevation: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);
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