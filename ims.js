let data = [
  { id: 1, name: "Dowee Donut", price: "₱97" },
  { id: 2, name: "Fudgee Bar", price: "₱79" },
  { id: 3, name: "ALibaba", price: "₱29" },
  { id: 4, name: "Bawang na bawang", price: "₱29" },
  { id: 5, name: "Bida", price: "₱29" },
  { id: 6, name: "Maxx", price: "₱59" },
  { id: 7, name: "Snow Bear", price: "₱69" },
  { id: 8, name: "Mentos", price: "₱59" },
  { id: 9, name: "Pancit Canton", price: "₱99" },
  { id: 10, name: "Lucky Me Noodles", price: "₱89" },

];

// Display the initial data in the table
displayData(data);

// Handle form submission
const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  addData(name, price);
  form.reset();
});

// Handle search input
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", function() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm) ||
    item.price.toLowerCase().includes(searchTerm)
  );
  displayData(filteredData);
});

// Function to add data to the table
function addData(name, price) {
  const id = data.length + 1;
  const newData = { id, name, price };
  data.push(newData);
  displayData(data);
}

// Function to display data in the table
function displayData(data) {
  const table = document.getElementById("table");
  table.innerHTML = `
    <tr>
      <th>Item Name</th>
      <th>Price</th>
      <th></th>
    </tr>
  `;
  data.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>
        <button onclick="editData(${item.id})">Edit</button>
        <button onclick="deleteData(${item.id})">Delete</button>
      </td>
    `;
    table.appendChild(row);
  });
}

// Function to edit data
function editData(id) {
  const item = data.find(item => item.id === id);
  if (item) {
    const name = prompt("Enter new name", item.name);
    const price = prompt("Enter new email", item.price);
    if (name && price) {
      item.name = name;
      item.price = price;
      displayData(data);
    }
  }
}

// Function to delete data
function deleteData(id) {
  const confirmed = confirm("Are you sure you want to delete this item?");
  if (confirmed) {
    data = data.filter(item => item.id !== id);
    displayData(data);
  }
}
