import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            regEmail: '',
            regPass: ''
        }
    }

    onEmailChange = (e) => {
        const { value } = e.target
        this.setState({ regEmail: value })
    }
    onPassChange = (e) => {
        const { value } = e.target
        this.setState({ regPass: value })
    }

    
    onSubmitRegister = () => {
        const {loadUser,}  = this.props
        fetch('http://localhost:6530/user/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.regEmail,
                password: this.state.regPass
            })
        })
            .then(response => response.json())
            .then(user => {
                loadUser(user);
                const authButton = withRouter(({history}) => {
                    user ? (
                    history.push('/signin')
                    ) : 
                    alert('cannot register')
                })
            })
    }

    render() {
        return (
            <div>
                <div className="container-fluid sign-box">
                        <div className="sign_in shadow rounded" style={{ width: 25 + 'rem', backgroundColor: 'white' }}>
                            <div className="sign rounded mt-5">
                                <h3 className="sign-title">Register</h3>
                                <div>
                                    <div className="form-group">
                                        <h5>Email</h5>
                                        <input
                                            onChange={this.onEmailChange}
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Email" />
                                    </div>
                                    <div className="form-group">
                                        <h5>Password</h5>
                                        <input
                                            onChange={this.onPassChange}
                                            type="password"
                                            className="form-control"
                                            placeholder="Password" />
                                    </div>
                                    <br />
                                        <button 
                                        onClick={this.onSubmitRegister} 
                                        className="btn btn-outline-dark btn-block"> 
                                        Register</button>
        

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}

export default SignUp;