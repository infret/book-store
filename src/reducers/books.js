const initialState = {
	isReady: false,
	items: [],
	filterBy: 'rating'
}

export default function booksReducer(state = initialState, action){
	switch (action.type) {
		case 'SET_BOOKS':
			return {
				...state,
				items: action.payload,
				isReady: true
			}
		case 'SET_FILTER':
			return {
				...state,
				filterBy: action.payload,
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