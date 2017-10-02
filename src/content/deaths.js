const _ = require('lodash')
const deaths = [
  { "id": 1, death: "killed by a White Walker", level: "low" },
  { "id": 2, death: "executed by Ned Stark", level: "low" },
  { "id": 3, death: "thrown out the Moon Door", level: "low" },
  { "id": 4, death: "killed by a Stark bannerman", level: "high" },
  { "id": 5, death: "burned alive by dragonfire", level: "high" },
  { "id": 6, death: "tracked and killed by the Hound", level: "high" },
  { "id": 7, death: "split in half by the Mountain", level: "high" },
  { "id": 8, death: "killed by hill tribesmen", level: "low" },
  { "id": 9, death: "burned to death with a molten crown", level: "high" },
  { "id": 10, death: "dragged behind a horse until dead", level: "low" },
  { "id": 11, death: "gored by a wild boar", level: "high" },
  { "id": 12, death: "stabbed by Arya Stark", level: "low" },
  { "id": 13, death: "executed by Ilyn Paine for your crimes against the Crown", level: "high" },
  { "id": 14, death: "had your feet cut off by the Goat of Harrenhal", level: "low" },
  { "id": 15, death: "had your throat torn out by a Stark direwolf", level: "high" },
  { "id": 16, death: "been killed as a bystander at a royal wedding", level: "low" },
  { "id": 17, death: "killed by a shadow creature from another realm of existence", level: "high" },
  { "id": 18, death: "burned as a sacrifice to the Lord of Light", level: "low" },
  { "id": 19, death: "hunted across Westeros and executed by Beric Dondarrion, the Lightning Lord", level: "high" },
  { "id": 20, death: "torn to pieces in a Kings Landing riot", level: "low" },
  { "id": 21, death: "poisoned by the Tears of Lys", level: "high" },
  { "id": 22, death: "flayed alive by the Boltons", level: "low" },
  { "id": 23, death: "eaten alive by Ramsey Bolton's dogs", level: "high" },
  { "id": 24, death: "found dead after a feast, having drunk yourself to death", level: "low" },
  { "id": 25, death: "killed by Bran Stark while warging into Hodor", level: "high" },
  { "id": 26, death: "killed after stumbling off the Wall", level: "low" },
  { "id": 27, death: "stabbed by the Sword of the Morning", level: "high" },
  { "id": 28, death: "stabbed by a Sand Sister", level: "low" },
  { "id": 29, death: "torn apart by wights", level: "high" },
  { "id": 30, death: "killed by the plague", level: "low" }
]

let highLevelDeaths = deaths.filter(function(death) {
  return death.level == "high";
})

let lowLevelDeaths = deaths.filter(function(death) {
  return death.level == "low";
})

function getRandomHighDeath () {
  let randomIndex = _.random(0, highLevelDeaths.length);
  return highLevelDeaths[randomIndex];
}

function getRandomLowDeath () {
  let randomIndex = _.random(0, lowLevelDeaths.length);
  return lowLevelDeaths[randomIndex];
}

console.log(getRandomLowDeath());
console.log(getRandomHighDeath());
