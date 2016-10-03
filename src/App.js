import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './CommentBox'

class App extends Component {
  render() {
     /* var data = [
          {id: 1, author: "Pete Hunt", text: "This is one comment"},
          {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
      ];*/

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CommentBox url="http://localhost:3001/api/comments" pollInterval={2000} />
      </div>
    );
  }
}

export default App;
