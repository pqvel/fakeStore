
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const HeaderCartTotal = () => {
    
    const cartProducts = useSelector(state => state.cartProducts.cartProducts);
    const [productsCount, setProductsCount] = useState(0);
    
    useEffect(() => {
        const totalCount = cartProducts.reduce((total, item) => {
            const {count} = item;
            return total + count;
        }, 0);

        setProductsCount(productsCount => totalCount)
    }, [cartProducts])

    if (productsCount === 0) return null;

    return (
        <input className="header__total-count"
               readOnly
               value={productsCount < 100 ? productsCount : '99+'}
               type='text'></input>
    )
}

export default HeaderCartTotal;