import React, { Component } from 'react';
import BaseStructure from '../containers/familyModel';
import { generateId, generateMarriageId} from '../containers/helper';

class FormDataView extends Component {
  constructor(){
    super();

    this.state = {
      name: '',
      gender: '',
      spouse: '',
      parent: '',
      error: false,
      editId: -1
    }

    //
    this.familyData = [];
    this.spouseData = [];
    this.parentData = [];

    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateRequired = this.validateRequired.bind(this);
    this.addToRegistry = this.addToRegistry.bind(this);
    this.resetState = this.resetState.bind(this);
    this.editUserDetails = this.editUserDetails.bind(this);
    this.updateSpouseData = this.updateSpouseData.bind(this);
  }

  handleInputChange(e){

    let target = e.target;
    let name = target.name;
    let value = target.value;
    
    this.setState({ [name]: value });
    
    if(name === 'gender'){
      this.updateSpouseData(value);
    } 

  }

  validateRequired(){
    let isValid = this.state.name && this.state.gender;

    return !!isValid; 
  }

  addToRegistry(){
    let isValid = this.validateRequired();
    if(isValid){
      let userData = new BaseStructure();
      userData.userInputs(this.state);
      if(this.state.editId > -1){
        this.familyData.splice(this.state.editId, 1, userData);
      }else {
        userData.updateId(generateId());
        this.familyData.push(userData);
      }
      this.resetState();
      this.setState({error: false});
    } else {
      this.setState({error: true});
    }

  }

  resetState(){

    this.setState({
      name:'',
      gender: '',
      parent: '',
      spouse: '',
      editId: -1
    });
    this.spouseData = [];
  }

  editUserDetails(index) {
    let data = this.familyData[index];
    let userDetails = {
      name: data.name,
      gender: data.gender,
      spouse: data.spouse,
      parent: data.parent,
      editId: index
    }

    this.setState(userDetails);
  }

  updateSpouseData(gender){
    this.spouseData.length = 0;
    if(this.familyData.length > 0) {
      this.familyData.forEach((val, index) => {

        if(gender != val.gender){

          let obj = {
            name: val.name,
            id: val.id
          }
          this.spouseData.push(obj);
        }
      })
    }

  }


  render () {
    return (
      <div className="container">
      {this.familyData.length > 0 && 
        <DisplayList list={this.familyData} edit={this.editUserDetails} />
      }
      <div className="form-container">
        <div className="form-view">
        { this.state.error &&
          <div>Please provide info for Name and Gender</div>
        }
          <div className="field-full">
            <input type="text" name="name" value={this.state.name} 
              placeholder="Enter name" onChange={this.handleInputChange}
            />
          </div>
          <div className="field-half">
            <label>Gender</label>
            <select type="text" name="gender" value={this.state.gender} 
              onChange={this.handleInputChange}
            >
              <option></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="field-half">
            <label>Spouse</label>
            <select type="text" name="spouse" value={this.state.spouse} 
              onChange={this.handleInputChange}
            >
            <option></option>
            {
              this.spouseData.length > 0 &&
              this.spouseData.map((val, index) => {
                return <option value={val} key={index}>{val.name}</option>
              })
            }
            </select>
          </div>
          <div className="field-full">
            <label>Parent</label>
            <select type="text" name="parent" value={this.state.parent} 
              onChange={this.handleInputChange}
            >
            </select>
          </div>
          <div className="text-center">
            <button type="button" className="button" 
              onClick={this.addToRegistry}
            >Add</button>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default FormDataView

class DisplayList extends Component {

  render(){
    let list = this.props.list;
    let edit = this.props.edit;
    return(
      <div className="list-container">
        <ul className="list-view">
          {
            list.map((value, index) => {

              return (
              <li key={index} 
                onClick={() => edit(index)}>
                {value.name}
              </li>)
            })
          }
        </ul>
      </div>
    )
  }
}