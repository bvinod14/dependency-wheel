let idsCount = localStorage.getItem('idsCount');
let previousCount = JSON.parse(idsCount);
let ID = previousCount && previousCount.id || 0;
let MarriageID = previousCount && previousCount.marriageID || 0;

export function generateId(){
  return ++ID;
}

export function generateMarriageId(){
  let marriageID = ++ MarriageID;

  return 'M-' + marriageID;
}