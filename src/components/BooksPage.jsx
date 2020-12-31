import React, {useEffect} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {setBooks} from '../actions/books'
import axios from 'axios'
import BookCard from './BookCard'

const Body = styled.div`
	width: 100vw;
	height: 100%;
	max-width: 1000px;
	margin: 0 auto;
	padding: 0;
`

const Heading = styled.h1`
	text-align: center;
	margin: 20px;
`

const Books = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	list-style-type: none;
	margin: 0 auto;
`

const Loading = styled.div`
	width: 80px;
	height: 80px;
	position: absolute;
	top: 40vh;
	margin: auto;
	&::after {
		content: " ";
		display: block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		border: 6px solid #000;
		border-color: #000 transparent #000 transparent;
		animation: loading 1s linear infinite;
		@keyframes loading {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}

	}
`

const mapStateToProps = ({books}) => ({
	books: books.items,
	isReady: books.isReady,
})

const mapDispatchToProps = dispatch => ({
	setBooks: books => dispatch(setBooks(books)),
})

export default connect(mapStateToProps, mapDispatchToProps)(function BooksPage(props) {
	const {setBooks} = props
	const {books, isReady} = props

	useEffect(() => {
		axios.get('https://infret.github.io/online-store/books.json').then(response => {
			setBooks(response.data)
		})
	})

	return (
			<Body>
				<Heading>Books</Heading>
				<Books>
					{!isReady ? <Loading/> : books.map(book => <BookCard {...book}/>
					)
					}
				</Books>
			</Body>
	)
})