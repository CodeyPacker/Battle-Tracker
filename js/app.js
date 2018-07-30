const monsters = [
  { name: 'abomination', power: 14, treasure: 4, levels: 1, abilities: '-4 against Hulk. Players in combat with him do not get any combat bonuses from items with a bonus of +3 or less', bad: 'Lose two levels and discard two cards from your hand', },
  { name: 'absorbing man', power: 2, treasure: 1, levels: 1, abilities: 'If the surface you are playing on is glass: +1, wood: +2, plastic: +4, metal: +8, other (including multiple materials): + 10.', bad: 'He crushes your stuff. Loses an equipped item'},
  { name: 'aim soldier', power: 1, treasure: 1, levels: 1, abilities: '+5 against anyone with at least 1,000 gold pieces worth of items in play.', bad: 'He steals your tech. Discard at least 500 gold pieces worth of items.'},
  { name: 'arnim zola', power: 4, treasure: 2, levels: 1, abilities: '+2 for each affiliation of the player(s) in combat', bad: 'Lose your affiliation(s).'},
  { name: 'baron von strucker', power: 12, treasure: 3, levels: 1, abilities: '+3 against anyone with no affiliation. -2 against Avengers', bad: 'Lose at least 1,000 gold pieces worth of items.'},
  { name: 'baron zemo', power: 16, treasure: 4, levels: 2, abilities: 'Draw and discard the top two cards of the door deck when he enters combat. He gets +5 for each monster revealed this way', bad: 'Lose your footgear, and the next time you attempt to run away, you automatically fail.'},
  { name: 'bullseye', power: 2, treasure: 1, levels: 1, abilities: 'He never misses. Combat bonuses count double for him. He is that good', bad: 'Lose your armor. If you arent wearing any, lose two levels'},
  { name: 'carnage', power: 12, treasure: 3, levels: 1, abilities: '+4 against Spider-Friends. -2 against Avengers. May join venom in combat without the use of a wandering monster card.', bad: 'You are dead and you lose a level.', },
];
let munchkinModifier = document.getElementsByClassName("munchkin-modifier");

// Methods of this class will be extended by Munchkins and Monsters
class Character {
  constructor({ power }) {}

  modifier(damage) {
    this.power += damage;
    return this.power;
  }
}

class Munchkin extends Character {
  constructor(options) {
    super(options);
    this.name = "Munchkin";
  }

  getpower() {
    this.power = parseInt(document.querySelector(".munchkin-power").value);
    return this.power;
  }
}

class Monster extends Character {
  constructor(options) {
    super(options);
    this.name;
    this.power;
    this.monster;
  }

  getName() {
    this.name = document.querySelector(".monster-name").value.toLowerCase();
    return this.name;
  }

  getMonsterpower() {
    this.power = cards[this.name].power;
    return this.power;
  }
}

const munchkin = new Munchkin({});

const monster = new Monster({});

const startButton = document.querySelector(".start-battle");

startButton.onclick = function() {
  console.log("battle has started");
  munchkin.getpower();
  monster.getName();
  console.log(monster.name);
  monster.getMonsterpower();
  document.querySelector(".card").style.display = "block";
};

// let Monster = class {
//     constructor(name, power, modifier, treasure) {
//       this.name = name;
//       this.power = power;
//       this.modifier = modifier;
//       this.treasure = treasure;

//       console.log(this.name + " is power " + this.power + ", and has " + this.treasure + " treasures.")
//     }
//   };

//   const venom = new Monster("Venom", 10, 0, 2);
//   const carnage = new Monster("Carnage", 20, 0, 3);
//   const crows = new Monster("Crows", 1, 0, 1);
