import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        loading: false,
        userEmail: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    
    onSubmitRegister = () => {
        this.setState({ loading: true });
        const {email, password} = this.state
        const obj = {
            email,
            password
        }

        fetch('https://urbanplotz.herokuapp.com/user/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(result => {
                if(result.token) {
                    this.setState({ registered: true });
                    localStorage.setItem( 'token' , result.token );
                } else{ 
                    this.setState({ message: 'Please Try Again'});
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
                                <h3 className="sign-title">Register</h3>
                                {
                                    this.state.registered && <p className='text-success'>User Registered Successfully, LOGIN</p>
                                }
                                <div>
                                    <div className="form-group">
                                        <h5>Email</h5>
                                        <input
                                            name='email'
                                            onChange={this.handleChange}
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Email" />
                                    </div>
                                    <div className="form-group">
                                        <h5>Password</h5>
                                        <input
                                            name='password'
                                            onChange={this.handleChange}
                                            type="password"
                                            className="form-control"
                                            placeholder="Password" />
                                    </div>
                                    <br />
                                    <p className='text-danger'> {this.state.message} </p>
                                        <button 
                                        disabled={this.state.loading}
                                        onClick={this.onSubmitRegister} 
                                        className="btn btn-outline-dark btn-block">{
                                            this.state.loading ? 'Loading' : 'Register'
                                        }</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.registered && <Redirect to='/dashboard' push /> }
                </div>

        )
    }
}

export default SignUp;