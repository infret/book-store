const initialState = {
	items: [],
	isCartShown: false,
	isReady: false,
	cartItems: [],
	sortBy: '',
	filterBy: '',
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
		case 'ADD_TO_CART':
			return {
				...state,
				cartItems: [...state.cartItems, state.items[action.payload]],
				isCartShown: false,
			}
		case 'REMOVE_FROM_CART':
			return {
				...state,
				cartItems: state.cartItems.filter(item => item.id !== action.payload),
				isCartShown: true,
			}
		case 'TOGGLE_CART':
			return {
				...state,
				isCartShown: action.payload,
			}
		default:
			return state
	}
}