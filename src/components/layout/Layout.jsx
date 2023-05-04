import React from 'react';
import NavigationBar from '../navbar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Banner from '../banner/Banner';
import Footer from '../footer/Footer';
import Section from '../Section/Section';

const Layout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Section></Section>
            <Footer></Footer>
        </div>
    );
};

export default Layout;