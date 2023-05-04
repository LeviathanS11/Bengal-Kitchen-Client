import React from 'react';
import NavigationBar from '../navbar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Banner from '../banner/Banner';

const Layout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;