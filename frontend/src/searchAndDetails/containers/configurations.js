import React, { Component } from 'react';
import { getTypeAheadConfig, setToLocalStorage } from './helper';

class TypeAheadConfigurations extends Component {
  
  constructor(){
    super();

    this.config = getTypeAheadConfig();
    this.state = {
      minChar: this.config.minChar,
      maxSuggestions: this.config.maxSuggestions,
      settingsRevealed: false
    }

    this.handleInputChage = this.handleInputChage.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.toggleSettings = this.toggleSettings.bind(this);
  }

  handleInputChage(event){
    let target = event.target,
      name = target.name,
      value = target.value;

    this.setState({[name]: value});
  }

  updateConfig(){
    let maxSuggestions = this.state.maxSuggestions >= 5 ? this.state.maxSuggestions : 10;
    let minChar = this.state.minChar >= 3 ? this.state.minChar : 4;

    setToLocalStorage('config',
      {maxSuggestions,minChar}
    );

    window.location.reload();
  }

  toggleSettings(){
    this.setState((prevState) =>({settingsRevealed: !prevState.settingsRevealed}));
  }

  render () {
    return (
      <div className={`configuration-container ${this.state.settingsRevealed ? 'reveal': ''}`}>
        <div className="gear-container" onClick={this.toggleSettings}>
          <span className="gear"></span>
        </div>
        { this.state.settingsRevealed &&
          <div className="configurations">
            <div className="field-container">
              <label>Type ahead minimum charecters</label>
              <input type="number" value={this.state.minChar} 
                onChange={this.handleInputChage}
                name="minChar"
              />
            </div>
            <div className="field-container">
              <label>Type ahead Maximum suggestions</label>
              <input type="number" value={this.state.maxSuggestions}
                onChange={this.handleInputChage}
                name="maxSuggestions"
              />
            </div>
            <div className="button-round" onClick={this.updateConfig}>Save</div>
          </div>
        }
      </div>
    )
  }
}

export default TypeAheadConfigurations