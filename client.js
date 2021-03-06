console.log("JS ready");

$(document).ready(handleReady);

function handleReady() {
  console.log("Jquery Ready");
  // click listeners
  $("#submitBtn").on("click", addEmployee);
  $("#table").on("click", ".deleteBtn", removeEmployee);

  // renders table head to Dom on load
  renderDom(employees);
} // end handleReady

let salaryTotal = 0;
let employees = [];

function clearInputs() {
  $("#firstIn").val("");
  $("#lastIn").val("");
  $("#idIn").val("");
  $("#titleIn").val("");
  $("#salaryIn").val("");
} // end clearInputs

function addEmployee() {
  let firstName = $("#firstIn").val().length;
  let lastName = $("#lastIn").val().length;
  let id = $("#idIn").val().length;
  let title = $("#titleIn").val().length;
  let salary = $("#salaryIn").val();

  // input value validation
  if (firstName > 0 && salary >= 1 && lastName > 0 && id > 0 && title > 0) {
    console.log("clicked");
    // empties total monthly cost to avoid double numbers
    $("#totalSalary").empty();

    let employee = {
      first: $("#firstIn").val(),
      last: $("#lastIn").val(),
      id: $("#idIn").val(),
      title: $("#titleIn").val(),
      annualSalary: $("#salaryIn").val(),
    };
    // push new employee to employees array
    employees.push(employee);

    console.log(employee);

    // calc for monthlySalary number
    let monthlySalary = employee.annualSalary / 12;
    // makes sure answer is number so it adds correctly
    salaryTotal += Number(Math.round(monthlySalary));

    // increments count for unique id on employee

    renderDom(employees);
    clearInputs();
  } // end if
} // end addEmployee

function renderDom(array) {
  //clears Dom to kill zombies or double renders
  $("#tbody").html("");
  // use forEach to allow me to use delete later on
  // array.forEach((employee) => {
  for (let i = 0; i < array.length; i++) {
    $("#tbody").append(`

  <tr class=" row font-semibold">
    <td class="px-4 py-3 border-b border-gray-500">${array[i].first}</td>
    <td class="px-4 py-3 border-b border-gray-500">${array[i].last}</td>
    <td class="px-4 py-3 border-b border-gray-500">${array[i].id}</td>
    <td class="px-4 py-3 border-b border-gray-500">${array[i].title}</td>
    <td class="px-4 py-3 border-b border-gray-500">$${array[i].annualSalary}</td>
    <td class="px-4 py-3 border-b border-gray-500">
    <button class="deleteBtn bg-transparent text-red-600 font-semibold py-1 px-4 border border-red-300 hover:border-red-700 float-right rounded" data-index=${array[i].id}>Delete</>
  </td>
  </tr>
  `);

    $("#totalSalary").empty();

    $("#totalSalary").append(`
    ${Number(salaryTotal)}
  `);
    // });
  }
} // end renderDom

function removeEmployee() {
  console.log("delete clicked");

  // targets specific item

  // deletes that specific employee from array

  for (let i = 0; i < employees.length; i++) {
    let index = Number($(this).data("index"));
    let salary = employees[i].annualSalary;
    let value = salary / 12;

    if (Number(employees[i].id) === Number(index)) {
      console.log(employees[i].id);
      // employees.splice(employees[i]);

      employees.splice(i, 1);

      salaryTotal -= Math.round(value);

      renderDom(employees);
    } // end if
  } // end for
  console.log(employees);
} // end removeEmployee
