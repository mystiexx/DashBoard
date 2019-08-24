import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class SignIn extends Component {

    render() {

        return (
            <div>
                <div class="container-fluid">
                    <div class="sign-box">
                        <div class="sign_in shadow rounded" style={{ width: 25 + 'rem', backgroundColor: 'white' }}>
                            <div class="sign rounded mt-5">
                                <h3 className="sign-title">Sign-In</h3>
                                <div>
                                    <div class="form-group">
                                        <h5>Username</h5>
                                        <input

                                            type="text"
                                            class="form-control"
                                            placeholder="Enter Username" />
                                    </div>
                                    <div class="form-group">
                                        <h5>Password</h5>
                                        <input

                                            type="password"
                                            class="form-control"
                                            placeholder="Password" />
                                    </div>
                                    <br />
                                    <button

                                        class="btn btn-outline-dark btn-block">Sign In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default SignIn;