import React from 'react';

const BluePriceTag = ({ className, title }) => {
    const value = title;
    const realValue = value.toFixed(2);
    return (
        <div className={`${className} blue-price-tag`}>
            ${realValue}
        </div>
    )
}

export default BluePriceTag;
