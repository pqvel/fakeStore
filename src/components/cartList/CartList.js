
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux"
import { deleteProductFromCart } from "../../slices/cartProductsSlice";
import CartListItem from '../cartListItem/CartListItem';
import EmptyCartList from "./EmptyCartList";
import { v4 as uuidv4 } from 'uuid';

const CartList = () => {
    
    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cartProducts.cartProducts);

    const emptyCartProducts = cartProducts.length === 0; 

    const onDelete = useCallback((id) => {
        dispatch(deleteProductFromCart(id))
    }, [])

    return (
        <table className="cart__table">
                <thead className="cart__table-head">
                    <tr className="cart__table-row">
                        <td className="cart__table-column">Name:</td>
                        <td className="cart__table-column">Price:</td>
                        <td className="cart__table-column">Amount:</td>
                        <td className="cart__table-column"></td>
                    </tr>
                </thead>
                <tbody className='cart__table-body'>
                    {
                        cartProducts.map(({title, count, price, id}) => {
                            return (
                                <CartListItem onDelete={onDelete}
                                              title={title}
                                              count={count}
                                              price={price}
                                              id={id}
                                              key={uuidv4()}/>        
                            )
                        })
                    }
                    {
                        emptyCartProducts ? <EmptyCartList/> : null
                    }
                </tbody>
            </table>
    )
}

export default CartList