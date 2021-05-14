import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { FormInput, BlueButton } from '../formFields';
import Details from '../details';

import history from '../../history';
import axios from 'axios';

let SignInForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();


    const checkLogin = () => {
        axios.post('localhost', {
            
        })
    }


    const onLoginSubmit = e => {
        e.preventDefault();
        console.log({email, password})
        // import action to check input
        setEmail('');
        setPassword('');
    }

    const onChangeEmail = e => {
        const some = e.target.name;
        const emailValue = e.target.value;
        setEmail(emailValue);
        //console.log(some, {some})
    }
    const onChangePassword = e => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
    }

    const links = [
        {
            _id: 0,
            title: 'Not registered? Create account here',
            onClick: () => history.push('/')
        },
        {
            _id: 1,
            title: 'Forgot account email?',
            onClick: () => console.log('forgot email')
        },
        {
            _id: 2,
            title: 'Forgot password?',
            onClick: () => console.log('forgot password')
        }
    ]


    return (

            <form onSubmit={onLoginSubmit} className='sign-in__form sign-in-form'>
                <div className='sign-in-form__email form-input'>
                    <label className='form-input__label'>Email</label>
                    <input
                        type='email'
                        className='form-input__input'
                        name='lol'
                        value={email}
                        onChange={onChangeEmail}
                        placeholder='Email'
                    />
                </div>
                <div className='sign-in-form__password form-input'>
                    <label className='form-input__label'>Password</label>
                    <input 
                        type='password'
                        onChange={onChangePassword}
                        className='form-input__input'
                        name='password'
                        value={password}
                        placeholder='Password'
                    />
                </div>
            
                <div className='sign-in-form__line'></div>
            
                <div className='sign-in-form__login form-button'>
                    <button
                        className='form-button__button form-button__button'
                        type='submit'>
                        Login
                    </button>
                </div>
                
                <Details className='sign-in-form__details' title='QuickLinks' links={links}/>
            </form>  

    )
}


SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;
