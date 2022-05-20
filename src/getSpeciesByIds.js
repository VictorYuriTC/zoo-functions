const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length <= 1) {
    return data.species.filter((specie) => specie.id === ids[0]);
  }
}

console.log(getSpeciesByIds('78460a91-f4da-4dea-a469-86fd2b8ccc84'));
module.exports = getSpeciesByIds;
