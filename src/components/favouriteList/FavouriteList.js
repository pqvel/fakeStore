import '../productList/productList.scss';
import './favouriteList.scss';

import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import ProductListItem from '../productListItem/ProductListItem'
import EmptyFavouriteList from './EmptyFavouriteList';
import FilterItems from '../filterItems/FilterItems';


const FavouriteList = () => {

    const products = useSelector((state) => state.products.products);
    const filterValue = useSelector((state) => state.products.filterValue)

    const renderItems = (products) => {
        
        const favouriteProducts = products.filter(product => {
            if (product.favourite) {
                return product
            }
        })

        return favouriteProducts.map(product => {    
            return (
                <ProductListItem product={product} key={product.id}></ProductListItem>
            )
        })   
    }

    const items = useMemo(() => renderItems(products), [products])

    if (items.length === 0) {
        return <EmptyFavouriteList/>
    }

    return (
        <>
            <ul className='product-list'>
                <FilterItems filterValue={filterValue}>
                    {items}
                </FilterItems>
            </ul>
        </>
    )
}

export default FavouriteList;