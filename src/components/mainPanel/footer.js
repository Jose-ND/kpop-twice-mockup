import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='row-content row'>
                    <div className='footer-col'>
                        <h4>links</h4>
                        <ul>
                            <li><Link to='/' className='link-item link'>home</Link></li>
                            <li><Link to='/shop' className='link-item link'>shop</Link></li>
                            <li><Link to='/contact' className='link-item link'>contact</Link></li>
                            <li><Link to='/about' className='link-item link'>about</Link></li>
                            <li><Link to='/acccount' className='link-item link'>account</Link></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>help</h4>
                        <ul>
                            <li><Link to='/' className='link-item link'>FAQ</Link></li>
                            <li><Link to='/shop' className='link-item link'>shipping</Link></li>
                            <li><Link to='/contact' className='link-item link'>returns</Link></li>
                            <li><Link to='/about' className='link-item link'>privacy policy</Link></li>
                            <li><Link to='/acccount' className='link-item link'>payment options</Link></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>contact</h4>
                        <div className='quick-contact right-side-link'>
                            <Link to='/' className='phone side-detail contact'>
                                <FontAwesomeIcon icon='phone' />
                                <div className='phone-number text'>
                                    1-800-888-8888
                                </div>
                            </Link>
                            <Link to='/' className='email side-detail contact'>
                                <FontAwesomeIcon icon='envelope' className='email'/>
                                <div className='email-text text'>
                                    kpop@kpoptwice.com
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='footer-col'>
                        <h4>follow us</h4>
                        <div className='social-links right-side-link'>
                            <Link to='/' className='side-detail'><FontAwesomeIcon icon={['fab', 'twitter']}/></Link>
                            <Link to='/' className='side-detail'><FontAwesomeIcon icon={['fab', 'ebay']}/></Link>
                            <Link to='/' className='side-detail'><FontAwesomeIcon icon={['fab', 'facebook-f']}/></Link>
                            <Link to='/' className='side-detail'><FontAwesomeIcon icon={['fab', 'instagram']}/></Link>
                        </div>
                    </div>

                </div>
                <div className='row-copyright'>
                    <div className='footer-row'>
                        <div className='right-line'>
                            c 2021 Kpop Twice Inc | All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
