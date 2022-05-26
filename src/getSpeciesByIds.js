const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  console.log(...ids);
  if (ids.length <= 1) {
    return data.species.filter((specie) => specie.id === ids[0]);
  }
  if (ids.length > 1) {
    return data.species.filter((specie) => ids.includes(specie.id));
  }
}

console.log(getSpeciesByIds('89be95b3-47e4-4c5b-b687-1fabf2afa274',
  'e8481c1d-42ea-4610-8e11-1752cfc05a46'));

module.exports = getSpeciesByIds;
