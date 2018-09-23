import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FamilyData from './app';
import '../less/index.less';

class FamilyTreeData extends Component {
  render () {
    return (
      <FamilyData/>
    )
  }
}

ReactDOM.render(<FamilyTreeData />, document.getElementById('root'));