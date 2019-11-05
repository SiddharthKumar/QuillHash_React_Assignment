import React, { Component } from 'react'
import Home from '../Component/Home/Home';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

// users
import users from '../Component/Core/Users.json';
const userList = users.userList;

export class Layout extends Component {

    checkValidUser = () => {
        console.log("Check User Athontication");
        const token = localStorage.getItem("token");
        let valid = false;
        userList.map(user => {
            if (user.token === token) {
                valid = true
            }
            return true;
        });
        return valid
    }

    componentDidMount() {
        if (!this.checkValidUser()) {
            this.props.history.push("/login")
        }
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Home />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Layout
