import {combineReducers} from 'redux'
import { cartData } from "./reducer";
import {ProductData} from "./productReducer"
export default combineReducers({
    cartData, ProductData
})