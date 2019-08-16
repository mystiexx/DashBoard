import React, {Component} from 'react';
import Header from './Nav/Header';
import Dashboard from './Pages/Dashboard'
import './stylesheet/style.css'
import './stylesheet/search-box.css'



class App extends Component{
  // constructor (){
  //   super ()
  //   this.state= {
  //     content: Content,
  //     searchfield: ''
  //   } 
  // }
  // onSearchChange = (event) => {
	// 	this.setState({searchfield: event.target.value})
		 
	// }
  render(){
    // const filteredContent = this.state.content.filter(content => {
		// 	return content.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
    // })
    
    return(
      <div>
       <Header/>,
       <Dashboard/>
        </div>
    )
  }
}

export default App;
