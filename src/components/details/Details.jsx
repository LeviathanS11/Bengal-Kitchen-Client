import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from 'react-rating';
import { FaRegStar,FaStar} from 'react-icons/fa';

const Details = ({ detail }) => {
    const handleClick = event => {
        event.currentTarget.disabled = true;
        toast('added to favorite')
    };
    const { name, ingredients, cooking_method, rating, image } = detail;
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Img variant="top" src={image} />
                <Card.Title>{name}</Card.Title>
                <Card.Text><b>Ingredients:</b> {ingredients}</Card.Text>
                <Card.Text><b>Method:</b>{cooking_method}</Card.Text>
                <Card.Text>
                <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                </Card.Text>
                <div>
                    <button onClick={handleClick} className='hover'> Favorite</button>
                    <ToastContainer/>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Details;