import { ADD_TO_CART, REMOVE_FROM_CART,EMPTY_CART } from "./const";

export const addToCart = (data) =>{
    console.log("add to cart action :-", data)
    return {
        type:ADD_TO_CART,
        data
    }
}

export const removeFromCart = (data) =>{
    console.log("Remove from cart action :-", data)
    return {
        type:REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = (data) =>{
    console.log("Empty cart :-", data)
    return {
        type:EMPTY_CART,
    }
}