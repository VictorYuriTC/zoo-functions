const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

/* Solved with MD's example given in a thread :) */

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

console.log(getEmployeeByName('Nelson'));

module.exports = getEmployeeByName;
