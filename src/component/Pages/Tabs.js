import React, {Component} from 'react'
import Tabs from 'react-bootstrap/Tabs'
import SignIn from './SignIn'
import SignUp from './Register'

class Tab extends Component {
    constructor(){
        super();
        this.state = {
            userEmail: ''
        }
    }

    loadUser = (data) => {
        this.setState({userEmail: data.result})
    }

    render(){
        console.log(this.state.userEmail)
        return(
            <div>
                <Tabs defaulactivekey="register" transition={false} id="uncontrolled-tab-example">
                    <Tab eventKey="log" title="Log In">
                        <SignIn loadUser={this.loadUser}/>
                    </Tab>
                    <Tab eventKey="register" title="Register">
                        <SignUp loadUser={this.loadUser}/>
                        </Tab>
                </Tabs>
            </div>
        )
    }
}
export default Tab;