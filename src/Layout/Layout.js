import React from 'react'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../Component/Home/Home';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header />
            <Router>
                <Switch>
                    <Route exact path={props.match.path} component={Home} />
                </Switch>
            </Router>
            <Footer />
        </React.Fragment>
    )
}

export default Layout
