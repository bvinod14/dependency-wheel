/**
 * these are the basic fields, user will provide name, gender the rest parameters are 
 * generated programmatically 
 */
function BaseStructure() {
  this.name = '';
  this.id = '';
  this.gender = '';
  this.parentId = '';
  this.marriageId = '';
  this.avatar = '';
  this.children = [];
  this.spouse = '';
  this.spouseId = '';
}

BaseStructure.prototype.userInputs = function(data) {
  this.name = data.name || '';
  this.gender = data.gender || '';
  this.spouse = data.spouse || '';
  this.parentId = data.parentId || '';
} 

BaseStructure.prototype.updateId = function(id) {
  this.id = id;
}

BaseStructure.prototype.updateMarriageId = function(marriageId) {
  this.marriageId = marriageId;
}

BaseStructure.prototype.updateAll = function(data) {
  this.name = data.name || '';
  this.gender = data.gender || '';
  this.spouse = data.spouse || '';
  this.parentId = data.parentId || '';
  this.marriageId = data.marriageId || '';
  this.avatar = data.avatar || '';
  this.children = data.children || [];
  this.spouseId = data.spouseId || '';
}

export default BaseStructure;