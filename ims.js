
let data = [];


function addRow(name, email) {
  const table = document.getElementById("table");
  const newRow = table.insertRow();

  const nameCell = newRow.insertCell();
  nameCell.textContent = name;

  const emailCell = newRow.insertCell();
  emailCell.textContent = email;

  const actionsCell = newRow.insertCell();
  actionsCell.innerHTML = `<button class="edit-btn">Edit</button><button class="delete-btn">Delete</button>`;


  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
}


function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name && email) {
    addRow(name, email);
    data.push({ name, email });
  }
}

function handleEditButtonClick(event) {
  const row = event.target.closest("tr");
  const nameCell = row.cells[0];
  const emailCell = row.cells[1];

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.value = nameCell.textContent;
  nameCell.textContent = "";
  nameCell.appendChild(nameInput);

  const emailInput = document.createElement("input");
  emailInput.type = "text";
  emailInput.value = emailCell.textContent;
  emailCell.textContent = "";
  emailCell.appendChild(emailInput);

  const editButton = row.querySelector(".edit-btn");
  editButton.textContent = "Save";
  editButton.classList.add("save-btn");
  editButton.classList.remove("edit-btn");
}


function handleSaveButtonClick(event) {
  const row = event.target.closest("tr");
  const nameCell = row.cells[0];
  const emailCell = row.cells[1];

  const nameInput = nameCell.querySelector("input");
  const emailInput = emailCell.querySelector("input");

  const newName = nameInput.value;
  const newEmail = emailInput.value;

  nameCell.removeChild(nameInput);
  emailCell.removeChild(emailInput);

  nameCell.textContent = newName;
  emailCell.textContent = newEmail;

  const saveButton = row.querySelector(".save-btn");
  saveButton.textContent = "Edit";
  saveButton.classList.add("edit-btn");
  saveButton.classList.remove("save-btn");
}

function handleDeleteButtonClick(event) {
  const row = event.target.closest("tr");
  const name = row.cells[0].textContent;
  const email = row.cells[1].textContent;

  row.remove();

  data = data.filter((item) => item.name !== name || item.email !== email);
}

function handleSearchInput(event) {
  const searchTerm = event.target.value.toLowerCase();

  const rows = document.querySelectorAll("#table tr");

  rows.forEach((row) => {
    const name = row.cells[0].textContent.toLowerCase();
    const email = row.cells[1].textContent.toLowerCase();

    if (name.includes(searchTerm) || email.includes(searchTerm)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

document.getElementById("form").addEventListener("submit", handleFormSubmit);
document.getElementById("table").addEventListener("click", function (event) {
  if (event.target.classList.contains("edit-btn")) {
    handleEditButtonClick(event);
  } else if (event.target.classList.contains("save-btn")) {
    handleSaveButtonClick(event);
  } else if (event.target.classList.contains("delete-btn")) {
    handleDeleteButtonClick(event);
  }
});
document.getElementById("search").addEventListener("input", handleSearchInput);
