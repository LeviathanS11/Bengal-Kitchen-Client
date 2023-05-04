import React from 'react';

const Details = ({detail}) => {
    const{name,ingredients, cooking_method,rating}=detail;
    return (
        <div>
            <p>{name}</p>
            <p>{ingredients}</p>
            <p>{cooking_method}</p>
            <p>{rating}</p>
        </div>
    );
};

export default Details;