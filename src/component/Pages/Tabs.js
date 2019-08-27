import React, {Component} from 'react'
import Tabs from 'react-bootstrap/Tabs'
import SignIn from './SignIn'
import SignUp from './Register'

class Tab extends Component {
    render(){
        return(
            <div>
                <Tabs defaulActiveKey="register" transition={false} id="uncontrolled-tab-example">
                    <Tab eventKey="log" title="Log In">
                        <SignIn/>
                    </Tab>
                    <Tab eventKey="register" title="Register">
                        <SignUp/>
                        </Tab>
                </Tabs>
            </div>
        )
    }
}
export default Tab;