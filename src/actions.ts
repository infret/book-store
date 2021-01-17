import {Book} from './types'

export const showBooks = (books : Book[]) => ({type: 'SHOW_BOOKS', payload: books})
export const sortBooks = (sortBy : string) => ({type: 'SORT_BOOKS', payload: sortBy})
export const filterBooks = (filterBy : string) => ({type: 'FILTER_BOOKS', payload: filterBy})
export const addToCart = (id : number) => ({type: 'ADD_TO_CART', payload: id})
export const removeFromCart = (id: number) => ({type: 'REMOVE_FROM_CART', payload: id})
export const toggleCart = () => ({type: 'TOGGLE_CART'})
