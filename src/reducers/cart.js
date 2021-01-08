const initialState = {
	items: [],
	isCartShown: false
}

export default function cartReducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD_TO_CART':
			return {
				...state,
				items: [...state.items, action.payload],
				isShown: false
			}
		case 'REMOVE_FROM_CART':
			return {
				...state,
				items: state.items.filter(i => i.id !== action.payload),
				isShown: true
			}
		case 'SHOW_CART':
			return {
				...state,
				isShown: true
			}
		case 'HIDE_CART':
			return {
				...state,
				isShown: false
			}
		default:
			return state
	}
}