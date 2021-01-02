import styled from 'styled-components'
import React from 'react'

const Sort = styled.form`
	display: flex;
	margin: 20px 0 10px 7vw;
	width: 300px;
`

const Select = styled.select`
	border: none;
	font-size: 16px;
	padding-right: 10px;

	&:focus {
		outline: none;
	}
`

const SortField = ({sortBooks, sortBy}) => {
	function handleChange(event){
		sortBooks(event.target.value)
	}
	return (
	<Sort>
		Sort by:
		<Select value={sortBy} onChange={handleChange}>
			<option value='popularity'>Popularity</option>
			<option value='rating'>Rating</option>
			<option value='price'>Price</option>
			<option value='newness'>Newness</option>
			<option value='title'>Title</option>
			<option value='author'>Author</option>
		</Select>
	</Sort>)
}

export default SortField