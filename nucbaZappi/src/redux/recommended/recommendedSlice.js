import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data";

const INITIAL_STATE = {
 recommended: Array(4)
  .fill(0)
  .reduce((acc, item) => {
   const IDs = acc.map(value => value.id);
   let newRecommended;
   do {
    const random = Math.random();
    const multiply = random * products.length
    const floor = Math.floor(multiply)
    console.log(random, multiply, floor);
    newRecommended = {
     ...products[Math.floor(Math.random() * products.length)],
    };
   } while (IDs.includes(newRecommended.id))

   return [...acc, newRecommended];
  }, [])
};

export const recommendedSlice = createSlice({
 name: 'recommended',
 initialState: INITIAL_STATE,
 reducer: {
   randomRecommended: state => {
    return state;
   }
 }
});

export const { randomRecommended } = recommendedSlice.actions;

export default recommendedSlice.reducer;