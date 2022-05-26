const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const relatedEmployees = employees.filter((employee) => employee.managers.includes(managerId));
    return relatedEmployees.map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

module.exports = { isManager, getRelatedEmployees };
