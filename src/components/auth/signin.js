import React from 'react'
import PageTitle from '../pageTitle';

import { useDispatch, useSelector } from 'react-redux';

import SignInForm from './signinForm';


const onSubmit = (values) => {
    console.log(values);
}

let SignIn = () => {
    return (
        <div className='sign-in'>
            {/* alternative navbar  */}
            <div className='title-feed-form-wrapper'>
                {/* signin feedback according to loggedIn status */}
                <PageTitle className='sign-in__page-title' title='Login'/>
                <SignInForm className='sign-in__form' onSubmit={onSubmit} />
            </div>    
        </div>
    )
}





export default SignIn;