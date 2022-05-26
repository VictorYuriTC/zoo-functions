const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length <= 1) {
    return data.species.filter((specie) => specie.id === ids[0]);
  }
  if (ids.length > 1) {
    return data.species.filter((specie) => specie.id === ids[0]);
  }
}

console.log(getSpeciesByIds('89be95b3-47e4-4c5b-b687-1fabf2afa274',
  '0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = getSpeciesByIds;
