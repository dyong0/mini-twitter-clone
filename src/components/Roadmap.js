import React, { Component } from 'react'

export default class Roadmap extends Component {
  render() {
    return (
      <div className="Roadmap">
        <ul>
          <li>Cloning Twitter: Home(Timeline), Posting a tweet, Viewing a tweet</li>
          <li>State management(Redux)</li>
          <li>Code splitting</li>
          <li>SSR</li>
          <li>Exporting to native apps (React Native)</li>
        </ul>
      </div>
    )
  }
}