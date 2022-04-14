import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
const Register = () => {
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='register-form'>
            <h3 style={{ textAlign: 'center' }}>Please Register</h3>
            <form onSubmit={handleRegister}>
                <input type='text' name='name' id='' placeholder='Your Name'></input>
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already have a account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>

        </div >
    );
};

export default Register;