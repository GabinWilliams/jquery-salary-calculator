console.log('JS ready');

$(document).ready(handleReady);

function handleReady() {
  console.log('Jquery Ready');

  $('#submitBtn').on('click', addEmployee);

  renderDom(employees);
}// end handleReady

let salaryTotal = 0;

let employees = [
  {
  first: 'Gabin',
  last: 'Williams',
  id: 01,
  title: 'Boss',
  annualSalary: 100000000
},
{
  first: 'Smith',
  last: 'Johnson',
  id: 02,
  title: 'Developer',
  annualSalary: 100000
},

];// end employees

function clearInputs() {

  $('#firstIn').val('')
  $('#lastIn').val('')
  $('#idIn').val('')
  $('#titleIn').val('')
  $('#salaryIn').val('')
}// end clearInputs

function addEmployee() {

  let firstName = $('#firstIn').val().length

  if(firstName > 0) {

  console.log('clicked');

  $('#totalSalary').empty();

  let employee = {

    first: $('#firstIn').val(),
    last: $('#lastIn').val(),
    id: $('#idIn').val(),
    title: $('#titleIn').val(),
    annualSalary: $('#salaryIn').val()
  }

  employees.push(employee);

  $('#table').append(`

    <tr class=" font-semibold">
      <td class="px-4 py-3 border-b border-gray-500">${employee.first}</td>
      <td class="px-4 py-3 border-b border-gray-500">${employee.last}</td>
      <td class="px-4 py-3 border-b border-gray-500">${employee.id}</td>
      <td class="px-4 py-3 border-b border-gray-500">${employee.title}</td>
      <td class="px-4 py-3 border-b border-gray-500">$${employee.annualSalary}</td>
    </tr>
  `)

    salaryTotal += Number(employee.annualSalary);
    console.log(salaryTotal);
    $('#totalSalary').append(`
    ${Number(salaryTotal)}
  `)
    console.log(salaryTotal);
  

  clearInputs();

  }// end if
}// end addEmployee

function renderDom(array) {

  for(let i = 0; i < array.length; i++)
  $('#table').append(`

  <tr class="font-semibold">
    <td class="px-4 py-3 border-b border-gray-500">${array[i].first}</td>
    <td class="px-4 py-3 border-b border-gray-500">${array[i].last}</td>
    <td class="px-4 py-3 border-b border-gray-500">${array[i].id}</td>
    <td class="px-4 py-3 border-b border-gray-500">${array[i].title}</td>
    <td class="px-4 py-3 border-b border-gray-500">$${array[i].annualSalary}</td>
  </tr>
  `)

  $('#totalSalary').append(`
    ${salaryTotal}
  `)
}// end renderDom

