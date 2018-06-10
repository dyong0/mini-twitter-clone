import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './Main.css'

import Home from '../home/Home'
import Moments from '../moments/Moments'
import Notifications from '../notifications/Notifications'
import Messages from '../messages/Messages'

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/moments" component={Moments} />
          <Route exact path="/notifications" component={Notifications} />
          <Route exact path="/messages" component={Messages} />
        </Switch>
      </div>
    )
  }
}