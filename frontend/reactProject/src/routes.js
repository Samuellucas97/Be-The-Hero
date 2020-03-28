import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import Logon from './pages/Logon';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={NewIncident}/>
                <Route path="/register" component={Register}/>
            </Switch>
        </BrowserRouter>
    );
}