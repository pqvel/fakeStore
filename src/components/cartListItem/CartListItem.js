import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"

import { changeProductCount } from "../../slices/cartProductsSlice";

import ProductInput from "../productInput/productInput"

const CartListItem = ({title, price, id, onDelete}) => {
    const dispatch = useDispatch();
    
    const count = useSelector((state) => {
        const product = state.cartProducts.cartProducts.find(item => item.id === id);
        return product.count;
    })

     const onCalcInputValue = useCallback((value) => {
        if (count === 0 && value === -1) return;
        if (count === 100 && value === 1) return;
        dispatch(changeProductCount({id, count: count + value}))
    }, [])

    return (
        <tr className={count !== 0 ? "cart__table-row" : "cart__table-row cart__table-row--empty"}>
            <td className="cart__table-column">{title}</td>
            <td className="cart__table-column">{price} $</td>
            <td className="cart__table-column">
                <div className='cart__table-input-block'>
                   <ProductInput onCalcInputValue={onCalcInputValue} count={count}/> 
                </div>
            </td>
            <td className="cart__table-column">
                <button className="cart__table-button-delete"
                        onClick={() => onDelete(id)}/>
            </td>
        </tr>
    )
}

export default CartListItem