import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../details/Details';

const ChefDetail = () => {
    const details=useLoaderData();
    return (
        <div>
            {
                details.map(detail=><Details key={detail.id} detail={detail}></Details>)
            }
        </div>
    );
};

export default ChefDetail;