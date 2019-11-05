import React, { Component } from 'react';
import './login.css';

// user list
import users from '../Users.json';
const userList = users.userList;

export class login extends Component {
    state = {
        eMail: "",
        password: "",
        rememberMe: false,
        showErrorMsg: false,
        errorMsg: "",
    }

    /**
    * State Change Handler
    */
    handleStateChange = (type) => (event) => {
        let value = null;
        switch (type) {
            case "eMail":
                value = event.target.value;
                break;
            case "password":
                value = event.target.value;
                break;
            case "rememberMe":
                value = !this.state.rememberMe;
                break;
            default:
                value = null;
        }
        if (value != null) {
            this.setState({
                [type]: value,
            });
            if (this.state.showErrorMsg) {
                this.setState({
                    showErrorMsg: false,
                    errorMsg: "",
                });
            }
        }
    }
    /**
    * Login Handler (set token in loacl storage)
    */
    handleLogin = (event) => {
        event.preventDefault();
        userList.map(user => {
            if (user.eMail === this.state.eMail && user.password === this.state.password) {
                localStorage.setItem("token", user.token);
                localStorage.setItem("rememberMe", this.state.rememberMe);
                this.props.history.push("");
            }
            return true;
        });
        this.setState({
            showErrorMsg: true,
            errorMsg: "Username or password is invalid",
        });
    }

    render() {
        const { eMail, password, rememberMe } = this.state;
        return (
            <div className='loginBody'>
                {(this.state.showErrorMsg) ?
                    <>
                        <label htmlFor="exampleInputEmail1" style={{ color: "red" }}>{this.state.errorMsg}</label>                    </>
                    : null
                }
                <form>
                    <h1>Login:</h1>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            value={eMail}
                            onChange={this.handleStateChange("eMail")}
                            required />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={this.handleStateChange("password")}
                            required />
                    </div>
                    <div className="form-group form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            checked={rememberMe ? "checked" : ""}
                            onChange={this.handleStateChange("rememberMe")}
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-warning"
                        onClick={this.handleLogin}
                        style={{ border:'solid #a54b15'}}
                    >Submit</button>
                </form>

            </div>
        )
    }
}

export default login;
