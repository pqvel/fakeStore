
import { HashRouter, Route, Routes } from "react-router-dom";

import MainPage from "../pages/mainPage/MainPage";
import SingleProductPage from "../pages/singleProductPage/SingleProductPage";
import FavouritePage from "../pages/favouritePage.js/FavouritePage";
import CartPage from "../pages/cartPage/CartPage";
import Page404 from "../pages/page404/Page404";

const App = () => {

    return (
        <HashRouter>
            <div className="app">
                <Routes>
                    <Route path='/favourite' element={<FavouritePage/>} />

                    <Route path='/cart' element={<CartPage/>} />
                        
                    <Route path='/product/:productId' element={<SingleProductPage/>} />
                        
                    <Route path='/' element={<MainPage/>} />

                    <Route path='*' element={<Page404/>}/>
                </Routes>
            </div>
        </HashRouter>
    )
}

export default App;