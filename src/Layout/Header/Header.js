import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Header extends Component {

    /**
    * manage logout button
    */
    logout = () => {
        localStorage.removeItem("rememberMe");
        localStorage.removeItem("token");
        localStorage.removeItem("imagesList");
        sessionStorage.clear();
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <span className="navbar-brand" ><a href="/" style={{ textDecoration: 'none'}}>Quillhash</a></span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                        </ul>
                        <li className="form-inline my-2 my-lg-0">
                            <Link
                                to={"/login"}
                                onClick={this.logout}
                                style={{ textDecoration: 'none' }}
                            >{"Logout"}
                            </Link>
                        </li>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
