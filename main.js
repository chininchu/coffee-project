"use strict";

const allowedRoasts = new Set(["light", "medium", "dark"]);

function renderCoffee(coffee) {
  const coffeeElement = document.createElement("article");
  coffeeElement.className = "coffee";

  const nameElement = document.createElement("h4");
  nameElement.textContent = coffee.name;
  coffeeElement.appendChild(nameElement);

  const roastElement = document.createElement("p");
  roastElement.textContent = coffee.roast;
  coffeeElement.appendChild(roastElement);

  return coffeeElement;
}

function renderCoffees(coffees) {
  const fragment = document.createDocumentFragment();
  coffees.forEach((coffee) => fragment.appendChild(renderCoffee(coffee)));
  return fragment;
}

function updateCoffees() {
  const selectedRoast = roastSelection.value.toLowerCase();
  const searchTerm = inputBox.value.trim().toLowerCase();
  const filteredCoffees = coffees.filter((coffee) => {
    const matchesRoast =
      selectedRoast === "all" || coffee.roast === selectedRoast;
    const matchesName = coffee.name.toLowerCase().includes(searchTerm);
    return matchesRoast && matchesName;
  });

  coffeeList.replaceChildren(renderCoffees(filteredCoffees));
}

const coffees = [
  { id: 1, name: "Light City", roast: "light" },
  { id: 2, name: "Half City", roast: "light" },
  { id: 3, name: "Cinnamon", roast: "light" },
  { id: 4, name: "City", roast: "medium" },
  { id: 5, name: "American", roast: "medium" },
  { id: 6, name: "Breakfast", roast: "medium" },
  { id: 7, name: "High", roast: "dark" },
  { id: 8, name: "Continental", roast: "dark" },
  { id: 9, name: "New Orleans", roast: "dark" },
  { id: 10, name: "European", roast: "dark" },
  { id: 11, name: "Espresso", roast: "dark" },
  { id: 12, name: "Viennese", roast: "dark" },
  { id: 13, name: "Italian", roast: "dark" },
  { id: 14, name: "French", roast: "dark" },
];

const inputBox = document.getElementById("inputbox");
inputBox.addEventListener("input", updateCoffees);

const newCoffeeInput = document.getElementById("new-coffee-name");
const roastSelect = document.getElementById("roast");
const searchForm = document.getElementById("search-form");
const addForm = document.getElementById("add-form");
const roastSelection = document.querySelector("#roast-selection");

newCoffeeInput.addEventListener("input", () => {
  newCoffeeInput.setCustomValidity("");
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateCoffees();
});

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = newCoffeeInput.value.trim();
  const roast = roastSelect.value.toLowerCase();
  const duplicateName = coffees.some(
    (coffee) => coffee.name.toLowerCase() === name.toLowerCase(),
  );

  if (!name || name.length > 80 || !allowedRoasts.has(roast)) {
    newCoffeeInput.setCustomValidity("Enter a coffee name and valid roast.");
    newCoffeeInput.reportValidity();
    return;
  }

  if (duplicateName) {
    newCoffeeInput.setCustomValidity("That coffee already exists.");
    newCoffeeInput.reportValidity();
    return;
  }

  newCoffeeInput.setCustomValidity("");
  const newCoffee = {
    id: Math.max(...coffees.map((coffee) => coffee.id), 0) + 1,
    name,
    roast,
  };
  coffees.push(newCoffee);
  newCoffeeInput.value = "";
  updateCoffees();
});

const coffeeList = document.querySelector("#coffee-list");

coffees.sort((firstCoffee, secondCoffee) => firstCoffee.id - secondCoffee.id);
roastSelection.addEventListener("change", updateCoffees);
updateCoffees();
