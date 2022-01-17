const { employees, species } = require('../data/zoo_data');

function getEmployeesEspecific(busca) {
  const buscaFunci = employees.find((funcionario) =>
    (funcionario.firstName === busca.name)
    || (funcionario.lastName === busca.name)
    || (funcionario.id === busca.id));
  const informacoes = {
    id: buscaFunci.id,
    fullName: `${buscaFunci.firstName} ${buscaFunci.lastName}`,
    species: buscaFunci.responsibleFor.map((animalId) =>
      species.find((specie) => specie.id === animalId).name),
    locations: buscaFunci.responsibleFor.map((animalId) =>
      species.find((specie) => specie.id === animalId).location),
  };
  return informacoes;
}

function getEmployeesCoverage(buscaGeral) {
  if (!buscaGeral) {
    const lista = [];
    employees.forEach((func) =>
      lista.push(getEmployeesEspecific({ name: func.firstName })));
    return lista;
  }
  try {
    return getEmployeesEspecific(buscaGeral);
  } catch (error) {
    throw new Error('Informações inválidas');
  }
}

module.exports = getEmployeesCoverage;
