import React, {Component} from 'react';
import Header from './Nav/Header';
import Header2 from './Nav/Header2';
import Dashboard from './Pages/Dashboard'
<<<<<<< Updated upstream
import SignUp from './Pages/SignUp'

=======
import Tab from './Pages/Tabs'
import StoryBoard from './Pages/StoryBoard'
import SearchBar from './Pages/Search'
>>>>>>> Stashed changes
import './stylesheet/style.css'
import './stylesheet/search-box.css'

<<<<<<< Updated upstream
const initialState = {
    content: '',
    searchfield: '',
    route: 'signin',
    isSignedin: false,
    feeds:[],
    users: {
      id: '',
      name: '',
      email: ''
    }
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
    } else if (route === 'upload'){
      this.setState({isSignedin: true})
    }
    this.setState({route: route})
  }

  loadUser = (data) => {
    this.setState({
        users: {
            id: data.id,
            name: data.fullname,
            email: data.email
        }
  
    })
  }
  componentDidMount() {
    fetch('http://localhost:6536/feed')
      .then(res => res.json())
          .then(feeds => {
              this.setState({
                  feeds: feeds
              })
          })
}
	// }
  render(){
=======
class App extends Component {

  render() {
>>>>>>> Stashed changes
    // const filteredContent = this.state.content.filter(content => {
		// 	return content.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
    // }
<<<<<<< Updated upstream
    
    return(
      <div> 
      {
        this.state.route === 'signin' ?
          <div>
            <Header2 />
            <SignUp loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          </div>
        :
          <div>
            <Header onRouteChange={this.onRouteChange}/>
            <Dashboard name={this.state.users.name} feeds={this.state.feeds}/>
          </div>
      }
      </div>
=======

    return (
      <Router>
        <div>

          <Route path="/" exact component={Tab}/>

          <Route path="/dashboard" exact render={props =>
            <div>
               <Header />
              <Dashboard />
            </div>} />

          <Route path="/story" exact render={props =>
            <div> 
              <Header />,
              <SearchBar/>
              <StoryBoard /> </div>} />





        </div>
      </Router>
>>>>>>> Stashed changes
    )
  }
}

export default App;
