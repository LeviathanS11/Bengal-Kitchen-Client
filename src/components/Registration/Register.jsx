import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import NavigationBar from '../navbar/NavigationBar';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext)
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('password must be 6 character or longer')
            return;
        }


        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset();
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    }
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='form-container'>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className='form-control'>
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" id="" required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="">Password</label>
                        <input type= "password" name="password" id="" required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="">imageURL</label>
                        <input type="text" name="imageURL" id="" required />
                    </div>
                    <input className='btn-submit' type="submit" value="Sign Up" />
                </form>
                <p><small>Already have an Account!!!<Link to='/login'>SignIn </Link></small></p>
                <p className='text-error'>{error}</p>
            </div>
        </div>
    );
};

export default Register;