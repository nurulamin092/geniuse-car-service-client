import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = (e) => {
        navigate('/login')
    }
    return (
        <div className='register-form'>
            <h3>Please Register</h3>
            <form>
                <input type='text' name='name' id='' placeholder='Your Name'></input>
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already Register? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>

        </div>
    );
};

export default Register;