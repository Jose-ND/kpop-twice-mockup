import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Categories = () => {
    const categories = useSelector(state => state.shop.categories);
    const renderCategories = categories.map(category => {
        const { id, title } = category;
        return (
            <Link to='/' className='square square__item' key={id}>
                <img className='img-card' src='http://via.placeholder.com/400x400'/>
            </Link>
        )
    })

    return (
        <div className='categories-feed'>
            <div className='categories-feed__wrapper'>
                <div className='categories-feed-box'>
                    <h4>categories</h4>
                    <div className='squares-wrapper'>
                        {renderCategories}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;
