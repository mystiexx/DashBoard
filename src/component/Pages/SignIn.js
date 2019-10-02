import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

 export default class SignIn extends Component {
    state = {
        email: '',
        password: '',
        loading:false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    login = () => {
        this.setState({ loading: true });
        const { email, password } = this.state;
        const obj = {
            email,
            password
        }
        fetch('https://urbanplotz.herokuapp.com/user/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(obj)

        }).then(res => res.json()).then(data => {
            if (data.token) {
                localStorage.setItem('token', data.token);
               this.setState({ loggedIn: true});
               
            } else{ 
                this.setState({ message: 'invalid email/password combination'});
            }
            this.setState({ loading:false });
        }).catch(err => {
            this.setState({ message: 'unexpected error occured', loading:false });
            console.log(err);
        })
    }

    render() {

        return (
            <div>
                <div className="container-fluid sign-box">
                        <div className="sign_in shadow rounded p-4">
                            <div className="sign rounded">
                                <div className="card-body">
                                <h3 className="sign-title">Log-In</h3>
                                <div>
                                    <div className="form-group">
                                        <h5>Email</h5>
                                        <input
                                            onChange={this.handleChange}
                                            name='email'
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Username" />
                                    </div>
                                    <div className="form-group">
                                        <h5>Password</h5>
                                        <input  
                                            onChange={this.handleChange}
                                            type="password"
                                            name='password'
                                            className="form-control"
                                            placeholder="Password" />
                                    </div>
                                    <br />
                                    <p className='text-danger'> {this.state.message} </p>
                                    <button disabled={this.state.loading} onClick={this.login} className="btn btn-outline-dark btn-block" > {this.state.loading ? 'Loading' : 'Log in'}</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.loggedIn && <Redirect to='/dashboard' push /> }
                </div>

        )
    }
}
