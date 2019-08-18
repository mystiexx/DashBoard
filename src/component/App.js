import React, {Component} from 'react';
import Header from './Nav/Header';
import Header2 from './Nav/Header2';
import Dashboard from './Pages/Dashboard'
import SignUp from './Pages/SignUp'

import './stylesheet/style.css'
import './stylesheet/search-box.css'

const initialState = {
    content: '',
    searchfield: '',
    route: 'signin',
    isSignedin: false
}

class App extends Component{
  constructor (){
    super ()
    this.state = initialState 
  }
  // onSearchChange = (event) => {
	// 	this.setState({searchfield: event.target.value})
     
  onRouteChange = (route) => {
    if (route ==='signin'){
      this.setState({initialState})
    } else if (route === 'dash' || route === 'upload'){
      this.setState({isSignedin: true})
    }
    this.setState({route: route})
  }
	// }
  render(){
    // const filteredContent = this.state.content.filter(content => {
		// 	return content.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
    // }
    
    return(
      <div> 
      {
        this.state.route === 'signin' ?
          <div>
            <Header2 />
            <SignUp onRouteChange={this.onRouteChange}/>
          </div>
        :
          <div>
            <Header onRouteChange={this.onRouteChange}/>
            <Dashboard/>
          </div>
      }
      </div>
    )
  }
}

export default App;
