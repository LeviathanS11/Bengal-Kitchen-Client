import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefCard = ({chef}) => {
    const {id,chef_name,chef_picture}=chef
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={chef_picture} />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    <Link to={`/chefs/${id}`}><Button variant="primary">Go somewhere</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefCard;