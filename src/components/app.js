import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Icons from '../helpers/icons';
import axios from 'axios';

import NoMatch from './pages/no-match';
import Home from './pages/home';
import Shop from './pages/shop';
import About from './pages/about';
import Contact from './pages/contact';
import Account from './auth/account';
import Signin from './auth/signin';
import Signup from './auth/signup';
import Review from './order/review';
import Products from './shop/products';
import ProductDetail from './shop/productDetail';
import ShopCategory from './shop/shopCategory';



axios.defaults.baseURL = 'http://127.0.0.1:5000/';

function App() {
  Icons();
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/> 
          <Route exact path='/signin' component={Signin}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/shop' component={ShopCategory}/> 
          <Route exact path='/order/review' component={Review}/> 
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/account' component={Account}/>

          {/* <Route exact path='/shop/categories' component={} /> */}
          <Route exact path='/shop/category/products' component={Products} />
          <Route exact path='/shop/category/products/:productId' component={ProductDetail} />
          
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;