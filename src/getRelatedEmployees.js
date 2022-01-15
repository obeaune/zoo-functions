const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((person) => person.managers.some((el) => el === id));
}

function getRelatedEmployees(managerId) {
// se a função retornar !true (ou seja, falsy): throw new Error
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  // se passar, retorna um array com o nome de por quem o/a manager é responsável
  const sub = [];
  data.employees.forEach((person) => {
    if (person.managers.includes(managerId)) sub.push(`${person.firstName} ${person.lastName}`);
  });
  return sub;
}

module.exports = { isManager, getRelatedEmployees };
