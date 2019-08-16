import React, { Component } from 'react'

class SignUp extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="sign_in shadow-sm rounded" style={{width: 25 + 'rem'}}>
                        <div class="sign rounded mt-5">
                            <h3 className="sign-title">Sign-In</h3>
                            <form>
                                <div class="form-group">
                                    <h5>Username</h5>
                                    <input type="text" class="form-control" placeholder="Enter Username" />
                                </div>
                                <div class="form-group">
                                    <h5>Password</h5>
                                    <input type="password" class="form-control" placeholder="Password" />
                                </div>
                                <br/>
                                <button class="btn btn-outline-dark btn-block">Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default SignUp;