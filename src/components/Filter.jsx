import styled from 'styled-components'
import React from 'react'

const Sort = styled.form`
	display: flex;
	justify-content: center;
	margin-top: 10px;
`

const Select = styled.select`
	color: grey;
	background-color: transparent;
	border: 2px solid var(--accent-color);
	outline: none;
	height: 36px;
	width: 40%;
	max-width: 180px;
	font-size: 16px;
	line-height: 1;
	border-radius: 4px;
	margin: 8px;
	padding: 6px;
	opacity: 1;

	& > option:first-child {
		display: none;
	}
`

const Searchbar = styled.input`
	color: grey;
	background-color: transparent;
	border: 2px solid var(--accent-color);
	outline: none;
	height: 36px;
	width: 40%;
	max-width: 180px;
	font-size: 16px;
	line-height: 1;
	border-radius: 4px;
	margin: 8px;
	padding: 6px;
	
	::placeholder {
		opacity: 1;
	}
`

const Filter = ({sortBooks, sortBy, filterBooks, filterBy}) => (
		<Sort>
			<Select value={sortBy} onChange={e => sortBooks(e.target.value)}>
				<option disabled value='placeholder'>Sort by</option>
				<option value='rating'>Rating</option>
				<option value='price'>Price</option>
				<option value='title'>Title</option>
				<option value='author'>Author</option>
			</Select>
			<Searchbar type='search' onChange={e => filterBooks(e.target.value)} value={filterBy} placeholder='Search'/>
		</Sort>
)

export default Filter