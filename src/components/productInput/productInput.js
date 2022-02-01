
import './productInput.scss';

import { memo } from "react";

const ProductInput = ({count, onCalcInputValue}) => {
    
    return (
        <div className="product-input">
            <input className="product-input__input"
                   type="number"
                   min="0"
                   max="100"
                   readOnly
                   value={count}/>
            <b className="product-input__plus"
                onClick={() => onCalcInputValue(1)}>
                    <i className="product-input__plus-item-1"></i>
                    <i className="product-input__plus-item-2"></i>
            </b>
            <b className="product-input__minus"
                onClick={() => onCalcInputValue(-1)}>
                    <i className="product-input__minus-item-1"></i>
            </b> 
        </div>
    )
}

export default memo(ProductInput, (prevProps, nextProps) => prevProps.count === nextProps.count);