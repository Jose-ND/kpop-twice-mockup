import React from 'react'
import { Link } from 'react-router-dom';


const Categories = () => {
    return (
        <div className='categories-feed'>
            <div className='categories-feed__wrapper'>
                <div className='categories-feed-box'>
                    <h4>categories</h4>
                    <div className='squares-wrapper'>
                        <Link to='/' className='square square__item'>
                            <img className='img-card' src='http://via.placeholder.com/400x400'/>
                        </Link>
                        <Link to='/' className='square sqaure__item'>
                            <img className='img-card' src='../../../static/assets/images/mexican.jpg'/>
                        </Link>
                        <div className='square square__item'>
                            <img className='img-card' src='../../../static/assets/images/albums.jpg'/>
                        </div>
                        <div className='square sqaure__item'>
                            <img className='img-card' src='../../../static/assets/images/albums.jpg'/>
                        </div>
                        <div className='square square__item'>
                            <img className='img-card' src=''/>
                        </div>
                        <div className='square sqaure__item'>
                            <img className='img-card' src=''/>
                        </div>
                        <div className='square square__item'>
                            <img className='img-card' src=''/>
                        </div>
                        <div className='square sqaure__item'>
                            <img className='img-card' src=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;
