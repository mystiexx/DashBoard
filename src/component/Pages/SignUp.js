import React, { Component } from 'react'

class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            LogEmail: '',
            LogPassword: ''
        }
    }


    onLogEmailChange = (event) => {
        const { value } = event.target;
        this.setState({
            LogEmail: value
        })
    }
    onLogPasswordChange = (event) => {
        const { value } = event.target;
        this.setState({
            LogPassword: value
        })
    }


    onSubmitSignIn = () => {
        fetch('http://localhost:6536/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
               email: this.state.LogEmail,
               password: this.state.LogPassword 
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id){
                this.props.loadUser(data)
                this.props.onRouteChange('upload')
            } else {
                alert('Invalid Email and Password')
            }
        })
        
    }

    render() {
        const {onRouteChange} = this.props
        return (
            <div>
                <div class="container">
                    <div class="sign_in shadow rounded" style={{width: 25 + 'rem'}}>
                        <div class="sign rounded mt-5">
                            <h3 className="sign-title">Sign-In</h3>
                            <div>
                                <div class="form-group">
                                    <h5>Username</h5>
                                    <input 
                                    onChange={this.onLogEmailChange}
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Enter Username" />
                                </div>
                                <div class="form-group">
                                    <h5>Password</h5>
                                    <input 
                                    onChange={this.onLogPasswordChange}
                                    type="password" 
                                    class="form-control" 
                                    placeholder="Password" />
                                </div>
                                <br/>
                                <button 
                                    onClick={this.onSubmitSignIn}
                                    class="btn btn-outline-dark btn-block">Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default SignUp;