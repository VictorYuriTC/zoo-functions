const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const allFirstNames = employees.map((employee) => employee.firstName);
  console.log(allFirstNames);
  const allLastNames = employees.map((employee) => employee.lastName);
  console.log(allLastNames);
  const allNames = [...allFirstNames, ...allLastNames];
  console.log(allNames);
  return allNames.map((name) => name === employeeName);
}

console.log(getEmployeeByName('Nigel'));

module.exports = getEmployeeByName;
