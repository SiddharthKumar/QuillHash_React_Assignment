import React from 'react';
import { Route, Switch } from "react-router-dom";
import Login from '../Component/Core/login/login';
import Home from '../Component/Home/Home';
// import user

class Router extends React.Component {
    state = {
        validUser: false,
    }
    componentWillMount() {
        const ok = false;
        if (ok) {
            this.setState({
                validUser: true,
            });
        }
    }
    render() {
        if (this.state.validUser) {
            return (
                
                <Route path="/login" exact component={Login} />   
              
            );

        } else{
            return (
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
               
            );
        }
    }
}
export default Router;
