const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  if (scheduleTarget !== undefined) {
    const selectedAnimal = data.species.filter((specie) => specie.name === scheduleTarget);
    const selectedAnimalSchedule = selectedAnimal.map((animalInfo) => animalInfo.availability);
    return selectedAnimalSchedule[0];
  }
  if (scheduleTarget === undefined) {
    const officeHour = data.hours;
    const hours = Object.values(officeHour);
    return hours[0];
  }
}

console.log(getSchedule());

module.exports = getSchedule;
