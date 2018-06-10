import React, { Component } from 'react'
import Timeline from './Timeline'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home__left-container">
          <img src="/left.png" alt="left container"/>
        </div>
        <div className="Home__right-container">
          <Timeline />
        </div>
      </div>
    )
  }
}

export default Home