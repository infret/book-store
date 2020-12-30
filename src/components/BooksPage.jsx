import React, {useEffect} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {setBooks} from '../actions/books'
import axios from 'axios'
import BookCard from './BookCard'

const Body = styled.div`
	width: 100%;
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
	list-style-type: none;
`

const mapStateToProps = ({books}) => ({
	books: books.items
})

const mapDispatchToProps = dispatch => ({
	setBooks: books => dispatch(setBooks(books)),
})

export default connect(mapStateToProps, mapDispatchToProps)(function BooksPage(props) {
	const {setBooks} = props
	const {books} = props

	useEffect(()=>{
		axios.get('https://infret.github.io/online-store/books.json').then(response => {
			setBooks(response.data)
		})
	})

	return (
			<Body>
				<Heading>Books</Heading>
				 <Books>
					 {books.map(book => (
					 		<BookCard key={book.id} img={book.image} title={book.title} author={book.author} price={book.price}/>
					 ))
					 }
				 </Books>
			</Body>
	)
})