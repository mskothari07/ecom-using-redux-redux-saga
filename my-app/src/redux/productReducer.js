import { SET_PRODUCT_LIST } from "./const";

export const ProductData = (data = [], action) => {
  switch (action.type) {
      case SET_PRODUCT_LIST:
      // add to cart logic
      console.log("Reducer Product List", action);
      return [...action.data];;

    default:
      //no case matched
      return data;
  }
};
