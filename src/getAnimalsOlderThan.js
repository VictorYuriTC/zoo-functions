const data = require('../data/zoo_data');

function getAnimalsOlderThan(name, age) {
  const selectedName = data.species.find((specie) => specie.name === name);
  return selectedName.residents.every((resident) => resident.age > age);
}

console.log(getAnimalsOlderThan('lions', 0));

module.exports = getAnimalsOlderThan;
