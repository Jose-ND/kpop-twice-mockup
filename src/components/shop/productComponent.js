import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const ProductComponent = () => {
    const products = useSelector(state => state.shop.products);
    const renderProducts = products.map(product => {
        const { id, title, image, price, category } = product;
        return (
            <div className='column' key={id}>
                <Link to={`/shop/category/products/${id}`}>
                    <div className='ui link cards'>
                        <div className='card'>
                            <div className='image'>
                                <img src={image} alt='image'/>
                            </div>
                            <div className='content'>
                                <div className='header'>
                                    {title}
                                </div>  
                                <div className='meta price'>
                                    $ {price}
                                </div>
                                <div className='meta category'>
                                    {category}
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
            {renderProducts}
        </div>
    )
}

export default ProductComponent;
