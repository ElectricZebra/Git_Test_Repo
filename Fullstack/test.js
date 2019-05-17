// const addPrototype = {
//   addBattleTag () {
//     return `${this.name}`;
//   }
// };

// const nicksBattleTag = Object.create(addPrototype);
// nicksBattleTag.handle = "Nick@battle.net";
// nicksBattleTag.status = "lord";

// const factoryFunction = (name, status, xp, hoursPlayed) => {
//   return {
//     name,
//     status,
//     xp,
//     hoursPlayed
//   }
// }

// const smokeTrees = factoryFunction("Smoketrees", "main", 300, "too many");
// const someMonk = factoryFunction("Some Monk!", "not played", 2, 999);


const newPrototype = {
  bark() {
    console.log("Ruff, Ruff");
  },
  sleep() {
    console.log("zzzZZZZZzzzz");
  }
};


function puppyFactory (name, breed) {
  const newPuppy = Object.create(newPrototype);
  newPuppy.name = name,
  newPuppy.breed = breed

  return newPuppy;
}
