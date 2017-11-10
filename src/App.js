import React, { Component } from 'react';
import logo from './logo.svg';

import Footer from './Footer'
import Home from './Home'
import base from './base'

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <Home />
        <Footer />
      </div>
    )
  }
}

export default App