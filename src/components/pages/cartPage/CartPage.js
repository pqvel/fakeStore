
import CartList from "../../cartList/CartList"
import CartSidebar from "../../cartSidebar/CartSidebar"
import Header from "../../header/Header"
import './cartPage.scss'

const CartPage = () => {


    return (
        <>
            <Header/>
            <div className="cart">
                <CartList/>
                <CartSidebar/>
            </div>
        </>
    )
}

export default CartPage