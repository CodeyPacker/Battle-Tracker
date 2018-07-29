var cards = {
  abomination: {
    level: 14
  },
  absorbing: {
    level: 2
  },
  aim: {
    level: 1
  },
  arnimzola: {
    level: 4
  },
  baronvonstrucker: {
    level: 12
  },
  baronzemo: {
    level: 16
  },
  bullseye: {
    level: 2
  },
  carnage: {
    level: 12
  },
  crossbones: {
    level: 4
  },
  doctor: {
    level: 8
  },
  electro: {
    level: 6
  },
  greengoblin: {
    level: 12
  },
  hob: {
    level: 6
  },
  hydra: {
    level: 1
  },
  kang: {
    level: 16
  },
  kingpin: {
    level: 12
  },
  klaw: {
    level: 6
  },
  kraven: {
    level: 4
  },
  lizard: {
    level: 1
  },
  loki: {
    level: 20
  },
  madame: {
    level: 8
  },
  malekith: {
    level: 16
  },
  mandarin: {
    level: 10
  },
  maximus: {
    level: 10
  },
  modok: {
    level: 14
  },
  mysterio: {
    level: 8
  },
  norman: {
    level: 14
  },
  redskull: {
    level: 18
  },
  rhino: {
    level: 6
  },
  sandman: {
    level: 2
  },
  scorpion: {
    level: 1
  },
  shocker: {
    level: 2
  },
  super: {
    level: 6
  },
  taskmaster: {
    level: 8
  },
  leader: {
    level: 4
  },
  unspoken: {
    level: 8
  },
  ultron: {
    level: 18
  },
  venom: {
    level: 10
  },
  vulture: {
    level: 1
  },
  winter: {
    level: 10
  },
  yellow: {
    level: 10
  },
  //WIZARD OF OZ
  black: {
    level: 2
  },
  blinkie: {
    level: 6
  },
  crows: {
    level: 1
  },
  fighting: {
    level: 10
  },
  flutter: {
    level: 1
  },
  generalguph: {
    level: 11
  },
  generaljinjur: {
    level: 16
  },
  gurgles: {
    level: 10
  },
  gwig: {
    level: 7
  },
  hammer: {
    level: 3
  },
  hoppers: {
    level: 9
  },
  horners: {
    level: 9
  },
  invisible: {
    level: 5
  },
  irongiant: {
    level: 13
  },
  jackdaws: {
    level: 1
  },
  kalidah: {
    level: 15
  },
  kingdox: {
    level: 2
  },
  kingkleaverofutensia: {
    level: 5
  },
  kingkrewlofjinxland: {
    level: 17
  },
  limoneag: {
    level: 12
  },
  mombi: {
    level: 11
  },
  nome: {
    level: 3
  },
  oztrich: {
    level: 3
  },
  phanfasms: {
    level: 14
  },
  quox: {
    level: 18
  },
  rigmaroles: {
    level: 1
  },
  royal: {
    level: 4
  },
  scoodlers: {
    level: 2
  },
  nome: {
    level: 20
  },
  yoop: {
    level: 13
  },
  tititi: {
    level: 12
  },
  wheelers: {
    level: 8
  },
  whimsies: {
    level: 7
  },
  wickedwitchoftheeast: {
    level: 8
  },
  wickedwitchofthewest: {
    level: 19
  },
  winged: {
    level: 6
  },
  wolves: {
    level: 4
  }
};
let munchkinModifier = document.getElementsByClassName("munchkin-modifier");

// Methods of this class will be extended by Munchkins and Monsters
class Character {
  constructor({ level }) {}

  modifier(damage) {
    this.level += damage;
    return this.level;
  }
}

class Munchkin extends Character {
  constructor(options) {
    super(options);
    this.name = "Munchkin";
  }

  getLevel() {
    this.level = parseInt(document.querySelector(".munchkin-level").value);
    return this.level;
  }
}

class Monster extends Character {
  constructor(options) {
    super(options);
    this.name;
    this.level;
  }

  getName() {
    this.name = document.querySelector(".monster-name").value;
    return this.name;
  }



  getMonsterLevel() {
    this.level = cards[this.name].level;
    return this.level;
  }
}

const munchkin = new Munchkin({});

const monster = new Monster({});

var startButton = document.querySelector(".start-battle");

startButton.onclick = function() {
  console.log("battle has started");
  munchkin.getLevel();
  monster.getName();
  console.log(monster.name);
  monster.getMonsterLevel();
  document.querySelector(".card").style.display = "block";
};

// let Monster = class {
//     constructor(name, level, modifier, treasure) {
//       this.name = name;
//       this.level = level;
//       this.modifier = modifier;
//       this.treasure = treasure;

//       console.log(this.name + " is level " + this.level + ", and has " + this.treasure + " treasures.")
//     }
//   };

//   const venom = new Monster("Venom", 10, 0, 2);
//   const carnage = new Monster("Carnage", 20, 0, 3);
//   const crows = new Monster("Crows", 1, 0, 1);
