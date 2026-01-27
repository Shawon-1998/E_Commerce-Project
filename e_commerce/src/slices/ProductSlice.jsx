
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const ProductSlice = createSlice({
  name:'product',
  initialState,
  reducers: {
    allProducts: (state,action) => {
     state.value = action.payload
    },
  },
})


export const { allProducts} = ProductSlice.actions

export default ProductSlice.reducer
