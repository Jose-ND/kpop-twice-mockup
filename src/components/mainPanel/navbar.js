import React, { useState }from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';

const dynamicLinks = [
    {
        text: 'Home',
        link: '/'
    },
    {
        text: 'Shop',
        //link: '/shop'
        link: '/shop'
    },
    {
        text: 'About',
        link: '/about'
    },
    {
        text: 'Contact',
        link: '/contact'
    },

]


function Navbar() {

    const [click, setClick] = useState(false);
    const isLoggedIn = useSelector(state => state.user.user.isLoggedIn)
    const history = useHistory();
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const msg = () => {
        if (!isLoggedIn || isLoggedIn === null) {
            history.push('/signin');
        }
        else if (isLoggedIn) {
            history.push('/account')
        }
        else {
            null;
        }
    }


    return (
        <div className='navbar_container'>
            <div className='left-side'>
                <Link to='/' className='navbar-logo-wrapper'>
                    <div className='temp-logo-text'>KPOP</div>
                    <div className='icon'>
                        <FontAwesomeIcon icon="hand-peace"/>
                        
                    </div>
                </Link>
            </div>

            <div className='right-side'>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? (<FontAwesomeIcon icon='times'/>) : (<FontAwesomeIcon icon='bars'/>)} 
                </div>

                <div className='navbar-links'>
                    <div className={click ? 'nav-menu active' : 'nav-menu'}>
                        {
                            dynamicLinks.map((objLink, index) => {
                                return (
                                    <Link to={objLink.link} key={index} className='navbar-link' onClick={closeMobileMenu}>
                                        {objLink.text}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='navbar-icon-wrapper'>

                    {/* nav to searching functionality */}
                    <Link to='/account' className='icon-item'>
                        <FontAwesomeIcon icon='search'/>
                    </Link>

                    <div onClick={msg} className='icon-item'>
                        <FontAwesomeIcon icon='user'/>
                    </div>
                    
                    {/* nav to viewing items in cart pop-up */}
                    <Link to='/order/review' className='icon-item'>
                        <FontAwesomeIcon icon='shopping-bag'/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;