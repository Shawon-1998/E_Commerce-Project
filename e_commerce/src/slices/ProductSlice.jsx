
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  cart : JSON.parse(localStorage.getItem("cart")) || [],
  wish :JSON.parse(localStorage.getItem("wish")) || [],
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
     localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    wishList: (state,action) => {
     state.wish= [...state.wish,action.payload]
     localStorage.setItem("wish",JSON.stringify(state.wish))
    },
    removeCartReducer: (state,action) => {
     state.cart = [...state.cart.filter((item)=>item.id !==action.payload)]
    },
    removeWishReducer: (state,action) => {
     state.wish = [...state.wish.filter((item)=>item.id !==action.payload)]
    },
  },
})


export const { allProducts,filterData,cartData,wishList,removeCartReducer,removeWishReducer} = ProductSlice.actions

export default ProductSlice.reducer
