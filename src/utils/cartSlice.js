import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
  name:'cart',
  initialState:{
    items:[],
  },
  reducers:{
    //mutating the state here
    addItem:(state,action)=>{

      //Vanialla(older) Redux ==> DON'T MUTATE STATE, returning is mandatory
      // const newState={...state};
      // newState.items.push(action.payload);
      // return newState;
      //Immer
      //Redux Toolkit uses immer BTS

      state.items.push(action.payload);
    },
    removeItem:(state,action)=>{
      state.items.pop();
    },
    clearCart:(state)=>{
      state.items.length=0;
    },
  },
});

export const {addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;