import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefCard = ({chef}) => {
    const {id,chef_name,chef_picture,years_of_experience,Number_of_recipies,likes}=chef
    return (
        <div>
            <Card>
                <Card.Img  variant="top" src={chef_picture} />
                <Card.Body>
                    <Card.Title>Name:{chef_name}</Card.Title>
                    <Card.Text>Experience:{years_of_experience} Years</Card.Text>
                    <Card.Text>Recipies:{Number_of_recipies}</Card.Text>
                    <Card.Text>Likes:{likes}</Card.Text>
                    <Link to={`/chefs/${id}`}><Button variant="primary">View Recipes</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefCard;