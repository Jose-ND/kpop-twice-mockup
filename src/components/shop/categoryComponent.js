import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CategoryComponent = () => {
    const categories = useSelector(state => state.shop.categories);
    const renderCategories = categories.map(category => {
        const { id, title } = category;
        return (
            <div className='column' key={id}>
                <Link to={`/shop/category/${id}`}>
                    <div className='ui link cards'>
                        <div className='card'>
                            <div className='image'>
                                <img src='http://via.placeholder.com/200x200' alt='image'/>
                            </div>
                            <div className='content'>
                                <div className='header'>
                                    {title}
                                </div>  
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <div className='ui four column doubling stackable grid container'>
            {renderCategories}
        </div>
    )
}

export default CategoryComponent;
