import React, {useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {Book} from './Book'
import SortField from './FilterContainer'

const Body = styled.div`
	width: 100%;
	margin: 0 auto;
	max-width: 1000px;
	min-height: 100vh;
`

const StyledUl = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, 180px);
	list-style-type: none;
	justify-content: space-evenly;
	position: relative;
`

const Loading = styled.div`
	border-radius: 50%;
	width: 50px;
	height: 50px;
	position: absolute;
	top: 30vh;
	left: calc(50% - 27px);
	border-top: 5px solid gainsboro;
	border-right: 5px solid gainsboro;
	border-bottom: 5px solid gainsboro;
	border-left: 5px solid var(--accent-color);
	animation: loading 1s infinite linear;
	
	&:after {
		border-radius: 50%;
		width: 50px;
		height: 50px;
	}
	
	@keyframes loading {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`

export default function Books(props) {
	const {books, isReady, setBooks} = props

	useEffect(() => {
		axios.get('https://infret.github.io/online-store/books.json').then(response => {
			setBooks(response.data)
		})
	}, [setBooks])

	return (
			<Body>
				<SortField/>
				<StyledUl>
					{isReady ? books.map((book,i) => <Book key={i} {...book}/>) : <Loading/>}
				</StyledUl>
			</Body>
	)
}