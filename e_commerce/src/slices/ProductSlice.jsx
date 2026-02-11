
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  cart :[],
  wish :[],
} 

export const ProductSlice = createSlice({
  name:'Products',
  initialState,
  reducers: {
    allProducts: (state,action) => {
     state.value = action.payload
    },
    filterData: (state,action) => {
     state.value = action.payload
    },
    cartData: (state,action) => {
     state.cart = [...state.cart,action.payload]
    },
    wishList: (state,action) => {
     state.wish= [...state.wish,action.payload]
    },
    removeReducer: (state,action) => {
     state.cart = [...state.cart.filter((item)=>item.id !==action.payload)]
    },
  },
})


export const { allProducts,filterData,cartData,wishList,removeReducer} = ProductSlice.actions

export default ProductSlice.reducer
