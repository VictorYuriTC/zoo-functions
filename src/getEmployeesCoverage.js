const data = require('../data/zoo_data');

function getEmployeeResponsabilities(employeeNameOrId) {
  const selectedEmployee = data.employees.find((employee) =>
    employee.firstName === employeeNameOrId.name
    || employee.lastName === employeeNameOrId.name || employee.id === employeeNameOrId.id);
  if (selectedEmployee === undefined) {
    throw new Error('Informações inválidas');
  }
  const responsabilities = selectedEmployee.responsibleFor.filter((responsability) =>
    responsability);
  return responsabilities;
}

function getResponsabilitiesLocations(employeeNameOrId) {
  const responsabilitiesLocations = data.species.filter((specie) =>
    getEmployeeResponsabilities(employeeNameOrId).includes(specie.id)).map((specie) =>
    specie.location);
  return responsabilitiesLocations;
}

function getResponsabilitiesSpecies(employeeNameOrId) {
  const responsabilitiesSpecies = data.species.filter((specie) =>
    getEmployeeResponsabilities(employeeNameOrId).includes(specie.id)).map((specie) => specie.name);
  return responsabilitiesSpecies;
}

/* Source: https://stackoverflow.com/questions/455338/how-do-i-check-if-an-object-has-a-key-in-javascript */

function getEmployeesCoverage(employeeNameOrId) {
  const employeeObject = employeeNameOrId;
  const species = getResponsabilitiesSpecies(employeeObject);
  const locations = getResponsabilitiesLocations(employeeObject);
  const selectedEmployee = data.employees.find((employee) =>
    employee.firstName === employeeObject.name
      || employee.lastName === employeeObject.name || employee.id === employeeObject.id);
  const fullName = `${selectedEmployee.firstName} ${selectedEmployee.lastName}`;
  const { id } = selectedEmployee;
  return { id, fullName, species, locations };
}

const randomObject = { name: 'Nelson' };

console.log(getEmployeesCoverage(randomObject));

module.exports = getEmployeesCoverage;
