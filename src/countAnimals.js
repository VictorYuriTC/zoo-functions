const data = require('../data/zoo_data');

function countAnimals(animal) {
  const [...residents] = data.species;
  console.log(residents.length);
  if (animal === undefined) {
    return data.species.map((specie) => (
      `${specie.name}: ${specie.residents.length}`
    ));
  }
  if (animal.length === 1) {
    return data.species.filter((specie) => animal.includes(specie.residents));
  }
}

console.log(countAnimals());

module.exports = countAnimals;
