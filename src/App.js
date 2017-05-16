import React, { Component } from 'react';
import MessageInput from './components/MessageInput';
import Messages from './components/Messages';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MessageInput />
        <Messages />
      </div>
    );
  }
}

export default App;
