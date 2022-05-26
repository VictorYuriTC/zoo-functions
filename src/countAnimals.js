const data = require('../data/zoo_data');

function countAnimals(animal) {
  const allAnimals = {};
  if (animal === undefined) {
    return data.species.map((specie) => (`${specie.name}: ${specie.popularity}`));
  }
  const showMe = { allAnimals };
  return showMe;
}

console.log(countAnimals());

module.exports = countAnimals;
