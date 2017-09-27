import React, { Component } from 'react';
import styles from './button.scss';

export default class Button extends Component {
  constructor() {
    super();
    this.state = {
      count: 2
    }
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <button onClick={this.increment.bind(this)} className={'button '+styles.button}>
        <span className="yellow">
            Button clicked: {this.state.count} times
        </span>
      </button>
    );
  }
}
