import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../styles/App.css'

class Home extends React.Component {
  render() {
    return (
      <div className="home1">
        <BrowserRouter>
          
        </BrowserRouter>
        <p>This is a beatiful Home Page.</p>
        <p>And the url is '/'.</p>
      </div>
    );
  }

}

export default Home;
