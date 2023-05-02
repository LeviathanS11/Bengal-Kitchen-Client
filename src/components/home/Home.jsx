import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChefCard from '../Cards/ChefCard';
import './Home.css'

const Home = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json()
                .then(data => setChefs(data))
                .catch(error => console.error(error))
            )
    }, [])
    return (
        <div>
            <div className='chef-container'>
                {
                    chefs.map(chef =>
                        <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Home;