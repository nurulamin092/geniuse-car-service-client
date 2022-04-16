import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading'
const SocialLogin = () => {
    const [signInWithGoogle, userGoogle, googleLoading, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userFb, fbLoading, errorFb] = useSignInWithFacebook(auth);
    const [signInWithGithub, userGithub, gitLoading, errorGithub] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (errorGoogle) {
        errorElement =
            <div>
                <p className='text-danger'>Error:{errorGoogle?.message}{errorFb?.message}{errorGithub}</p>
            </div>
    }
    if (googleLoading || fbLoading || gitLoading) {
        return <Loading></Loading>
    }
    if (userGoogle || userFb || userGithub) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-3 px-3'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-light w-50 my-2 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>  Google Sign In</span>
                </button>
                <button onClick={() => signInWithFacebook()} className='btn btn-primary w-50 my-2 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>  Facebook Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-info w-50 my-2 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>  Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;