import React from 'react';
import './Notfound.css';
import { Link } from 'react-router-dom';

const notfound = () =>{
    return (
        <div className ="box">
            <div>
                close !
            </div>
            <p><span>error 404 !</span> sorry page isn't found for one of the reformes.  
            <Link
                to={"/"}
                    style={{ textDecoration: 'none' }}
                >{" Back to HOME"}
            </Link>
                </p>
        </div>
    )
}

export default notfound;