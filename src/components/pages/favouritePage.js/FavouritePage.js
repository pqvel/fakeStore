import FavouriteList from "../../favouriteList/FavouriteList"
import Header from "../../header/Header";
import SearchProducts from "../../searchProducts/SearchProducts";
import './favouritePage.scss';
const FavouritePage = () => {


    return (
        <>
            <Header>
                <SearchProducts/>
            </Header>
            <div className="favourite-page__container">
                <FavouriteList/>
            </div>
        </>
    )
}

export default FavouritePage