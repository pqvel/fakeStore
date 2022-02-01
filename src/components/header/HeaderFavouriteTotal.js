import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const HeaderFavouriteTotal = () => {
    
    const products = useSelector(state => state.products.products);
    const [productsCount, setProductsCount] = useState(0);
    
    useEffect(() => {
        let count = 0;
        products.forEach(item => {
            if (item.favourite === true) {
                count ++
            }
        })
        setProductsCount(productsCount =>  count)
    }, [products])

    if (productsCount === 0) return null;

    return (
        <input className="header__total-count"
               readOnly
               value={productsCount < 100 ? productsCount : '99+'}
               type='text'></input>
    )
}

export default HeaderFavouriteTotal