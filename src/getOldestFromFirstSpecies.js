const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const selectedEmployee = data.employees.find((employee) => employee.id === id);
  const selectedEmployeeResponsabilities = selectedEmployee.responsibleFor;
  const selectedEmployeeFirstSpecieResidents = data.species.find((specie) =>
    selectedEmployeeResponsabilities.includes(specie.id)).residents.map((resident) => resident);
  const sortingAnimalsByAge = selectedEmployeeFirstSpecieResidents.sort((resident1, resident2) =>
    resident2.age - resident1.age)[0];
  const { name, sex, age } = sortingAnimalsByAge;
  return [name, sex, age];
}

console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;
