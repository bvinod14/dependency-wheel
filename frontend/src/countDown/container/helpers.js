/**
 * List of helper funtions required 
 *  getRemainingTime 
 *    --  this function takes two inputs a) date of birth and b) number of years to live
 *    --  what sould it do?
 *    --  get the currnet date, substract the current date with date of birth this will give the
 *        current age.
 *    --  again substract the current age with the number of years to live, this will give the left out life in 
 *        milliseconds 
 * 
 * 
 *   oneYear is 31556900000 milliseconds
 */

const milliseconds = {
  year: 31556900000,
  month: 2628000000,
  day: 86400000,
  hour: 3600000,
  minute: 60000,
  seconds: 1000
}


export function getRemainingTime(dob,totalYears) {
  let currentDate = new Date();
  let birthDate = new Date(dob);
  let totalYearsInMs = getYearsInMilliseconds(totalYears);
  let remainingYears = totalYearsInMs - (currentDate.valueOf() - birthDate.valueOf());

  return remainingYears;
}

function getYearsInMilliseconds(year) {
  return year * milliseconds.year;
}

export function getLifeObj(milli) {
  var dateFormat = {};
  let divisor = {
    quotient:'',
    remainder:''
  }

  dateFormat.year = getQuotientAndRemainder(milli, milliseconds.year, divisor).quotient;
  dateFormat.month = getQuotientAndRemainder(divisor.remainder, milliseconds.month, divisor).quotient;
  dateFormat.day = getQuotientAndRemainder(divisor.remainder, milliseconds.day, divisor).quotient;
  dateFormat.hours = getQuotientAndRemainder(divisor.remainder, milliseconds.hour, divisor).quotient;
  dateFormat.minutes = getQuotientAndRemainder(divisor.remainder,milliseconds.minute, divisor).quotient;
  dateFormat.seconds = getQuotientAndRemainder(divisor.remainder, milliseconds.seconds, divisor).quotient;

  return dateFormat;
}

function getQuotientAndRemainder(x, y, updateObj) {
  updateObj.quotient = Math.floor(x/y);
  updateObj.remainder = x % y;

  return updateObj;
}