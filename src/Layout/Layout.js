import React, { Component } from 'react'
import Home from '../Component/Home/Home';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

export class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Home/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Layout
