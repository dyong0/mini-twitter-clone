import React, { Component } from 'react'
import './Tweet.css'

export default class Tweet extends Component {
  render() {
    const {
      username,
      userId,
      tweetedAt,
      content,
      retweetCount,
      heartCount,
    } = this.props

    return (
      <div className="Tweet">
        <header className="Tweet-header">
          <span className="Tweet-header-username">{username}</span>
          <span className="Tweet-header-userId">@{userId}</span>
          <span className="Tweet-header-tweetedAt">{tweetedAt}</span>
        </header>
        <div className="Tweet-body">
          <p>asdfadfasf</p>
        </div>
        <footer className="Tweet-footer">
          <a href="">Retweets: {retweetCount}</a>
          <a href="">Hearts: {heartCount}</a>
        </footer>
      </div>
    )
  }
}
