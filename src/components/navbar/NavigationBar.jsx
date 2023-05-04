import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';

const NavigationBar = () => {
    const {user,logOut}=useContext(AuthContext)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container >
                <Navbar.Brand>Bengal Kitchen</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto ">
                        <Link className='text-decoration-none ' to="/">Home</Link>
                        <Link className='text-decoration-none ps-2' to="/blog">Blog</Link>
                    </Nav>
                    <Nav>
                        {/* <Link><FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle></Link> */}
                        {
                            user && <p className=''>{user.email}</p>
                        }
                        {user?<Button onClick={logOut}>Log Out</Button>: <Button variant="secondary"><Link className='text-decoration-none' to='/login'>Login</Link></Button>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;