import React, { Component } from 'react'

class DetailsViewer extends Component {
  render () {
    let detailsObj = this.props.dependencyList;
    return (
      <div className='table'>
        {
          Object.keys(detailsObj).map((key, index) => {
            return (<SectionView key={index} head={key} list={detailsObj[key]} 
              searchThis={this.props.searchThis} />
            )
          })
        }
      </div>
    )
  }
}

class SectionView extends Component {
  render () {
    let header = this.props.head,
      list = this.props.list;
    return (
      <div className="section">
      <h3 className="section-header">{header}</h3>
          {
            list.map((val, index) => {
            return <li key={index} onClick={()=>(this.props.searchThis('', val, true))}>{val}</li>
            })
          }
      </div>
    )
  }
}


export default DetailsViewer