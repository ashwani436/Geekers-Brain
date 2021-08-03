import React from 'react'
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import Login from '../SplashMovies/Login';
import Movie from '../SplashMovies/Movie';

function Routing() {
    return(
        <div>
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/movie" component={Movie}/>
        </Switch> 
        </BrowserRouter>


        </div>
    )
}

export default Routing;
