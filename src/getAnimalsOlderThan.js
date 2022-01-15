const data = require('../data/zoo_data');
// data = object;
// species = array;
// every item in this array is an object;

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((nameAnimal) => nameAnimal.name === animal);
  return animals.residents.every((creature) => creature.age >= age);
}

module.exports = getAnimalsOlderThan;
