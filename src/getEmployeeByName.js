const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employee = data.employees.find((person) => person.firstName === employeeName
  || person.lastName === employeeName);
  return (!employee) ? {} : employee;
}

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
