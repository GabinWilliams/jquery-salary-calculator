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
let count = 0;
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
  if (firstName > 0 && salary >= 1 && id > 0 && title > 0) {
    console.log("clicked");
    // empties total monthly cost to avoid double numbers
    $("#totalSalary").empty();

    let employee = {
      index: `${count}`,
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
    count++;
    renderDom(employees);
    clearInputs();
  } // end if
} // end addEmployee

function renderDom(array) {
  //clears Dom to kill zombies or double renders
  $("#tbody").html("");
  // use forEach to allow me to use delete later on
  array.forEach((employee) => {
    $("#tbody").append(`

  <tr class=" row font-semibold">
    <td class="px-4 py-3 border-b border-gray-500">${employee.first}</td>
    <td class="px-4 py-3 border-b border-gray-500">${employee.last}</td>
    <td class="px-4 py-3 border-b border-gray-500">${employee.id}</td>
    <td class="px-4 py-3 border-b border-gray-500">${employee.title}</td>
    <td class="px-4 py-3 border-b border-gray-500">$${employee.annualSalary}</td>
    <td class="px-4 py-3 border-b border-gray-500">
    <button class="deleteBtn bg-transparent text-red-600 font-semibold py-1 px-4 border border-red-300 hover:border-red-700 float-right rounded" data-index=${employee.index}>Delete</>
  </td>
  </tr>
  `);

    $("#totalSalary").empty();

    $("#totalSalary").append(`
    ${Number(salaryTotal)}
  `);
  });
} // end renderDom

function removeEmployee() {
  console.log("delete clicked");

  // targets specific item
  let index = $(this).data("index");
  // deletes that specific employee from array
  let salary = employees[index].annualSalary;

  let value = salary / 12;

  salaryTotal -= Math.round(value);

  

  delete employees[index];

  console.log(employees);
  // renders Dom remove deleted employee
  renderDom(employees);
}
