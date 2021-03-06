import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Home />
        <About />
        <Contact />
        <NotFound />
      </div>
    );
  }
}

export default App;
