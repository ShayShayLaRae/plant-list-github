import React from 'react';
import Home from './components/Home';
import MyPlants from './components/MyPlants';
import WishList from './components/WishList';
import {Switch, Route} from 'react-router-dom';



export default(
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/myplants' component={MyPlants} />
        <Route path='/wishlist' component={WishList} />
    </Switch>
)
