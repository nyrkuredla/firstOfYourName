const _ = require('lodash')
const deaths = [
  { "id": 1, death: "killed by a White Walker", epic: false },
  { "id": 2, death: "executed by Ned Stark", epic: false },
  { "id": 3, death: "thrown out the Moon Door", epic: false },
  { "id": 4, death: "killed by a Stark bannerman", epic: true },
  { "id": 5, death: "burned alive by dragonfire", epic: true },
  { "id": 6, death: "tracked and killed by the Hound", epic: true },
  { "id": 7, death: "split in half by the Mountain", epic: true },
  { "id": 8, death: "killed by hill tribesmen", epic: false },
  { "id": 9, death: "burned to death with a molten crown", epic: true },
  { "id": 10, death: "dragged behind a horse until dead", epic: false },
  { "id": 11, death: "gored by a wild boar", epic: true },
  { "id": 12, death: "stabbed by Arya Stark", epic: false },
  { "id": 13, death: "executed by Ilyn Paine for your crimes against the Crown", epic: true },
  { "id": 14, death: "had your feet cut off by the Goat of Harrenhal", epic: false },
  { "id": 15, death: "had your throat torn out by a Stark direwolf", epic: true },
  { "id": 16, death: "been killed as a bystander at a royal wedding", epic: false },
  { "id": 17, death: "killed by a shadow creature from another realm of existence", epic: true },
  { "id": 18, death: "burned as a sacrifice to the Lord of Light", epic: false },
  { "id": 19, death: "hunted across Westeros and executed by Beric Dondarrion, the Lightning Lord", epic: true },
  { "id": 20, death: "torn to pieces in a Kings Landing riot", epic: false },
  { "id": 21, death: "poisoned by the Tears of Lys", epic: true },
  { "id": 22, death: "flayed alive by the Boltons", epic: false },
  { "id": 23, death: "eaten alive by Ramsey Bolton's dogs", epic: true },
  { "id": 24, death: "found dead after a feast, having drunk yourself to death", epic: false },
  { "id": 25, death: "killed by Bran Stark while warging into Hodor", epic: true },
  { "id": 26, death: "killed after stumbling off the Wall", epic: false },
  { "id": 27, death: "stabbed by the Sword of the Morning", epic: true },
  { "id": 28, death: "stabbed by a Sand Sister", epic: false },
  { "id": 29, death: "torn apart by wights", epic: true },
  { "id": 30, death: "killed by the plague", epic: false }
]

export function getRandomDeath () {
  let randomIndex = _.random(0, deaths.length);
  return deaths[randomIndex];
}
