import React, { Component } from 'react'
import './Home.css';
import Imagebox from '../Home/Imagebox/Imagebox'
export class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <p>this is home Component</p>
                <div className='row'>

                <Imagebox/>
                <Imagebox />
                <Imagebox />
                </div>
            </div>
        )
    }
}

export default Home;
