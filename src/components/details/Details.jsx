import React from 'react';
import { Card } from 'react-bootstrap';

const Details = ({detail}) => {
    const{name,ingredients, cooking_method,rating,image}=detail;
    return (
        <Card  style={{ width: '20rem' }}>
                <Card.Body>
                <Card.Img variant="top" src={image} />
                    <Card.Title>{name}</Card.Title>
                    <Card.Text><b>Ingredients:</b> {ingredients}</Card.Text>
                    <Card.Text><b>Method:</b>{cooking_method}</Card.Text>
                    <Card.Text><b>Rating:</b>{rating}</Card.Text>
                    <button className='hover'> Favorite</button>
                </Card.Body>
            </Card>
    );
};

export default Details;