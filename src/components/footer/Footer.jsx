import React from 'react';

const Footer = () => {
    return (
        <div className='bg-secondary mt-4'>
            <h1 className='text-center pt-3'>Want to be informed?</h1>
            <div className='text-center'> 
                <input type="text" placeholder='search' />
                <button>Subscribe</button>
            </div>
            <div className='d-flex justify-content-around pt-2'>
                <p>About</p>
                <p>Help</p>
                <p>Contact</p>
                <p>Terms</p>
            </div>
        </div>
    );
};

export default Footer;