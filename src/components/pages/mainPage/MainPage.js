import Header from "../../header/Header";
import ProductList from "../../productList/ProductList";
import SearchProducts from "../../searchProducts/SearchProducts";
import './mainPage.scss';
const MainPage = () => {

    return (
        <>
            <Header>
                <SearchProducts/>
            </Header>
            <div className="main-page">
                <div className="main-page__container">
                    <ProductList></ProductList>
                </div>
            </div>
        </>
    )
}

export default MainPage;