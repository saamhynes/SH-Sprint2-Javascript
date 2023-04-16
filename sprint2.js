fetch("./sprint2.json")
  .then((response) => response.json())
  .then((sprint2) => {
    let animalInfo = "";
    sprint2.forEach((animal) => {
      animalInfo += getStatus(animal) + "<br>";
      console.log(getStatus(animal));
    });

    let animalNames = AnimalNames(sprint2);
    document.getElementById("animal-names").innerHTML = animalNames;

    console.log(getTotalWeight(sprint2));

    let totalWeight = getTotalWeight(sprint2);
    animalInfo += totalWeight;

    document.getElementById("animal-info").innerHTML = animalInfo;
  })
  .catch((error) => {
    console.error(error);
  });

function AnimalNames(animals) {
  let animalNames = "A list of big animals: ";
  animals.forEach(function (animal, index) {
    animalNames += animal.name;
    if (index < animals.length - 1) {
      animalNames += ", ";
    }
  });
  animalNames += ".";
  console.log(animalNames);
  return animalNames;
}

function getStatus(animal) {
  switch (animal.status) {
    case "endangered":
      return `The ${animal.name} is an endangered species.`;
      break;
    case "vulnerable":
      return `The ${animal.name} is a vulnerable species.`;
      break;
    default:
      return `The ${animal.name} is not a concernered species.`;
  }
}

function getTotalWeight(animals) {
  let totalWeight = 0;
  animals.forEach(function (animal) {
    totalWeight += animal.weightLbs;
  });
  return `${totalWeight} is the total weight of all the animals combined.`;
}
