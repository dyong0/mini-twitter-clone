import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import '@fortawesome/fontawesome-free-regular'
import '@fortawesome/fontawesome-free-solid'
import '@fortawesome/fontawesome-free-brands'
import './App.css'

import Header from './components/Header'
import Main from './components/Main'

import Roadmap from './components/Roadmap'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Main />
          {/* <hr />
          <Roadmap /> */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App