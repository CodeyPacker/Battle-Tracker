const monsters = [
  {
    name: "abomination",
    set: "marvel",
    power: 14,
    treasure: 4,
    levels: 1,
    abilities:
      "-4 against Hulk. Players in combat with him do not get any combat bonuses from items with a bonus of +3 or less",
    bad: "Lose two levels and discard two cards from your hand"
  },
  {
    name: "absorbing man",
    set: "marvel",
    power: 2,
    treasure: 1,
    levels: 1,
    abilities:
      "If the surface you are playing on is glass: +1, wood: +2, plastic: +4, metal: +8, other (including multiple materials): + 10.",
    bad: "He crushes your stuff. Loses an equipped item"
  },
  {
    name: "aim soldier",
    set: "marvel",
    power: 1,
    treasure: 1,
    levels: 1,
    abilities:
      "+5 against anyone with at least 1,000 gold pieces worth of items in play.",
    bad: "He steals your tech. Discard at least 500 gold pieces worth of items."
  },
  {
    name: "arnim zola",
    set: "marvel",
    power: 4,
    treasure: 2,
    levels: 1,
    abilities: "+2 for each affiliation of the player(s) in combat",
    bad: "Lose your affiliation(s)."
  },
  {
    name: "baron von strucker",
    set: "marvel",
    power: 12,
    treasure: 3,
    levels: 1,
    abilities: "+3 against anyone with no affiliation. -2 against Avengers",
    bad: "Lose at least 1,000 gold pieces worth of items."
  },
  {
    name: "baron zemo",
    set: "marvel",
    power: 16,
    treasure: 4,
    levels: 2,
    abilities:
      "Draw and discard the top two cards of the door deck when he enters combat. He gets +5 for each monster revealed this way",
    bad:
      "Lose your footgear, and the next time you attempt to run away, you automatically fail."
  },
  {
    name: "bullseye",
    set: "marvel",
    power: 2,
    treasure: 1,
    levels: 1,
    abilities:
      "He never misses. Combat bonuses count double for him. He is that good",
    bad: "Lose your armor. If you arent wearing any, lose two levels"
  },
  {
    name: "carnage",
    set: "marvel",
    power: 12,
    treasure: 3,
    levels: 1,
    abilities:
      "+4 against Spider-Friends. -2 against Avengers. May join venom in combat without the use of a wandering monster card.",
    bad: "You are dead and you lose a level."
  }
];

// THE ELEMENTS THAT INFO GETS PRINTED TO
let monsterNameDisplay = document.querySelector('.card__monster--name'),
    monsterPowerDisplay = document.querySelector('.card__monster--power'),
    monsterTreasureDisplay = document.querySelector('.card__monster--treasure'),
    monsterLevelsDisplay = document.querySelector('.card__monster--levels'),
    monsterBadStuffDisplay = document.querySelector('.card__monster--badstuff'),
    monsterAbilitiesDisplay = document.querySelector('.card__monster--abilities'),
    munchkinPowerDisplay = document.querySelector('.print-munchkin-power');

class Munchkin {
  constructor(power) {
  this.power = power;
  }
  modifier(damage){
    this.power += damage;
    munchkinPowerDisplay.innerHTML = `Munchkin power: ${this.power}`;
    return this.power;
  }
 }

 class Monster {
  constructor(details) {
  this.name = details.name;
  this.levels = details.levels;
  this.power = details.power;
  this.bad = details.bad;
  this.abilities = details.abilities;
  this.set = details.set;
  this.treasure = details.treasure;
  }
  modifier(damage){
    this.power += damage
    monsterPowerDisplay.innerHTML = `Level ${this.power}`;
    return this.power;
  }
 }

function createMonster() {
  // DELCARE VARIABLES FOR MONSTER BEING CREATED
  let monsterName = document.querySelector(".monster-name").value.toLowerCase(),
      newMonster = monsters.find(monster => monster.name === monsterName),
      name = newMonster.name,
      levels = newMonster.levels,
      power = newMonster.power,
      bad = newMonster.bad,
      abilities = newMonster.abilities,
      set = newMonster.set,
      treasure = newMonster.treasure;
  // PRINT THE VARIABLES TO THE CARD
  monsterNameDisplay.innerHTML = `${name}`;
  monsterPowerDisplay.innerHTML = `Level ${power}`;
  monsterTreasureDisplay.innerHTML = `${treasure} Treausre`;
  monsterLevelsDisplay.innerHTML = `${levels} Level`;
  monsterBadStuffDisplay.innerHTML = `Bad Stuff: ${bad}`;
  monsterAbilitiesDisplay.innerHTML = `Abilities: ${abilities}`;
  return monster = new Monster({name, levels, power, bad, abilities, set, treasure})
}

function createMunchkin() {
  let power = parseInt(document.querySelector(".munchkin-power").value);
  munchkinPowerDisplay.innerHTML = `Munchkin power: ${power}`;
  return munchkin = new Munchkin(power);
}

const startButton = document.querySelector(".start-battle");
startButton.onclick = function() {
  createMonster();
  createMunchkin();
};

