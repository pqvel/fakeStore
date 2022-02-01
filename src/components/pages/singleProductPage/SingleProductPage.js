import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { toggleFavouriteProduct } from "../../../slices/productsSlice";
import { addProductToCart, changeProductCount } from "../../../slices/cartProductsSlice";

import { useProductService } from "../../../services/useProductService";

import Header from "../../header/Header";
import Rating from "../../rating/Rating";
import Spinner from "../../spinner/Spinner";

import './singleProductPage.scss';

const SingleProductPage = () => {
    const dispatch = useDispatch();
    
    
    const products = useSelector(state => state.products.products)
    const cartProducts = useSelector(state => state.cartProducts.cartProducts)

    const { productId } = useParams();
    const [product, setProduct] = useState(null);


    const { getSingleProduct } = useProductService();
    
    useEffect(() => {
        loadProduct();
    }, [])
    
    const loadProduct = () => {

        const getProductFromState = new Promise((resolve, reject) => {
            const product = products.find(item => item.id == productId);
            if (product === undefined || product === null) {
                reject("product dosn't exist in store");
            } else {
                resolve(product)
            }
        })

        const getProductFromAPI = new Promise((resolve) => {
            getSingleProduct(productId)
                .then(response => resolve(response))
                .catch(error => console.log(error))
        })

        Promise.any([getProductFromState, getProductFromAPI])
            .then(response => setProduct(product => response))
            .catch(error => console.log(error));    
    }

    const onAddToCart = useCallback((product) => {
        const cartItem = cartProducts.find(item => item.id === product.id)
            
            if (cartItem) {
                if (cartItem.count === 100) return;
                dispatch(changeProductCount({id: cartItem.id, count: cartItem.count + 1}))
            } else {
                dispatch(addProductToCart(product))
            }
    }, [cartProducts])

    const onToggleFavourite = useCallback((product) => {
        
        dispatch(toggleFavouriteProduct(product.id))
    }, [])

    

    return (
        <div>
            {product ? <View product={product} onToggleFavourite={onToggleFavourite} onAddToCart={onAddToCart}/> : <Spinner myClass={'center'}/>}
        </div>
    ) 
}

const View = ({product, onAddToCart, onToggleFavourite}) => {

    const {image, rating, title, description, price, category} = product;
    
    return (
        <>
            <Header></Header>
            <div className='product-page'>
                <div className='product-page__container'>
                    <div className='product-page__img-block'>
                        <img className='product-page__img' src={image} alt="ffrfrg"></img>
                    </div>

                    <div className='product-page__content'>
                        <div className='product-page__rate'>
                            <Rating value={rating.rate}></Rating>
                        </div>
                        <h4 className='product-page__title'>{title}</h4>
                        <span className='product-page__price'>{price} $</span>
                        <p className='product-page__descr'>{description}</p>
                        <span className='product-page__category'>
                            category: <span className="product-page__category--bold">{category}</span>
                        </span>
                        <div className='btns-block'>
                            <button className='btn btn--cart'
                                    onClick={() => onAddToCart(product)}>Add to cart</button>
                            <button className='btn btn--favourite'
                                    onClick={() => onToggleFavourite(product)}>Toggle Favourite</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )

}

export default SingleProductPage
