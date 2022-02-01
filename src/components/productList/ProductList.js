import './productList.scss'

import { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useProductService } from '../../services/useProductService';

import ProductListItem from '../productListItem/ProductListItem'
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import FilterItems from '../filterItems/FilterItems';

import { fetchProducts } from '../../slices/productsSlice';

const ProductList = () => {

    const dispatch = useDispatch();
    const {getProducts} = useProductService()

    const products = useSelector(state => state.products.products)
    const loadingStatus = useSelector(state => state.products.loadingStatus)
    const filterValue =  useSelector(state => state.products.filterValue)

    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (products.length === 0) loadItems();
    }, [])

    useEffect(() => {
        if (products.length === 20) setDisabled(true)
    }, [products.length])

   
    const loadItems = () => {
        if (loadingStatus === 'loading') return;
        
        dispatch(fetchProducts(getProducts))
    }

    const renderItems = (products) => {
        
        return products.map(product => {
            return <ProductListItem product={product} key={product.id}></ProductListItem>
        })
    }
    
    const items = useMemo( () => renderItems(products), [products]);
    
    return (
        <>
            <ul className='product-list'>
                <FilterItems filterValue={filterValue}>
                    {items}
                </FilterItems>
            </ul>
            <div className='product-list__wrapper'>
            {loadingStatus === 'loading' ? <Spinner myClass="product-list__spinner"/> : null}
            {loadingStatus === 'error' ? <ErrorMessage/> : null}
                <button disabled={disabled}
                        className={disabled ? 'product-list__button product-list__button--disable' : 
                                              'product-list__button'}
                        onClick={() => loadItems()}>Load more products</button>
            </div>
        </>
    )
}

export default ProductList;