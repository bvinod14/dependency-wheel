/**
 * this will return filtered array
 * @param {Array} dependencyList array of objects
 * @param {Array} searchTerms array of strings
 */
export function getFilteredList(dependencyList, searchTerms) {
  var filteredList = {};


  if (typeof searchTerms === 'object' && searchTerms.length > 0) {
    searchTerms = searchTerms.slice();
  } else {
    return false;
  }

  for (var i = 0; i < dependencyList.length; i++) {

    if (searchTerms.length == 0) {
      break;
    }

    var val = dependencyList[i],
      indexNumber = searchTerms.indexOf(val.name);

    if (indexNumber > -1) {
      searchTerms.splice(indexNumber, 1);
      addOrUpdate(val);
    }

  }

  if(searchTerms.length > 0){
    filteredList['inBuilt'] = searchTerms;
  }

  /**
   * this will add a property or updates the property to filteredList
   * @param {Object} val val object containes 3 properties name, dependecy and belongsTo
   */
  function addOrUpdate(val) {
    if (!filteredList.hasOwnProperty(val.belongsTo)) {
      filteredList[val.belongsTo] = [val.name];
    } else {
      filteredList[val.belongsTo].push(val.name);
    }
  }

  return filteredList;
}

/**
 * this will return the object which is matching the search term
 * @param {Array} dependencyList array of objects
 * @param {String} searchTerm user searched term
 */
export function getSearchDetails(dependencyList, searchTerm) {
  let searchedList = {};

  for (var i = 0; i < dependencyList.length; i++) {
    var val = dependencyList[i];

    if (val.name == searchTerm) {
      searchedList = Object.assign({}, val);
      break;
    }
  }

  return searchedList;
}

export function getFromLocalStorage(name) {
  let val = localStorage.getItem(name);

  try {
    val = JSON.parse(val);
  } catch (err) {
    console.warn(name, 'doesn\'t contain in localstorage');
  }

  return val;
}

export function setToLocalStorage(name,val) {

  if(typeof val === 'object'){
    val = JSON.stringify(val);
  }

  localStorage.setItem(name, val);

  return true;
}

export function getTypeAheadConfig(){
  let config = getFromLocalStorage('config');

  if(config && config.minChar && config.maxSuggestions){
    return config;
  } else {
    config = {
      minChar: 4,
      maxSuggestions: 10
    }

    return config;
  }
}

/**
 * 
 * @param {Array} dependencyList Array of objects
 * @param {String} searchTerm search term string
 */
export function externalFilteredList(dependencyList, searchTerm){

  var filteredList = {}

  if(typeof searchTerm !== 'string') {
    return false;
  }

  for(var i=0; i< dependencyList.length; i++){

    var val = dependencyList[i];

    var indexNumber = val.dependency && val.dependency.length > 0 && val.dependency.indexOf(searchTerm) ;

        indexNumber = indexNumber !== false && indexNumber >= 0 ? indexNumber : -1; 

    if (indexNumber > -1) {
      addOrUpdate(val);
    }

  }

  /**
   * this will add a property or updates the property to filteredList
   * @param {Object} val val object containes 3 properties name, dependecy and belongsTo
   */
  function addOrUpdate(val) {
    if (!filteredList.hasOwnProperty(val.belongsTo)) {
      filteredList[val.belongsTo] = [val.name];
    } else {
      filteredList[val.belongsTo].push(val.name);
    }
  }

  return filteredList;
}