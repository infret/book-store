const initialState = {
	items: [
		{
			"id": 0,
			"title": "Происхождение",
			"author": "Дэн Браун",
			"image": "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
			"price": 7.1,
			"rating": 3
		},
		{
			"id": 1,
			"title": "1984",
			"author": "Джордж Оруэлл",
			"image": "https://cv0.litres.ru/sbc/09233908_cover_185-elektronnaya-kniga--.jpg",
			"price": 9.1,
			"rating": 5
		},
	],
}

export default function cartReducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD_BOOK':
			return {
				...state,
				items: [...state.items, action.payload],
			}
		case 'REMOVE_BOOK':
			return {
				...state,
				items: state.items.filter(i => i.id !== action.payload)
			}
		default:
			return state
	}
}