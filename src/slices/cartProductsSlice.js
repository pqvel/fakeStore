import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: [],
    promoArr: ['123_ddd', 'hello_worls', 'oleg'],
}

const cartProductsSlice = createSlice({
    name: 'cartProducts',
    initialState,
    reducers: {
        addProductToCart: {
            reducer: (state, action) => {
                state.cartProducts = [...state.cartProducts, action.payload]
            },
            prepare: (product) => {
                return { payload: { ...product, count: 1} }
            }
        },
        deleteProductFromCart: (state, action) => {
            state.cartProducts = state.cartProducts.filter(item => item.id !== action.payload)
        },
        deleteAllProductsFromCart: (state) => {
            state.cartProducts = []
        },
        changeProductCount: (state, action) => {
            state.cartProducts = state.cartProducts.map(item => {
                const {id, count} = action.payload
                if (item.id === id) {
                    return {
                        ...item,
                        count
                    }
                } else {
                    return item;
                }
            })
        }
    }
})
const {reducer, actions} = cartProductsSlice;

export default reducer;

export const {
    addProductToCart,
    deleteProductFromCart,
    deleteAllProductsFromCart,
    changeProductCount
} = actions