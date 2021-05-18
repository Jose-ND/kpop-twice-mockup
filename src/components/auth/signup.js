import React from 'react';

import SignUpForm from './signupForm';
import PageTitle from '../pageTitle';


const SignUp = () => {

   
    return (
        <div className='sign-up'>
            <PageTitle className='sign-up__page-title' title='Register' />
            <SignUpForm/>

        </div>
    )
}




export default SignUp;