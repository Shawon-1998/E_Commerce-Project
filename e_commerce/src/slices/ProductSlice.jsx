import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const ProductSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    allProducts: (state) => {
     
    },
  },
})

// Action creators are generated for each case reducer function
export const { allProducts} = ProductSlice.actions

export default ProductSlice.reducer
