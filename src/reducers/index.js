import { combineReducers } from 'redux'
import products from './products'
import comments from './comments'

const combinedReducer = combineReducers({ products, comments })

export default combinedReducer
