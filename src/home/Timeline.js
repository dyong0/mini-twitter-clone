import React, { Component } from 'react'
import TweetForm from './TweetForm'
import Tweet from './Tweet'
import dummyTweets from '../dummyTweets'
import './Timeline.css'

export default class Timeline extends Component {
  state = {
    tweets: dummyTweets,
  }

  render() {
    return (
      <ol className="Timeline">
        <TweetForm />
        {this.state.tweets.map((t) => (
          <li className="Timeline__item" key={t.id}>
            <Tweet {...t}/>
          </li>
        ))}
      </ol>
    )
  }
}
