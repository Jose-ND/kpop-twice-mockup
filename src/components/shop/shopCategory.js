import React, { useEffect } from 'react'
import axios from 'axios'
import Navbar from '../mainPanel/navbar'
import CategoryComponent from './categoryComponent'
import { setShopCategories } from '../../actions/shop'
import { useDispatch } from 'react-redux'

const ShopCategory = () => {
    const dispatch = useDispatch();
    const fetchCategories = async () => {
        const response = await axios
            .get('/category')
            .catch(error => {
                console.log(error)
            });
        dispatch(setShopCategories(response.data));

    }

    useEffect(() => {
        fetchCategories();
    }, [])
    return (
        <div>
            <Navbar />
            <CategoryComponent />
        </div>
    )
}

export default ShopCategory;
