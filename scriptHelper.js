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
  // Here is the HTML formatting for our mission target div.
  /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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
  console.log("hello");
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

  const fuelLevelNumberStatus = function (fuelLevel) {
    if (fuelLevel < Number(10000)) {
      return "Low Fuel";
    } else {
      return "Fuel Good";
    }
  };
  const cargoMassNumberStatus = function (cargoLevel) {
    if (cargoLevel > Number(10000)) {
      return "Too Much Cargo";
    } else {
      return "Cargo Good";
    }
  };

  if (fuelLevelNumberStatus === "Low Fuel") {
    // change faultyItems visibility to visible
    // update fuel status saying there is not enough fuel for the trip
  }

  // if (cargoMassNumberStatus === "Too Much Cargo") {
  //   // some code
  // }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
