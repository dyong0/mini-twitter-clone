import React, { Component } from 'react'
import { autobind } from 'core-decorators'
import FontAwesome from '@fortawesome/react-fontawesome'
import './Header.css'
import '../shared/common.css'

import Navigation from './Navigation'
import Search from './Search'

@autobind
export default class Header extends Component {
  onTweetClick () {
    console.log('Tweet clicked!')
  }

  onHomeClick() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="Header">
        <div className="Header__container">
          <Navigation className="Header__Navigation" />

          <button className="Header__btn-home" onClick={this.onHomeClick}>
            <FontAwesome icon={['fab', 'twitter']} />
            <span className="hidden-text">Twitter</span>
          </button>

          <div className="Header__extra-right pull-right">
            <Search className="Header__Search"/>

            <div className="Header__profile-pic ">
              <img alt="profile" src="http://i0.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg"/>
            </div>

            <button className="Header__btn-twt" onClick={this.onTweetClick}>Tweet</button>
          </div>
        </div>
      </div>
    )
  }
}