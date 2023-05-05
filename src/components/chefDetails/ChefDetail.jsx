import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../details/Details';
import './chefDetails.css'

const ChefDetail = () => {
    const details = useLoaderData();
    return (

        <div className='grid mt-3'>
            {
                details.map(detail => <Details key={detail.id} detail={detail}></Details>)
            }
        </div>

    );
};

export default ChefDetail; 