let requestURL =
  "https://api.data.gov.sg/v1/environment/4-day-weather-forecast";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.send();
request.onload = displayResult;

function displayResult() {
  let resultElement = document.getElementById("web-api-result");
  console.log(resultElement);
  if (request.status == 200) {
    let data = request.response;
    let myObj = JSON.parse(data);
    let item = myObj["items"];
    let forecasts = item[0]["forecasts"]; // forecasts is a collection with 4 day forecasts
    let date = forecasts[0]["date"];
    let forecast = forecasts[0]["forecast"];
    let temperature = forecasts[0]["temperature"];
    let result =
      "Weather forecast for " +
      date +
      ": " +
      forecast +
      " Temperature : " +
      temperature["low"] +
      "(low) to " +
      temperature["high"] +
      "(high)";
    resultElement.innerHTML = result;
    resultElement.style.color = "brown";
    resultElement.style.fontStyle = "italic";
  } else {
    resultElement.innerHTML = "Unable to retrieve weather forecast";
    resultElement.style.color = "red";
    resultElement.style.fontStyle = "italic";
  }
}
