import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setShopProducts } from '../../actions/shop';
import Navbar from '../mainPanel/navbar';
import ProductComponent from './productComponent'

const Products = () => {
    const products = useSelector(state => state.shop.products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch(error => {
            console.log("error:", error)
        });
        console.log(response);
        dispatch(setShopProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    console.log(products.data);
    return (
        <div>
            <Navbar/>
            {/* products title */}
            
            <ProductComponent/>
            
            {/* footer */}
        </div>
    )
}

export default Products;
