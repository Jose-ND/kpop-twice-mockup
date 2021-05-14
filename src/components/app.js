import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/home';
import Shop from './pages/shop';
import About from './pages/about';
import Contact from './pages/contact';
import Account from './pages/account';
import NoMatch from './pages/no-match';

import Icons from '../helpers/icons';
import Signin from './auth/signin';
import Signup from './auth/signup';



function App() {
  Icons();
  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/> 
          <Route path='/shop' component={Shop}/> 
          <Route path='/signin' component={Signin}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/account' component={Account}/>

          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;