// Write your JavaScript code here!

window.addEventListener("load", function () {
  //SUBMIT BUTTON
  const formSubmitButton = document.getElementById("formSubmit");
  //click event
  formSubmitButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Get user input values
    const pilotName = document.querySelector('input[name="pilotName"]').value;
    const copilotName = document.querySelector(
      'input[name="copilotName"]'
    ).value;
    const fuelLevel = document.querySelector('input[name="fuelLevel"]').value;
    const cargoMass = document.querySelector('input[name="cargoMass"]').value;

    //PLANETS
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse
      .then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
      })
      .then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

        selectedPlanet = pickPlanet(listedPlanets);

        addDestinationInfo(
          document,
          selectedPlanet.name,
          selectedPlanet.diameter,
          selectedPlanet.star,
          selectedPlanet.distance,
          selectedPlanet.moons,
          selectedPlanet.image
        );
      });

    formSubmission(
      document,
      listedPlanets,
      pilotName,
      copilotName,
      fuelLevel,
      cargoMass
    );
  });
});
