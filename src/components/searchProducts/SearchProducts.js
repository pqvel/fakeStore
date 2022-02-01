import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { filterProducts } from "../../slices/productsSlice";

import searchImg from '../../assets/search.svg'
import './searchProducts.scss';

const SearchProducts = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('')

    useEffect(() => {
        return () => {
            onChangeFilterValue('')
        }
    }, [])

    const onEnter = (event) => {
        if (event.ketCode === 13 || event.key === 'Enter') {
            dispatch(filterProducts(value))
        }
    }

    const onChangeFilterValue = (value) => {
        dispatch(filterProducts(value))
    }

    return (
        <div className="search-products">
            <input className="search-products__input"
                   value={value}
                   onChange={(event) => setValue(value => event.target.value)}
                   onKeyPress={event => onEnter(event)}
                   placeholder="find product"/>
            <button className="search-products__button" onClick={() => onChangeFilterValue(value)}>
                <img className="search-products__img" src={searchImg} alt="search"/>
            </button>
        </div>
    )
}

export default SearchProducts