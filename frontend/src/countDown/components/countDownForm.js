import React, { Component } from 'react';
import CountDownDisplay from './countDownDisplay';
import { getRemainingTime, getLifeObj } from '../container/helpers';

class CountDownView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalLife: 65,
      birthDate: '',
      timeLeft: '',
      lifeObj: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.setTimer = this.setTimer.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }

  handleInputChange(e) {
    let target = e.target;
    let name = target.name;
    let value = target.value;

    this.setState({[name]: value});
  }

  setTimer(){
    setInterval(() => {
      let updateTime = this.state.timeLeft - 1000;
      let timeObj = getLifeObj(updateTime);
      this.setState({timeLeft:updateTime, lifeObj: timeObj });
    }, 1000)
  }

  updateTime() {
    let remainingTime = getRemainingTime(this.state.birthDate, this.state.totalLife);
    this.setState({timeLeft: remainingTime});

    if(!this.state.timeLeft){
      setTimeout(() => {
        this.setTimer();
      }, 1000);
    }
    
  }

  render () {
    return (
      <div className="container">
        <input placeholder="How many years you want to Live?" 
          type="text"
          name="totalLife"
          value={this.state.totalLife}
          onChange={this.handleInputChange}
        />
        <label>Birth Date</label>
        <input type="date" 
          name="birthDate"
          value={this.state.birthDate}
          onChange={this.handleInputChange} 
        />

        <button onClick={this.updateTime} >Check</button>

        {this.state.timeLeft &&
          <CountDownDisplay {...this.state.lifeObj}/>
        }
      </div>
    )
  }
}

export default CountDownView