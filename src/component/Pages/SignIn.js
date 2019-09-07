import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class SignIn extends Component {

    render() {

        return (
            <div>
                <div className="container-fluid sign-box">
                        <div className="sign_in shadow rounded" style={{ width: 25 + 'rem', backgroundColor: 'white' }}>
                            <div className="sign rounded mt-5">
                                <h3 className="sign-title">Log-In</h3>
                                <div>
                                    <div class="form-group">
                                        <h5>Username</h5>
                                        <input

                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Username" />
                                    </div>
                                    <div class="form-group">
                                        <h5>Password</h5>
                                        <input

                                            type="password"
                                            className="form-control"
                                            placeholder="Password" />
                                    </div>
                                    <br />
                                    <Link to="/dashboard">
                                    <button className="btn btn-outline-dark btn-block">Log-In</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}

export default SignIn;