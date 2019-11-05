import React from 'react'

import Home from '../Component/Home/Home';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header />
            <Home />
            <Footer />
        </React.Fragment>
    )
}

export default Layout
