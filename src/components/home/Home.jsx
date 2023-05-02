import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChefCard from '../Cards/ChefCard';
import './Home.css'

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