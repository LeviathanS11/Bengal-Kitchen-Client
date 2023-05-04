import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='bannerBg'>
            <div className='overlay'>
                <h1 className='text'>Only Quality Food</h1>
                <div >
                    <button className='hover'>View Menu</button>
                    <button className='hover'>Set Reservation</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;