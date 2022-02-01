import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteAllProductsFromCart } from "../../slices/cartProductsSlice";


const CartSidebar = () => {
    const dispatch = useDispatch();

    const cartProducts = useSelector(state => state.cartProducts.cartProducts);
    const promoArr = useSelector(state => state.cartProducts.promoArr);

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProducts, setProductsCount] = useState(0)
    const [promoValue, setPromoValue] = useState('')
    const [promo, setPromo] = useState(1);
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        const productsPrice = cartProducts.reduce((total, item) => {
            const {price, count} = item;
           return total + price * count
        }, 0);

        setTotalPrice(totalPrice => Math.ceil(productsPrice * promo * 100) / 100);
    }, [cartProducts, promo])

    useEffect(() => {
        const productsCount = cartProducts.reduce((total, item) => {
            const {count} = item;
            return total + count;
        }, 0);

        setProductsCount(totalProducts => productsCount)
    }, [cartProducts])

    useEffect(() => {
        cartProducts.length > 0 ? setDisabled(false) : setDisabled(true)
    }, [cartProducts.length])

    const onPromo = (event) => {
        const value = event.target.value;
        setPromoValue(promoValue => value);

        promoArr.forEach(promoCode => {
            value === promoCode ? setPromo(0.9) : setPromo(1);
        })
    }

    const createOrder = () => {
        dispatch(deleteAllProductsFromCart());
        setPromoValue(promoValue => '')
    }

    return (
            <div className="cart__sidebar">
                <h4 className="cart__sidebar-title">Total:</h4>
                <span className="cart__sidebar-total">Price: {totalPrice} $</span>
                <span className="cart__sidebar-total">Total goods: {totalProducts}</span>
                <input className="cart__sidebar-input" 
                       placeholder="Promo code"
                       value={promoValue}
                       onChange={(event) => onPromo(event)}/>
                <button onClick={() => createOrder()}
                        disabled={disabled}
                        className={disabled ? "cart__sidebar-button cart__sidebar-button--disable"  :
                                              "cart__sidebar-button"}>Checkout</button>
            </div>
    )
}

export default CartSidebar;