const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  if (entrants.length === undefined) {
    return 0;
  }
  if (entrants.length > 0) {
    const allChildsPrice = countEntrants(entrants).child * 20.99;
    const allAdultsPrice = countEntrants(entrants).adult * 49.99;
    const allSeniorsPrice = countEntrants(entrants).senior * 24.99;
    const allEntrantsPrice = allChildsPrice + allAdultsPrice + allSeniorsPrice;
    return allEntrantsPrice;
  }
}

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

console.log(countEntrants(entrants));
console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
