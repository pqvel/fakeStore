import { Link } from "react-router-dom";

import error404Img from '../../../assets/error404.png';
import './page404.scss';


const Page404 = () => {

    return (
        <div className="page404">
            <div className="page404__container">
                <img className="page404__img" src={error404Img} alt="error"/>
                <div className="page404__column">
                    <h2 className="page404__title">Page not found</h2>
                    <p className="page404__text">We're sorry, but it lools like the page you're 
                       looking for isn't here. Try retyping the URL or returning 
                       to <Link className="page404__link" to="/">Main page</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Page404