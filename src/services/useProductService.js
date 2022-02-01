import { useSelector } from "react-redux";
import { useHttpHook } from "../hooks/useHttpHook"

export const useProductService = () => {
    const _apiBase = 'https://fakestoreapi.com';

    const products = useSelector(state => state.products.products)

    const {request} = useHttpHook();

    const getProducts = async () => {
        const itemsCount = products.length === 0 ? 8 : 4;
        const response = await request(`${_apiBase}/products?limit=${products.length + itemsCount}`);
        return _addFavouriteProperty(response);
    }

    const getSingleProduct = async (id) => {
        const product = await request(`${_apiBase}/products/${id}`);
        
        return  _addFavouriteProperty(product);
    } 

    const _addFavouriteProperty = (res) => {
        if (Array.isArray(res)) {
            const newProducts = res.slice(products.length, res.length);
            const productsWithFavourite = newProducts.map(product => {
                product.favourite = false;
                return product
            });

            return productsWithFavourite;
        } else {
            res.favourite = false
            return res
        }
    }

    return {
        getProducts,
        getSingleProduct,
    }
}
