import React from "react";
import './filterItems.scss';

const FilterItems = (props) => {
    const { filterValue } = props;
   
    if (!filterValue) return props.children;
    
    const items = React.Children.map(props.children, (child) => {
        
        const text = child.props.product.title.toLowerCase()
        const includeFilterValue = text.indexOf(filterValue.toLowerCase());
                
        if (includeFilterValue !== -1) return child;
    }) 
    return (
        <>
            {items.length !== 0 ? items : <span className="filter__span">Nothing found for your request</span>}
        </>
    )
}

export default FilterItems;