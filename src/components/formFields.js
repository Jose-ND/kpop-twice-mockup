import React from 'react'




//this is the bubble component where we will ask the 
//user for login, registeration, payment, etc input 
export const FormInput = ({ className, title, type, placeholder, input }) => {



    return (
        <div className={`${className} form-input`}>
            <label className='form-input__label'>{title}</label>
            <input className='form-input__input' type={type} placeholder={placeholder} {...input} />
        </div>
    )
}

export const BlueButton = ({ className, type, onClick, title, input }) => {



    return (
        
        <div className={`${className} form-button`}>
            <button
                className={`${className} form-button__button`}
                type={type}
                onClick={onClick}
                {...input}>
                {title}
            </button>
        </div>
        
    )
}

