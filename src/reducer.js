const initialState = {
	items: [],
	isCartShown: false,
	isReady: false,
	cartItems: [],
	sortBy: '',
	filterBy: ''
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'SHOW_BOOKS':
			return {
				...state,
				items: action.payload,
				isReady: true,
			}
		case 'SORT_BOOKS':
			return {
				...state,
				sortBy: action.payload,
			}
		case 'FILTER_BOOKS':
			return {
				...state,
				filterBy: action.payload,
			}
		case 'BOOKS_ARE_READY':
			return {
				...state,
				isReady: action.payload,
			}
		case 'ADD_TO_CART':
			return {
				...state,
				items: [...state.items, action.payload],
				isShown: false,
			}
		case 'REMOVE_FROM_CART':
			return {
				...state,
				items: state.items.filter(i => i.id !== action.payload),
				isShown: true,
			}
		case 'TOGGLE_CART':
			return {
				...state,
				isShown: action.payload,
			}
		default:
			return state
	}
}