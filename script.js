let employees = [];
let employeeId = 1;

document
  .getElementById("add-employee-btn")
  .addEventListener("click", addEmployee);

function addEmployee() {
  const name = document.getElementById("name").value;
  const profession = document.getElementById("profession").value;
  const age = document.getElementById("age").value;
  const message = document.getElementById("message");

  if (!name || !profession || !age) {
    message.textContent = "All fields are required.";
    message.className = "error";
    return;
  }
  const newEmployee = {
    id: employeeId++,
    name: name,
    profession: profession,
    age: parseInt(age),
  };

  employees.push(newEmployee);
  displayEmployees();

  message.textContent = "Employee added successfully!";
  message.className = "success";

  // Reset input fields
  document.getElementById("name").value = "";
  document.getElementById("profession").value = "";
  document.getElementById("age").value = "";
}

function displayEmployees() {
  const employeesList = document.getElementById("employees-list");
  employeesList.innerHTML = "";

  employees.forEach((employee) => {
    const employeeDiv = document.createElement("div");
    employeeDiv.className = "employee-item";

    employeeDiv.innerHTML = `
      <span>${employee.name}, ${employee.profession}, ${employee.age}</span>
      <button class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete</button>
    `;

    employeesList.appendChild(employeeDiv);
  });
}

function deleteEmployee(id) {
  employees = employees.filter((employee) => employee.id !== id);
  displayEmployees();
}
