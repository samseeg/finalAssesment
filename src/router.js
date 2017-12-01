import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Browse from './components/Browse/Browse';
import Cart from './components/Cart/Cart';
import Shelf from './components/Shelf/Shelf';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/browse' component={Browse} />
        <Route path='/cart' component={Cart} />
        <Route path='/shelf' component={Shelf} />
        <Route path='/details' component={Details} />
        <Route path='/edit' component={Edit} />
    </Switch>
)