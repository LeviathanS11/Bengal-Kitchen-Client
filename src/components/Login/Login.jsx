import React, { useContext, useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import NavigationBar from '../navbar/NavigationBar';
import Footer from '../footer/Footer';
import { Button, Container, Form } from 'react-bootstrap';

const Login = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const { signIn, handleGoogle, handleGithub } = useContext(AuthContext);
    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset();
            })
            .catch(error => {
                setError(error)
            })
    }
    const handleGoogleSignIn = () => {
        handleGoogle(GoogleProvider)
            .then(result => {
                const loggedUser = result.user;
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleGithubSignIn = () => {
        handleGithub(GithubProvider)
            .then(result => {
                const loggedUser = result.user;
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (

        <div>
            <NavigationBar></NavigationBar>
            <Container className='mx-auto w-50'>
                <h3>Please Login</h3>
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>

                    <br />

                    <Form.Text>New to This Website!
                        <Link className='text-decoration-none' to='/signup'>Please Sign Up</Link>
                    </Form.Text>
                    <br />


                    <Button onClick={handleGoogleSignIn} variant="primary" type="submit">
                        Google login
                    </Button>
                    <Button onClick={handleGithubSignIn} variant="primary" type="submit">
                        Github Sign-in
                    </Button>


                    <Form.Text className="text-danger">

                    </Form.Text>
                    <Form.Text className="text-success">

                    </Form.Text>
                </Form>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Login;