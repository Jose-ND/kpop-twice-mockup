import React, { Component, useState } from 'react';

import { FormInput, FormButton } from '../formFields';
import Details from '../details';

import { useHistory } from 'react-router-dom';


const SignUpForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const history = useHistory();
    
    // const first_name = [first_name, setFirst_name] = useState('');
    // const last_name = [last_name, setLast_name] = useState('');
    
    const info = [
        {
            _id: 0,
            title: 'At least 6 characters'
        },
        {
            _id: 1,
            title: 'At least one number'
        },
        {
            _id: 2,
            title: 'At least one symbol'
        }
    ]

    const onRegisterSubmit = (e) => {
        e.preventDefault();
        console.log(
            name,
            email,
            password,
            confirmPassword
        )
    }

    const onChangeName = e => {
        const nameValue = e.target.value;
        setName(nameValue)
    }
    const onChangeEmail = e => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        //console.log(some, {some})
    }
    const onChangePassword = e => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
    }
    const onChangeConfirmPassword = e => {
        const confirmPasswordValue = e.target.value;
        setConfirmPassword(confirmPasswordValue);
    }

    return (
        <form onSubmit={onRegisterSubmit} className='sign-up__form sign-up-form'>

            <div className={'sign-up-form__name form-input'}>
                <label className='form-input__label'>Name</label>
                <input
                    className='form-input__input'
                    type='name'
                    placeholder='Name'
                    value={name}
                    onChange={onChangeName}
                />
            </div>

            <div className={'sign-up-form__email form-input'}>
                <label className='form-input__label'>Email</label>
                <input
                    className='form-input__input'
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={onChangeEmail}
                />
            </div>
            
            <div className={'sign-up-form__password form-input'}>
                <label className='form-input__label'>Password</label>
                <input
                    className='form-input__input'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={onChangePassword}
                />
            </div>
            
            <div className={'sign-up-form__confirm form-input'}>
                <label className='form-input__label'>Confirm Password</label>
                <input
                    className='form-input__input'
                    type='password'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={onChangeConfirmPassword}
                />
            </div>

            <div className='sign-up-form__line'></div>

            <div className='sign-up-form__login form-button'>
                <button
                    className='sign-up-form__login form-button__button'
                    type='submit'
                    onClick={() => history.push('/')}
                >
                    Create Account
                </button>
            </div>
            
            <div className='sign-up-form__back form-button'>
                <button
                    className='form-button__button form-button__gray-button'
                    type='button'
                    onClick={() => history.push('/signin')}
                >
                    Back
                </button>
            </div>
            
            <Details className='sign-up-form__details' title='Password Requirements' info={info}/>
        </form>
    )
    }


export default SignUpForm;