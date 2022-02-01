import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const  initialState = {
    products: [],
    filterValue: '',
    loadingStatus: 'idle',
}

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async (getProducts) => {
        return await getProducts()
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        toggleFavouriteProduct: (state, action) => {
            state.products = state.products.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        favourite: !item.favourite
                    }
                } else {
                    return item;
                }
            })
        },
        filterProducts: (state, action) => {
            state.filterValue = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loadingStatus = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loadingStatus = 'idle'
                state.products = [...state.products, ...action.payload]
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.loadingStatus = 'error'
            })
            .addDefaultCase(() => {})
    }
})

const {reducer, actions} = productsSlice;

export const {
    toggleFavouriteProduct,
    filterProducts,
} = actions

export default reducer;
