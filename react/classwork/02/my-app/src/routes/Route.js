import React from 'react';
import {Switch, Route } from 'react-router-dom';
import App from '../App'

export default function Router(){
    return (
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
    )
}