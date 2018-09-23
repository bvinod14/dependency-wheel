import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CountDownView from '../components/countDownForm';

class CountDownTimer extends Component {
  render () {
    return (
      <CountDownView />
    )
  }
}

export default CountDownTimer

ReactDOM.render(<CountDownTimer />, document.getElementById('root'));