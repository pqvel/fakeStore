

import {
    Link,
    NavLink
} from 'react-router-dom'


import './header.scss';

import HeaderCartTotal from './HeaderCartTotal';
import HeaderFavouriteTotal from './HeaderFavouriteTotal';


import favouriteImg from '../../assets/heart.svg'
import cartImg from '../../assets/cart.svg'


const Header = (props) => {
    
    return (
        <div className='header'>
            <div className='header__container'>

                <div className='header__logo'>
                    <Link className='header__logo-link'
                        to='/'>FakeStore</Link>
                </div>
                {
                    props.children
                }
                <ul className='header__menu-list'>
                    <li className='header__list-item'>
                        <NavLink className={isActive =>
                                    "header__link" + (!isActive ? " header__link--active" : "")
                                 }
                                 to='/favourite'>
                                     <img src={favouriteImg} alt='favourite'/>
                                </NavLink>
                        <HeaderFavouriteTotal/>
                    </li>
                    <li className='header__list-item'>
                        <NavLink className={isActive => 
                                    'header__link' + (!isActive ? ' header__link--active' : '')
                                 }
                                 to='/cart'>
                                     <img src={cartImg} alt='cart'/>
                                </NavLink>
                        <HeaderCartTotal/>
                    </li>
                </ul>

            </div>
        </div>
    )
}


export default Header;