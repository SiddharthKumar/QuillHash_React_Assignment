import React from 'react'

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from '../Component/Core/login/login';
import Home from '../Component/Home/Home';

const index = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </Router>
    )
}

export default index;
