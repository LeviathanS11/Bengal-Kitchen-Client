import React, { useContext, useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import NavigationBar from '../navbar/NavigationBar';
import Footer from '../footer/Footer';

const Login = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const { signIn,handleGoogle,handleGithub } = useContext(AuthContext);
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
    const handleGoogleSignIn=()=>{
        handleGoogle(GoogleProvider)
        .then(result=>{
            const loggedUser=result.user;
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const handleGithubSignIn=()=>{
        handleGithub(GithubProvider)
        .then(result=>{
            const loggedUser=result.user;
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSignIn}>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type={show ? "text" : "password"} name="password" id="" required />
                    <p onClick={() => setShow(!show)}><small>
                        {
                            show ? <span>Hide password</span> : <span>show password</span>
                        }
                    </small></p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to this Website!!!<Link to='/signup'>Create New Account</Link></small></p>
            <button onClick={handleGoogleSignIn}>Google login</button>
            <button onClick={handleGithubSignIn}>Github Sign-in</button>
            <p className='text-error'>{error}</p>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Login;