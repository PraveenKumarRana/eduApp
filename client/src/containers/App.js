import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Main from './Main';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  render(){
    return (
      <Router>
        <Navbar isLoggedIn={this.state.loggedIn}/>
        <Main/>
      </Router>
    );
  }
  
}

export default App;
