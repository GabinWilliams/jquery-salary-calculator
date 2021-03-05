console.log('JS ready');

$(document).ready(handleReady);

function handleReady() {
  console.log('Jquery Ready');

  $('#submitBtn').on('click', addEmployee);

  renderDom(employees);
}// end handleReady

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
  let employee = {

    first: $('#firstIn').val(),
    last: $('#lastIn').val(),
    id: $('#idIn').val(),
    title: $('#titleIn').val(),
    annualSalary: $('#salaryIn').val()
  }

  employees.push(employee);

  $('#table').append(`

    <tr class="bg-gray-300 font-semibold">
      <td class="px-4 py-3 border-b border-pink-500">${employee.first}</td>
      <td class="px-4 py-3 border-b border-pink-500">${employee.last}</td>
      <td class="px-4 py-3 border-b border-pink-500">${employee.id}</td>
      <td class="px-4 py-3 border-b border-pink-500">${employee.title}</td>
      <td class="px-4 py-3 border-b border-pink-500">$${employee.annualSalary}</td>
    </tr>
  `)
  clearInputs();
  }// end if
}// end addEmployee

function renderDom(array) {

  for(let i = 0; i < array.length; i++)
  $('#table').append(`

  <tr class="bg-gray-300 font-semibold">
    <td class="px-4 py-3 border-b border-pink-500">${array[i].first}</td>
    <td class="px-4 py-3 border-b border-pink-500">${array[i].last}</td>
    <td class="px-4 py-3 border-b border-pink-500">${array[i].id}</td>
    <td class="px-4 py-3 border-b border-pink-500">${array[i].title}</td>
    <td class="px-4 py-3 border-b border-pink-500">$${array[i].annualSalary}</td>
  </tr>
  `)
}// end renderDom

