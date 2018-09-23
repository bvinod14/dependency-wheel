import React, { Component } from 'react'

class CountDownDisplay extends Component {
  render () {
    return (
      <div className="count-down-display">
        <div>
          {this.props.year} Years, 
          {this.props.month} Months,
          {this.props.day} Days
        </div>
        <div>
          {this.props.hours} : {this.props.minutes} : {this.props.seconds}
        </div>
      </div>
    )
  }
}

export default CountDownDisplay;