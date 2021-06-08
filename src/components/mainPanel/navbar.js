import React, { useEffect, useState }from 'react';
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
    const [button, setButton] = useState(false);
    
    
    const isLoggedIn = useSelector(state => state.user.user.isLoggedIn)
    const history = useHistory();
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const showMobileMenu = () => {
        return (
            <div className='search-mobile mobile-row'>
                <form className="mobile-form search-mobile__form">
                    <input type="text" className="search-mobile__input" placeholder='Search...'/>
                    <div type='submit' className="search-mobile__button search-button">
                        <FontAwesomeIcon icon='search'/>
                    </div>
                </form>
            </div>
        )
    }

    const showMobileAccount = () => {
        return (
            <div className="mobile-account">
                <Link to='/' className="mobile-account__link mobile-row">
                    <div className="text">SIGN IN</div>
                </Link>
            </div>
        )
    }
    

    const showButtons = () => {
        if (window.innerWidth < 769) {
            setButton(true);
        } else {
            setButton(false);
        }
    }

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

    useEffect(() => {
        showButtons();
    }, [])

    window.addEventListener('resize', showButtons);

    return (
        <div className='navbar'>
            <div className="navbar__container">
                <div className="navbar__wrapper">
                    <div className='left-side'>
                        <Link to='/' className='navbar-logo-wrapper' onClick={closeMobileMenu}>
                            <div className='logo'>KPOP</div>
                        </Link>
                    </div>

                    <div className='right-side'>
                        <div className="mobile-menu-icons">
                            <div className='menu-icon' onClick={handleClick}>
                                {click ? (<FontAwesomeIcon icon='times'/>) : (<FontAwesomeIcon icon='bars'/>)} 
                            </div>
                            <div className="menu-icon icon-shopping-bag">
                                <FontAwesomeIcon icon='shopping-bag'/>
                            </div>
                        </div>

                        <div className={click ? 'group-links active' : 'group-links'}>
                            {button && showMobileMenu()}
                            <div className='nav-menu mobile-row'>
                                {button ?
                                    dynamicLinks.map((objLink, index) => {
                                        return (
                                            <Link to={objLink.link} key={index} className='navbar-link' onClick={closeMobileMenu}>
                                                <div className='mobile-text'>
                                                    {objLink.text}
                                                </div>
                                            </Link>
                                        )
                                    })
                                    :
                                    dynamicLinks.map((objLink, index) => {
                                        return (
                                            <Link to={objLink.link} key={index} className='navbar-link' onClick={closeMobileMenu}>
                                                {objLink.text}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                            {button && showMobileAccount()}
                        </div>

                        <div className='navbar-icon-wrapper group-links'>
                            {/* nav to searching functionality */}
                            <Link to='/account' className='icon-search icon-item'>
                                <FontAwesomeIcon icon='search'/>
                            </Link>

                            <div onClick={msg} className='icon-user icon-item'>
                                <FontAwesomeIcon icon='user'/>
                            </div>
                            
                            {/* nav to viewing items in cart pop-up */}
                            <Link to='/order/review' className='icon-cart icon-item'>
                                <FontAwesomeIcon icon='shopping-bag'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;