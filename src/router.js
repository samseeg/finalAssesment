import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
// import Browse from './components/Browse/Browse';

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        {/* <Route path='/browse' component={Browse} /> */}
    </Switch>
)