import styled from 'styled-components'
import React from 'react'

const Sort = styled.form`
display: flex;
justify-content: center;
margin-top: 10px;
`

const Select = styled.select`
	font-size: 16px;
	background-color: transparent;
	border: 2px solid var(--accent-color);
	border-radius: 4px;
	outline: none;
	width: 180px;
	height: 36px;
	padding: 0 6px;
	color: #696969;
	margin: 8px;

	& > option:first-child {
		display: none;
	}
`

const Searchbar = styled.input`
	width: 180px;
	border: 2px solid var(--accent-color);
	outline: none;
	height: 36px;
	font-size: 16px;
	padding: 0 10px;
	border-radius: 4px;
	margin: 8px;
`

const SortField = ({sortBooks, sortBy, filterBooks, filterBy}) => (
		<Sort>
				<Select value={sortBy} onChange={e => sortBooks(e.target.value)}>
					<option disabled value='placeholder'>Sort by</option>
					<option value='rating'>Rating</option>
					<option value='price'>Price</option>
					<option value='newness'>Newness</option>
					<option value='title'>Title</option>
					<option value='author'>Author</option>
				</Select>
			<Searchbar type='search' onChange={e => filterBooks(e.target.value)} value={filterBy} placeholder='Search'/>
		</Sort>
)

export default SortField