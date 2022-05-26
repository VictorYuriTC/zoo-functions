const data = require('../data/zoo_data');

function countAnimals(animal) {
  const [id, name, popularity, location, availability, residents] = data.species;
  console.log(id);
  const allAnimals = {};
  if (animal === undefined) {
    return data.species.map((specie) => (`${specie.name}: ${specie.popularity}`));
  }
  const showMe = { allAnimals };
  return showMe;
}

console.log(countAnimals());

module.exports = countAnimals;
