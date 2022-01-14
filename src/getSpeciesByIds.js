const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const species = [];
  // verificar se o(s) ID(s) existe(m) e adicioná-lo(s) no array criado anteriormente;
  ids.forEach((id) => species.push(data.species.find((specie) => specie.id === id)));
  return species;
}

module.exports = getSpeciesByIds;
