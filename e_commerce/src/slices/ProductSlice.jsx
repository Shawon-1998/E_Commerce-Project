
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  cart :[],
}

export const ProductSlice = createSlice({
  name:'product',
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
  },
})


export const { allProducts,filterData,cartData} = ProductSlice.actions

export default ProductSlice.reducer
