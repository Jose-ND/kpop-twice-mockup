import React from 'react'
import PageTitle from '../pageTitle';

import { useDispatch, useSelector } from 'react-redux';

//import { connect } from 'react-redux';

import SignInForm from './signinForm';


const onSubmit = (values) => {
    console.log(values);
}

let SignIn = () => {
    return (
        <div className='sign-in'>
            <PageTitle className='sign-in__page-title' title='Login'/>
            <SignInForm className='sign-in__form' onSubmit={onSubmit}/>
        </div>
    )
}





export default SignIn;