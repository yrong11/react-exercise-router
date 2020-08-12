import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Home from './Home'
import AboutUs from './AboutUs'
import Profile from './Profile'

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <nav className="header">
            <ul><li><NavLink className="link" exact to="/about-us" activeClassName="selected">About Us</NavLink></li>
              <li><NavLink className="link" exact to="/my-profile" component={Profile} activeClassName="selected">My Profile</NavLink></li>
              <li><NavLink className="link" exact to="/" component={Home} activeClassName="selected">Home</NavLink></li></ul>
          </nav>

          <switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/my-profile" component={Profile}></Route>
            <Route path="/about-us" component={AboutUs}></Route>
          </switch>
        </BrowserRouter>
      </div>

    );
  }

}


export default App;
