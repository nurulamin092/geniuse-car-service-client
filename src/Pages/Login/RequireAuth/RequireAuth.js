import { async } from '@firebase/util';
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    const handleEmailVerification = async () => {
        await sendEmailVerification();
        toast('Send Email')
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div>
            <h3 className='text-danger'>Your Email is not verified</h3>
            <h4 className='text-info'> Please Verified Your Email Address</h4>
            <button onClick={handleEmailVerification}>Send verification</button>
            <ToastContainer></ToastContainer>
        </div>
    }
    return children;
};

export default RequireAuth;