import { useEffect, useState } from 'react';
import './rating.scss';
import { memo } from 'react';
const Rating = ({value}) => {
    const [ratingWidth, setRatingWidth] = useState(0)
    
    const changeRating = (value) => {
        const activeRatingWidth = value / 0.05;
        setRatingWidth(ratingWidth => activeRatingWidth)
    }

    useEffect(() => {
        changeRating(value);
    }, [value])
    return (
        <div className='rating'>
            <div className='rating__body'>
                <div className='rating__active' style={{width: `${ratingWidth}%`}}></div>
                <div className='rating__items'>
                    <input className='rating__item' type='radio' value='1' name='rating'></input>
                    <input className='rating__item' type='radio' value='2' name='rating'></input>
                    <input className='rating__item' type='radio' value='3' name='rating'></input>
                    <input className='rating__item' type='radio' value='4' name='rating'></input>
                    <input className='rating__item' type='radio' value='5' name='rating'></input>
                </div>
            </div>
            <div className='rating__value'>{value}</div>
        </div>
    )
}

export default memo(Rating)