// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  const missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `
  <h2>Mission Destination</h2>
    <ol>
      <li>Name: ${name} </li>
      <li>Diameter: ${diameter}</li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance}</li>
      <li>Number of Moons: ${moons}</li>
    </ol>
  <img src=${imageUrl}>
  `;
}

function validateInput(testInput) {
  testInput = testInput.trim();
  if (!testInput) {
    return "Empty";
  } else if (isNaN(Number(testInput))) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  //ALERTS - checking data types
  const pilotInputStatus = validateInput(pilot);
  const copilotInputStatus = validateInput(copilot);
  const fuelLevelInputStatus = validateInput(fuelLevel);
  const cargoLevelInputStatus = validateInput(cargoLevel);

  if (
    pilotInputStatus === "Empty" ||
    copilotInputStatus === "Empty" ||
    fuelLevelInputStatus === "Empty" ||
    cargoLevelInputStatus === "Empty"
  ) {
    alert("All fields are required!");
  }

  if (
    pilotInputStatus === "Is a Number" ||
    copilotInputStatus === "Is a Number" ||
    fuelLevelInputStatus === "Not a Number" ||
    cargoLevelInputStatus === "Not a Number"
  ) {
    alert("Make sure to enter valid information for each field!");
  }

  //FAULTY ITEMS

  const faultyItems = document.getElementById("faultyItems");
  // change faultyItems visibility to visible
  faultyItems.style.visibility = "visible";
  //update pilot names
  const pilotLi = document.getElementById("pilotStatus");
  pilotLi.innerText = `${pilot} ready`;
  const copilotLi = document.getElementById("copilotStatus");
  copilotLi.innerText = `${copilot} ready`;

  //if launch is ready
  const launchStatus = document.getElementById("launchStatus");
  launchStatus.innerText = "Shuttle is ready for launch";
  launchStatus.style.color = "#419F6A";

  const fuelLevelNumberStatus = function (fuelLevel) {
    if (Number(fuelLevel) < 10000) {
      return "Low Fuel";
    } else {
      return "Fuel Good";
    }
  };

  const cargoMassNumberStatus = function (cargoLevel) {
    if (Number(cargoLevel) > 10000) {
      return "Too Much Cargo";
    } else {
      return "Cargo Good";
    }
  };

  //if fuel is low
  if (fuelLevelNumberStatus(fuelLevel) === "Low Fuel") {
    console.log("fuel is low");
    // update fuel status saying there is not enough fuel for the trip
    const fuelLi = document.getElementById("fuelStatus");
    fuelLi.innerText = "Fuel level too low for launch";
  }

  //if cargo is high
  if (cargoMassNumberStatus(cargoLevel) === "Too Much Cargo") {
    console.log("cargo too high");
    // update cargo status saying there is too much cargo for the trip
    const cargoLi = document.getElementById("cargoStatus");
    cargoLi.innerText = "Too much mass for the shuttle to take off";
  }

  // if either fuel or cargo is wrong
  if (
    fuelLevelNumberStatus(fuelLevel) === "Low Fuel" ||
    cargoMassNumberStatus(cargoLevel) === "Too Much Cargo"
  ) {
    launchStatus.innerText = "Shuttle not ready for launch";
    launchStatus.style.color = "#C7254E";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  return planets[Math.floor(Math.random() * 6)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
