export interface Book{
	id: number
	title: string
	author: string
	image: string
	price: number
	rating: number
	addToCart : (id: number) => Action
}

export interface State{
	items: Book[]
	isCartShown: boolean
	isReady: boolean
	cartItems: Book[]
	sortBy: string
	filterBy: string
	count: number
	toggleCart: (isCartShown : boolean) => void
}

export interface Action{
	type: string,
	payload: any
}