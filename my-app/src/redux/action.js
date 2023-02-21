import { ADD_TO_CART } from "./const";

export const addToCart = (data) =>{
    console.log("Action Called :-", data)
    return {
        type:ADD_TO_CART,
        data
    }
}