import { memo } from "react"


const EmptyCartList = () => {
    
    return (
        <tr className="cart__table--empty">
            <td>Your cart is empty. Please select a product to buy</td>
        </tr>
    )
}

export default memo(EmptyCartList);