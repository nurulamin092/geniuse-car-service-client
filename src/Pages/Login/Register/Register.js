import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';
const Register = () => {
    const [agree, setAgree] = useState(false);
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
        // const agree = e.target.terms.checked;
        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }

    }

    return (
        <div className='register-form'>
            <h3 style={{ textAlign: 'center' }}>Please Register</h3>
            <form onSubmit={handleRegister}>
                <input type='text' name='name' id='' placeholder='Your Name'></input>
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name='terms' id='terms' />
                <label className={agree ? "text-primary" : "text-danger"} htmlFor='terms'>Accept Genius Car Terms and condition</label>
                <input className='btn bg-primary w-50 mx-auto text-white mt-2' type="submit" value="Register" />
            </form>
            <p>Already have a account? <Link to='/login' className='text-primary pe-auto text-decoration-none mt-2' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div >
    );
};

export default Register;