const initialState = {
	isReady: false,
	items: [],
}

export default function booksReducer(state = initialState, action){
	switch (action.type) {
		case 'SET_BOOKS':
			return {
				...state,
				items: action.payload,
				isReady: true
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