import React, { Component } from 'react';
import Menu from './Menu/Menu';
import Main from './Main/Main.jsx';
import Chat from './Chat/Chat';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className='div_main_container'>
      <Menu/>
      <Main/>
      <Chat/>
    </div>
    )}
}

export default App;
