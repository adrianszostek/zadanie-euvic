import Logo from './logo.js';
import './App.css';
import React, { Component } from 'react'
import { Menu, Search, AccountCircle } from '@mui/icons-material'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <div>
            <Menu />
            <div>
              <Search />
              <AccountCircle />
            </div>
          </div>
          <Logo className="logo-graphics" />
        </header>
        <div className='providers'>
        </div>
      </div>
    );
  }
}

export default App;
