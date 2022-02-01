import { configureStore } from '@reduxjs/toolkit'

import products from '../slices/productsSlice'
import cartProducts from '../slices/cartProductsSlice'

const store = configureStore({
    reducer: {products, cartProducts},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production', 
})

export default store