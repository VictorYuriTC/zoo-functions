const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((accumulator, specie) => (
      { ...accumulator, [specie.name]: specie.residents.length }
    ), '');
  }
  if (animal.specie !== undefined && animal.sex !== undefined) {
    return data.species.find((specie) =>
      specie.name === animal.specie).residents.filter((resident) =>
      resident.sex === animal.sex).length;
  }
  if (animal !== undefined) {
    return data.species.find((specie) => specie.name === animal.specie).residents.length;
  }
}

console.log(countAnimals());

module.exports = countAnimals;
