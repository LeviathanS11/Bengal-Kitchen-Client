import React from 'react';
import NavigationBar from '../navbar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Banner from '../banner/Banner';
import Footer from '../footer/Footer';

const Layout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;