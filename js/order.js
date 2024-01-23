let pizzatype = [
  { name: "Please select the pizza type", price: 0 },
  { name: "Aloha Chicken", price: 12.5 },
  { name: "Beef Pepperoni", price: 14.2 },
  { name: "Chicken Delight", price: 13.3 },
  { name: "Deluze Cheese", price: 15 },
];

let dropdownBox = document.getElementById("type");
for (index in pizzatype) {
  dropdownBox.options[dropdownBox.options.length] = new Option(
    pizzatype[index]["name"],
    index
  );
}
btnCalc.addEventListener("click", calculatePrice);

let type = "";
let price = 0;
function getPizzaType() {
  let index = document.getElementById("type").selectedIndex;
  if (index === 0) return false;
  type = pizzatype[index]["name"];
  console.log(type);
  price = pizzatype[index]["price"];
  localStorage.setItem("type", type);
  return price;
}

let quantity = 1;
function getQuantity() {
  quantity = document.getElementById("quantity").value;
  price *= quantity;
}

let myForm = document.forms["myForm"];
let pizzaSize = myForm.elements["size"];
let size = "";
function getPizzaSize() {
  for (let i = 0; i < pizzaSize.length; i++) {
    if (pizzaSize[i].checked) {
      size = pizzaSize[i].value;
      break;
    }
  }
  if (size === "medium") {
    price *= 1.5;
  } else {
    if (size === "large") {
      price *= 2;
    }
  }
}

let pizzaCrust = myForm.elements["crust"];
let crust = "";
function getPizzaCrust() {
  for (let i = 0; i < pizzaCrust.length; i++) {
    if (pizzaCrust[i].checked) {
      crust = pizzaCrust[i].value;
      break;
    }
  }
}

let pizzaToppings = myForm.elements["topping"];
let toppings = "";
let numToppings = 0;
function getToppings() {
  toppings = "";
  for (let i = 0; i < pizzaToppings.length; i++) {
    if (pizzaToppings[i].checked) {
      if (toppings.length == 0) toppings = "Toppings=";
      else toppings += ", ";
      toppings += pizzaToppings[i].value;
      numToppings++;
    }
  }
  if (toppings !== "") toppings += "<br>";
  price += 2 * numToppings;
}

let addOnSelection = "";
function getAddons() {
  addOnSelection = "";
  let addOns = document.getElementById("addons");
  for (let i = 0; i < addOns.length; i++) {
    if (addOns[i].selected) {
      if (addOnSelection == "") addOnSelection = "Addons=";
      else addOnSelection += ", ";
      if (i == 0) price += 6;
      else if (i == 1) price += 2.5;
      addOnSelection += addOns[i].value;
    }
  }
  if (addOnSelection !== "") addOnSelection += "<br>";
}

function calculatePrice(event) {
  event.preventDefault();
  let message = "";
  if (getPizzaType() === false) {
    message = "You must select a pizza type";
  } else {
    getQuantity();
    getPizzaSize();
    getPizzaCrust();
    getToppings();
    getAddons();
    message =
      quantity +
      " piece(s) of " +
      size +
      " size " +
      crust +
      " crust " +
      type +
      " Pizza. <br>" +
      toppings +
      addOnSelection +
      "Price: $" +
      price.toFixed(2);
    document.getElementById("btnNext").disabled = false;
  }
  let finalMessage = document.getElementById("outputPrice");
  finalMessage.style.opacity = 1;
  finalMessage.innerHTML = message;
}

function nextForm() {
  window.open("delivery-info.html", "_self");
}

document.getElementById("btnNext").onclick = nextForm;
