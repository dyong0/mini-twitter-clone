import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import FontAwesome from '@fortawesome/react-fontawesome'
import './Navigation.css'
import '../shared/common.css'

export default class Navigation extends Component {
  render() {
    return (
      <ul className={`Navigation ${this.props.className}`}>
        <li className="Navigation__item home">
          <NavLink exact to="/" activeClassName="is-active">
            <FontAwesome icon="home" className="icon"/>
            <span className="text">Home</span>
          </NavLink>
        </li>
        <li className="Navigation__item moments">
          <NavLink exact to="/moments" activeClassName="is-active">
            <FontAwesome icon="bolt" className="icon"/>
            <span className="text">Moments</span>
          </NavLink>
        </li>
        <li className="Navigation__item notifications">
          <NavLink exact to="/notifications" activeClassName="is-active">
            <FontAwesome icon="bell" className="icon"/>
            <span className="text">Notifications</span>
          </NavLink>
        </li>
        <li className="Navigation__item messages">
          <NavLink exact to="/messages" activeClassName="is-active">
            <FontAwesome icon="envelope" className="icon"/>
            <span className="text">Messages</span>
          </NavLink>
        </li>
      </ul>
    )
  }
}