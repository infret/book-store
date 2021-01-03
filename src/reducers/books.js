const initialState = {
	isReady: false,
	items: [],
	sortBy: 'placeholder',
	filterBy: ''
}

export default function booksReducer(state = initialState, action){
	switch (action.type) {
		case 'SET_BOOKS':
			return {
				...state,
				items: action.payload,
				isReady: true
			}
		case 'SORT_BOOKS':
			return {
				...state,
				sortBy: action.payload,
			}
		case 'FILTER_BOOKS':
			return {
				...state,
				filterBy: action.payload
			}
		case 'BOOKS_ARE_READY':
			return {
				...state,
				isReady: action.payload
			}
		default:
			return state
	}
}