import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'

import rootReducer from './reducers'

export default function storeCreator(){
	//return createStore(rootReducer, applyMiddleware(logger))
	return createStore(rootReducer, applyMiddleware())
}