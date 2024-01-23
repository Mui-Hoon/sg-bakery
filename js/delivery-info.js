function getDateString(aDate) {
  let dd = aDate.getDate();
  let mm = aDate.getMonth() + 1; //January is 0!
  let yyyy = aDate.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return yyyy + "-" + mm + "-" + dd;
}

let today = new Date();
let oneMonthLater = new Date();
oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);

let sToday = getDateString(today);
let sOneMonthLater = getDateString(oneMonthLater);

document.getElementById("date").setAttribute("min", sToday);
document.getElementById("date").setAttribute("max", sOneMonthLater);

function submitForm(event) {
  // event.preventDefault();
  let name = document.getElementById("name").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  console.log(date);
  let message = document.getElementById("finalMessage");
  message.style.opacity = 1;
  let type = localStorage.getItem("type");
  message.innerHTML =
    "Hi " +
    name +
    ", you have ordered " +
    type +
    ", thank you for your order. We will deliver to you on " +
    date +
    " at " +
    time;
  document.getElementById("btnSubmit").disabled = true;
}

//btnSubmit.addEventListener("click", submitForm);
//can either use the click event for the btnSubmit (either the property or add listener)
//document.getElementById("btnSubmit").onclick=submitForm;
//in this case, use preventDefault()

//can also use onsubmit for the form element
//document.getElementById("myForm").onsubmit=submitForm
//document.getElementById("myForm").addEventListener("submit",submitForm)
//the form tag is    <form class="form-horizontal" id="myForm">

//can also use onsubmit for the form in html, in this case, must use return false (not preventDefault())
//<form class="form-horizontal" id="myForm" onsubmit="submitForm(); return false">
//but this means the function call is in html
