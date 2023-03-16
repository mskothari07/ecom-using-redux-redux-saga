import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./const";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // add to cart logic
      console.log("Reducer aDD TO CART", action);
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      // remove from cart logic
      console.log("Reducer REMOVE FROM CART", action);
      //  data.length = data.length? data.length-1:[]
      const remainingItems = data.filter((item) => item.id !== action.data);
      console.log("reaming item", remainingItems);
      return [...remainingItems];

    case EMPTY_CART:
      // remove from cart logic
      console.log("Reducer Empty cart", action);
      data = [];
      return [...data];

    default:
      //no case matched
      return data;
  }
};
