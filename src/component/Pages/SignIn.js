import React, {
    Component
} from 'react'
import {
    Link
} from 'react-router-dom';
import DashBoard from './Dashboard';


class SignIn extends Component {
    constructor () {
        super();
        this.state = {
            isAuthenticated: false,
            location: '',
            email: '',
            password: '',
        }
    }

    onEmailChange = (e) => {
        const {value} = e.target;
        this.setState({email : value})
    }
    onPassChange = (e) => {
        const {value} = e.target;
        this.setState({password : value})
    }

    login = () => {
        const {loadUser,}  = this.props
        fetch('http://localhost:6530/user/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                loadUser(data)
                if(data.result) {
                   
                } else {
                    return console.log('error')
                }
            })
    }

    render() {
        let locations = ""
        return ( 
            <div>
            <div className = "container-fluid sign-box" >
            <div className = "sign_in shadow rounded"
            style = {
                {
                    width: 25 + 'rem',
                    backgroundColor: 'white'
                }
            } >
            <div className = "sign rounded mt-5" >
            <h3 className = "sign-title" > Log - In </h3> <div >
            <div className = "form-group" >
            <h5> Username </h5> 
            <input 
                type = "text"
                onChange={this.onEmailChange}
                className = "form-control"
                placeholder = "Enter Username" 
            />
            </div> <div className = "form-group" >
            <h5> Password </h5> 
            <input
                type = "password"
                onChange={this.onPassChange}
                className = "form-control"
                placeholder = "Password"
            />
            </div> <br/>
            <Link to = {locations} >
            <button onClick={this.login} className = "btn btn-outline-dark btn-block" > Log - In </button></Link>
            </div> </div> </div> </div> </div>

        )
    }
}

export default SignIn;