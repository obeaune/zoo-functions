const data = require('../data/zoo_data');

// const p = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  const child = entrants.filter((pessoa) => pessoa.age < 18);
  const adult = entrants.filter((pessoa) => pessoa.age >= 18 && pessoa.age < 50);
  const senior = entrants.filter((pessoa) => pessoa.age >= 50);
  return ({ adult: adult.length, child: child.length, senior: senior.length });
}

function calculateEntry(entrants = {}) {
  if (Object.keys(entrants).length === 0) return 0;

  const person = countEntrants(entrants);
  return (person.adult * data.prices.adult) + (person.child * data.prices.child)
  + (person.senior * data.prices.senior);
}

module.exports = { calculateEntry, countEntrants };
