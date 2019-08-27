import React, { Component } from 'react';
import Header from './Nav/Header';
import Dashboard from './Pages/Dashboard'
import Tab from './Pages/Tabs'
import StoryBoard from './Pages/StoryBoard'
import SearchBar from './Pages/Search'
import './stylesheet/style.css'
import './stylesheet/search-box.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {

  render() {
    // const filteredContent = this.state.content.filter(content => {
    // 	return content.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
    // }

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
    )
  }
}

export default App;
