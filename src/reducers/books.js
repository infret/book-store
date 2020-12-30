const initialState = {
	isReady: false,
	items: [
		{
			id:0,
			title: 'Mein Kapmf!'
		}
	],
}

export default function(state = initialState, action){
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