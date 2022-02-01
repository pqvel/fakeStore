
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './productListItem.scss';

import Rating from '../rating/Rating'
import ToggleFavouriteButton from './ToggleFavouriteButton';

import { toggleFavouriteProduct } from '../../slices/productsSlice';
import { changeProductCount, addProductToCart } from '../../slices/cartProductsSlice';
import { useCallback } from 'react';



const ProductListItem = ({product}) => {
        const { id, title, price, image, rating } = product
        const dispatch = useDispatch()
        const cartProducts = useSelector(state => state.cartProducts.cartProducts);
        
        const onAddToCart = (event, product) => {
            event.preventDefault()
    
            const cartItem = cartProducts.find(item => item.id === id)
            
            if (cartItem) {
                if (cartItem.count === 100) return;
                dispatch(changeProductCount({id: id, count: cartItem.count + 1}))
            } else {
                dispatch(addProductToCart(product))
            }
        }
    
        const onToggleFavourite = useCallback((event, id) => {
            event.preventDefault();
            dispatch(toggleFavouriteProduct(id))
        }, [])
    
        const validateText = (text, maxLength) => {
            if (text.length < maxLength) return text
            
            const newTitle = text.slice(0, maxLength) + '...'
            
            if (newTitle[19] === ' ') {
                return newTitle.slice(0, maxLength - 1) + '...'
            }
            
            return newTitle
        }

    return (
        <li className="product-list__item">
            <Link to={`/product/${id}`} className='product'>
                <div className='product__img-block'>
                    <img className='product__img' src={image} alt={title}/>
                    <div className='product__rate'>
                        <Rating value={rating.rate}></Rating>
                    </div>
                </div>
                <span className='product__title'>{validateText(title, 20)}</span>
                <span className='product__descr'></span>
                <span className='product__price'>{price} $</span>
                <div className='product__buttons'>
                    <ToggleFavouriteButton onToggleFavourite={onToggleFavourite}
                                           id={id}/>
                    <button className="product__button"
                            onClick={(event) => onAddToCart(event, product)}>
                                    <svg className="product__button-img--cart"
                                         xmlns="http://www.w3.org/2000/svg" 
                                         width="24" 
                                         height="24" 
                                         viewBox="0 0 24 24">
                                             <path d="M10.975 8l.025-.5c0-.517-.067-1.018-.181-1.5h5.993l-.564 2h-5.273zm-2.475 10c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-10.428l-.455-1.083c-.323.049-.653.083-.99.083-.407 0-.805-.042-1.191-.114l1.306 3.114h13.239l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-4.5-10.5c0 2.485-2.018 4.5-4.5 4.5-2.484 0-4.5-2.015-4.5-4.5s2.016-4.5 4.5-4.5c2.482 0 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z"/>
                                        </svg>
                            </button>
                </div>
            </Link>
        </li>
    )
}

export default ProductListItem;

