import React, { Component } from 'react';
import Header from './Nav/Header';
import Dashboard from './Pages/Dashboard'
import Tab from './Pages/Tabs'
import StoryBoard from './Pages/StoryBoard'
import './stylesheet/style.css'
import './stylesheet/search-box.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import StoryPage from './Pages/StoryPage';


class App extends Component {

  render() {
    // const filteredContent = this.state.content.filter(content => {
    // 	return content.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
    // }

    return (
      <Router>
        <div>

          <Route path="/" exact component={Tab} />

          <Route path="/dashboard" component={Header}/>

          <Route path="/dashboard" exact component={Dashboard}/>

          <Route path="/story" component={Header}/>

          <Route path="/story" exact component={StoryBoard} />

          <Route path="/stories/:id" component={Header}/>

          <Route path="/stories/:id" exact component={StoryPage}/>





        </div>
      </Router>
    )
  }
}

export default App;
