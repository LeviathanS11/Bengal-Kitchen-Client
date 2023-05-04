import React, { useEffect, useState } from 'react';
import ChefCard from '../Cards/ChefCard';
import './Home.css'
import { Container } from 'react-bootstrap';

const Home = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch('https://assignment-10-server-leviathans11.vercel.app/CHEFS')
            .then(res => res.json()
                .then(data => setChefs(data))
                .catch(error => console.error(error))
            )
    }, [])
    return (
        <Container>
            <h1 className='text-center my-3'>Our Chefs</h1>
            <div className='chef-container'>
                {
                    chefs.map(chef =>
                        <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </div>
        </Container>
    );
};

export default Home;