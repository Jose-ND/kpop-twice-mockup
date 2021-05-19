import React from 'react';

import SignUpForm from './signupForm';
import PageTitle from '../pageTitle';


const SignUp = () => {

   
    return (
        <div className='sign-up'>
            {/* alternative navbar */}
            <div className='title-feed-form-wrapper'>
                <PageTitle className='sign-up__page-title' title='Register' />
                <SignUpForm/>
            </div>
        </div>
    )
}




export default SignUp;