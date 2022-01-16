const data = require('../data/zoo_data');

const allAnimals = () => {
  const objFinal = {};
  data.species.forEach((animals) => {
    objFinal[animals.name] = animals.residents.length;
  });
  return objFinal;
};

function countAnimals(animal) {
  if (!animal) return allAnimals();

  const specific = data.species.find((animals) => (animals.name === animal.specie)).residents;
  if (Object.keys(animal).length === 2) {
    return specific.filter((anArr) => anArr.sex === animal.sex).length;
  }
  return specific.length;
}

console.log(countAnimals());

module.exports = countAnimals;
