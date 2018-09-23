import React, { Component } from 'react'
import DetailsViewer from '../components/details-viewer';
import { APIJSON } from '../components/static';
import { getSearchDetails, getFilteredList, getTypeAheadConfig, externalFilteredList } from './helper';
import TypeAheadView from '../components/type-ahead-view';
import TypeAheadConfigurations from './configurations';

class App extends Component {
  constructor(){
    super();

    this.state = {
      searchTerm: '',
      filteredListUpdated: 0,
      suggestions: [],
      backTrace: [],
      toggleSearch: true
    }

    this.filteredList = [];
    this.config = getTypeAheadConfig()

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.updateBackTrace = this.updateBackTrace.bind(this);
    this.lastSearch = this.lastSearch.bind(this);
    this.internalExternalSearch = this.internalExternalSearch.bind(this);
  }

  handleInputChange(e){
    let target = e.target,
    name = target.name,
    value = target.value;

    this.setState({[name]: value});

    if(value.length >= this.config.minChar){
      this.fetchAhead(value);
    } else {
      this.setState({suggestions:[]})
    }
  }

  handleSearch(event, searchTerm, fromDetails){
    let searchFor = searchTerm ? searchTerm : this.state.searchTerm;
    let searchedDetails = getSearchDetails(APIJSON, searchFor);

    if (this.state.toggleSearch) {
      this.filteredList = getFilteredList(APIJSON, searchedDetails.dependency);
    } else {
      this.filteredList = externalFilteredList(APIJSON, searchFor);
    }

    this.setState({suggestions:[], searchTerm: searchFor});

    let backTraceVal = !fromDetails ? searchFor : [this.state.searchTerm, searchFor];
      
    this.updateBackTrace(backTraceVal);

  }

  handleKeyDown(e) {
    if (e.keyCode == 13) {
      this.handleSearch();
    }
  }

  fetchAhead(searchTerm){

    var suggestions = [];
    var searchRegex = new RegExp(searchTerm, 'i');
    for (var i = 0; i < APIJSON.length; i++) {
      var val = APIJSON[i];
      if (val.name.search(searchRegex) > -1) {
        suggestions.push(val.name);
      }

      if (suggestions.length >= this.config.maxSuggestions) {
        break;
      }
    }

    this.setState({suggestions});
  }

  updateBackTrace(lastSearch){
    let oldList = this.state.backTrace.slice();

    if(typeof lastSearch === 'object' && lastSearch.length){
      lastSearch.forEach((val, index) =>{
        if (oldList.indexOf(val) == -1) {
          oldList.push(val)  
        } 
      })

      this.setState({backTrace: oldList});

      return false;
    }

    if(oldList.indexOf(lastSearch) == -1){
      oldList.push(lastSearch);
      this.setState({backTrace: oldList});
    }
  }

  lastSearch(){
    let searchList = this.state.backTrace.slice();
    let lastSearch = searchList.pop();

    if(lastSearch === this.state.searchTerm){
      lastSearch = searchList.pop();
    }
    this.handleSearch('', lastSearch);
    this.setState({backTrace:searchList});
  }

  internalExternalSearch(isInternal){
    this.setState({ toggleSearch: isInternal});
  }

  render () {
    let enableBackTrace = this.state.backTrace.length > 0 && this.state.backTrace[0] != this.state.searchTerm;
    return (
      <div className='Page-container'>
        <TypeAheadConfigurations />
        <div className="search-container">
          <div className="toggle-buttons">
            <div>Dependencies</div>
            <div>
              <button className={`button ${this.state.toggleSearch ? 'selected' : ''}`}
                onClick={() => (this.internalExternalSearch(true))}
                >Internal</button>
              <button className={`button ${!this.state.toggleSearch ? 'selected' : ''}`}
                onClick={() => (this.internalExternalSearch(false))}
                >External</button>
            </div>
          </div>
          <input type="text" name="searchTerm" value={this.state.searchTerm} 
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyDown} 
            placeholder="Search the Dependencies"
          />
        </div>
        { enableBackTrace &&
          <div onClick={this.lastSearch} className="back-button">Back</div>
        }
        { this.state.suggestions.length > 0 &&
          <TypeAheadView searchFor={this.handleSearch} suggestions={this.state.suggestions} />
        }
        <DetailsViewer dependencyList={this.filteredList} searchThis={this.handleSearch}/>
        {
          !this.filteredList &&
          <h2 className='no-search'>There is no dependency for 
            <i> {this.state.searchTerm} </i>
          </h2>
        }
      </div>
    )
  }
}

export default App