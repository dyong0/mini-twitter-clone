import React, { Component, Fragment } from 'react'
import { autobind } from 'core-decorators'
import './TweetForm.css'

@autobind
class TweetForm extends Component {
  state = {
    active: false
  }

  onFocus() {
    this.setState({
      ...this.state,
      active: true
    })
  }

  onBlur() {
    this.setState({
      ...this.state,
      active: false
    })
  }

  render() {
    return (
      <div className="TweetForm">
        <div className="TweetForm__left-container">
          <img className="TweetForm__profilePic" alt="profile pic" />
        </div>
        <div className="TweetForm__right-container">
          <div className="TweetRichEditor" onClick={this.onFocus} onFocus={this.onFocus} onBlur={this.onBlur}>
            <div className="TweetRichEditor__content">
              {(this.state.active) ? (
                <textarea className="TweetRichEditor__content__textarea" name="content" autoFocus></textarea>
              ) : (
                <Fragment>
                  <p>What's happening?</p>
                  <div className="TweetRichEditor__content__btn-group">
                    <button className="TweetRichEditor__content__photosOrVideo">photos or photo</button>
                    <button className="TweetRichEditor__content__emoji">emoji</button>
                  </div>
                </Fragment>
              )}
            </div>
            {((this.state.active)) ? (
              <div className="TweetRichEditor__menus is-hidden">
                <button className="TweetRichEditor__menus__photosOrVideo">photos or photo</button>
                <button className="TweetRichEditor__menus__gif">gif</button>
                <button className="TweetRichEditor__menus__poll">poll</button>
                <button className="TweetRichEditor__menus__location">location</button>
                <button type="submit" className="TweetRichEditor__menus__submit">submit</button>
              </div>
            ) : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default TweetForm