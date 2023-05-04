import React from 'react';
import { Card } from 'react-bootstrap';

const Details = ({detail}) => {
    const{name,ingredients, cooking_method,rating}=detail;
    return (
        <Card>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text><b>Ingredients:</b> {ingredients}</Card.Text>
                    <Card.Text><b>Method:</b>{cooking_method}</Card.Text>
                    <Card.Text><b>Rating:</b>{rating}</Card.Text>
                </Card.Body>
            </Card>
    );
};

export default Details;