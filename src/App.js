import React, { Component } from 'react';
import logo from './logo.svg';

import Footer from './Footer'
import Home from './Home'
import NovoAnuncio from './NovoAnuncio'
import base from './base'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

  render() {    
    return (
      <Router>
        <div className="App">
          <Route patch='/' exact component={Home} />
          <Route patch='/novo-anuncio' exact component={NovoAnuncio} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App