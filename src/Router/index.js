import React from 'react'

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from '../Component/Core/login/login';
import Layout from '../Layout/Layout';
import Notfound from '../Component/Core/Notfound/Notfound';

const index = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Layout} />
                <Route path="/login" exact component={Login} />
                <Route  component={Notfound} />
            </Switch>
        </Router>
    )
}

export default index;
