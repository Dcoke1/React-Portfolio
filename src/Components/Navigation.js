import React, { Component } from 'react';
import Headroom from 'react-headroom';
import logo from './assets/logo.svg';



class Navigation extends Component{
    render() {
  return (
    <Headroom id='header'>

      <aside className='subHeader'>
      <img src={logo} className="App-logo" alt="logo" /><span className="App-logo-span">Douglas Coke
      </span></aside>

      <aside className='navBar'>
        <nav>
          <ul className="navLinks circleBehind" >
            <a href='#about'>About</a>
            <a href='#resume'>Resume</a>
            <a href='#projects'>Projects</a>
          </ul>
        </nav>
      </aside>

      </Headroom>
    );
  }
}

export default Navigation;