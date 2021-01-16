import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from 'styled-components'
import {Provider} from 'react-redux'
import Books from './components/BooksContainer'
import Header from './components/HeaderContainer'
import {Footer} from './components/Footer'
import {BrowserRouter} from 'react-router-dom'
import reducer from './reducer'
import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'

const GlobalStyle = createGlobalStyle`
	* {
		--accent-color: #427AA9;
		--danger-color: #E7493D;
		--low-elevation: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
		--high-elevation: 0 6px 6px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
		font-family: sans-serif;
		margin: 0;
		padding: 0;
		text-decoration: none;
		-moz-appearance: none;
	}
`

ReactDOM.render(
		<React.StrictMode>
			<GlobalStyle/>
			<Provider store={createStore(reducer, applyMiddleware(logger))}>
				<BrowserRouter>
					<Header/>
					<Books/>
					<Footer/>
				</BrowserRouter>
			</Provider>
		</React.StrictMode>,
		document.getElementById('root'),
)