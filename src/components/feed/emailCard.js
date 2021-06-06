import React, { useState } from 'react';
import axios from 'axios';


const EmailCard = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSubscribe = (e) => {
        e.preventDefault();
        setEmail('');
        console.log('button pressed');
        setMessage('Thank you for subscribing!');
        setTimeout(() => {
            setMessage('');
        }, 3000)
    }
    const onChangeEmail = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
    }

    return (
        <div className='card'>
            <div className="card__container">
                <div className="card-content">
                    {message && <div className="alert-message">{message}</div>}
                    <div className="greeting-wrapper card-item text-item">
                        <div className="reminder letra">
                            don't miss your favorite products!
                        </div>
                    </div>
                    <div className="info-text-wrapper card-item text-item">
                        <div className="info-text letra">
                            recieve updates about arrivals and promotions.
                        </div>
                    </div>
                    <form onSubmit={onSubscribe} className="input-btn card-item">
                        <input type="email"
                            className="email-input"
                            placeholder='Email'
                            value={email}
                            onChange={onChangeEmail}
                        />
                        <button type='submit' className="email-btn" disabled={!email}>submit</button>
                    </form>
                </div>
            </div>
        </div>
            

    )
}

export default EmailCard;
