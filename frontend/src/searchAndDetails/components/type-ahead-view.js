import React, { Component } from 'react'

class TypeAheadView extends Component {
  render () {
    let searchFor = this.props.searchFor,
    suggestions = this.props.suggestions;
    return (
      <div className="type-ahead-container">
        <ul>
          {
            suggestions.map( (val, index) => {
             return <li key={index} onClick={()=>(searchFor('', val))}>{val}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default TypeAheadView;