import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homes from '../pages/Homes'
import Main from '../pages/Main'
import Sell from '../pages/Sell'
import Buy from '../pages/Buy'
import Realtors from '../pages/Realtors'
import Rent from '../pages/Rent'

function Routers() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/homes" component={Homes}/>
            <Route path="/buy" component={Buy}/>
            <Route path="/homes/rent" component={Rent}/>
            <Route path="/realtors" component={Realtors}/>
            <Route path="/sell" component={Sell}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routers
