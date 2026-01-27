import { configureStore } from '@reduxjs/toolkit'
import { ProductSlice } from '../slices/ProductSlice'

export const store = configureStore({
 reducer : {
    productItem : ProductSlice.reducer
 } 
})

export default store;