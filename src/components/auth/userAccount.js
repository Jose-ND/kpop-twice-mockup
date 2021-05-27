import React from 'react'
import { useSelector } from 'react-redux';


const UserAccount = () => {
    const some = useSelector(state => state.user.user);
    const { first_name, last_name, email,  } = some;

    return (
        <div className='user-container'>
            <div className='top-container'>
                <div className='image-container'>
                    <img src='http://via.placeholder.com/100x100' alt='profile image' />
                </div>
            </div>
            <div className='bottom-container'>
                <div className='user-name'>
                    <h3>{ first_name } { last_name }</h3>
                </div>
                <div className='info-cards'>
                    <div className='member-status'>
                        <div className='email'>
                            <ul>
                                <li className='ab-email type'>
                                    email:
                                </li>

                                <li className='in-email value'>
                                    {email}
                                </li>
                            </ul>
                        </div>
                        <div className='account-created'>
                            <ul>
                                <li className='ab-account type'>
                                    Account Created:
                                </li>

                                <li className='in-account value'>
                                    12/12/2020
                                </li>
                            </ul>
                        </div>
                        <div className='membership'>
                            <ul>
                                <li className='ab-membership type'>
                                    Membership Level:
                                </li>

                                <li className='in-membership value'>
                                    Gold
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='address'>
                        <div className='street-address'>
                            <ul className='list-container'>
                                <li className='ab-street type'>
                                    Street Addres:
                                </li>

                                <li className='in-street value'>
                                    4443 Tommy Road
                                </li>
                            </ul>
                        </div>
                        <br/>
                        <div className='city'>
                            <ul className='list-container'>
                                <li className='ab-city type'>
                                    City:
                                </li>

                                <li className='in-city value'>
                                    Columbus
                                </li>
                            </ul>
                        </div>
                        <div className='address-details'>
                            <div className='state'>
                                <ul className='list-container'>
                                    <li className='ab-state type'>
                                        State:
                                    </li>

                                    <li className='in-state value'>
                                        OH
                                    </li>
                                </ul>
                            </div>
                            <div className='zipcode'>
                                <ul className='list-container'>
                                    <li className='ab-zipcode type'>
                                        Zipcode:
                                    </li>

                                    <li className='in-zipcode value'>
                                        32104
                                    </li>
                                </ul>
                            </div>
                            <div className='country'>
                                <ul className='list-container'>
                                    <li className='ab-country type'>
                                        Country:
                                    </li>

                                    <li className='in-country value'>
                                        United States
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='account-btns'>
                    <button className='logout-btn'>
                        logout
                    </button>
                    <button className='settings-btn'>
                        settings
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserAccount;
