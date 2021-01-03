export const setBooks = (books) => ({
	type: 'SET_BOOKS',
	payload: books
})

export  const  sortBooks = (sortBy) => ({
	type: 'SORT_BOOKS',
	payload: sortBy
})

export const filterBooks = filterBy => ({
	type: 'FILTER_BOOKS',
	payload: filterBy
})