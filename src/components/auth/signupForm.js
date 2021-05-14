// import React from 'react'

// import { reduxForm, Field } from 'redux-form';
// import { FormInput } from '../formFields';


// let SignUpForm = () => {

//     const info = [
//         {
//             _id: 0,
//             title: 'At least 7 characters'
//         },
//         {
//             _id: 1,
//             title: 'At least one number'
//         },
//         {
//             _id: 2,
//             title: 'At least one symbol'
//         }
//     ]


//     return (
//         <form>
//             <Field className='sign-up-form__name'
//                 type='name'
//                 title='Name'
//                 placeholder='Name'
//                 name='name'
//                 component={FormInput}/>
//                 <Field className='sign-up-form__email'
//                 type='email'
//                 title='Email'
//                 placeholder='Email'
//                 name='email'
//                 component={FormInput}/>
//                 <Field className='sign-up-form__password'
//                 type='password'
//                 title='Password'
//                 placeholder='Password'
//                 name='password'
//                 component={FormInput}/>
//                 <Field className='sign-up-form__confirm'
//                 type='password'
//                 title='Confirm Password'
//                 placeholder='Confirm Password'
//                 name='confirm'
//                 component={FormInput}/>

//                 <div className='sign-up-form__line'></div>
//                 <Field className='sign-up-form__login'
//                 onClick={() => history.push('/')}
//                 type='submit'
//                 title='Create Account'
//                 name='login'
//                 component={FormButton}/>
//                 <Field className='sign-up-form__back'
//                 onClick={() => history.push('/')}
//                 type='button'
//                 title='Back'
//                 name='back'
//                 short={true}
//                 component={FormButton}/>
//                 <Details className='sign-up-form__details' title='Password Requirements' info={info}/>
//         </form>
//     )
// }

// SignUpForm = reduxForm({
//     form: 'SignUpForm'
// })(SignUpForm);

// export default SignUpForm;