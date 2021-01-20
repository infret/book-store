import styled from 'styled-components'
import React from 'react'

const Sort = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
`

const Label = styled.label`
  font-weight: bold;
  font-size: 16px;
  color: var(--accent-color);
  margin-left: 10px;
`

const Select = styled.select`
  color: grey;
  background-color: transparent;
  border: 2px solid var(--accent-color);
  outline: none;
  height: 36px;
  width: 200px;
  font-size: 16px;
  line-height: 1;
  border-radius: 4px;
  margin: 8px;
  padding: 6px;
  opacity: 1;
  transition: ease 0.4s;

  :hover {
    background-color: var(--grey-color);
  }

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
  width: 200px;
  font-size: 16px;
  line-height: 1;
  border-radius: 4px;
  margin: 8px;
  padding: 6px;
  transition: ease 0.4s;

  @media (max-width: 520px) {
    width: 270px;
  }

  :placeholder {
    opacity: 1;
  }

  :hover {
    background-color: var(--grey-color);
  }
`

interface Props {
  sortBy: string
  sortBooks: (sortBy: string) => void
  filterBy: string
  filterBooks: (filterBy: string) => void
}

const Filter = ({ sortBooks, sortBy, filterBooks, filterBy }: Props) => (
  <Sort>
    <Searchbar
      type='search'
      onChange={(e) => filterBooks(e.target.value)}
      value={filterBy}
      placeholder='Search'
    />
    <div>
      <Label htmlFor='sortby'>Sort by:</Label>
      <Select
        id='sortby'
        value={sortBy}
        onChange={(e) => sortBooks(e.target.value)}
      >
        <option disabled value='placeholder'>
          Sort by
        </option>
        <option value='rating'>Rating</option>
        <option value='price'>Price</option>
        <option value='title'>Title</option>
        <option value='author'>Author</option>
      </Select>
    </div>
  </Sort>
)

export default Filter
