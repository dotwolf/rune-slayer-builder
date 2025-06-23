import { Item, Weapon, Armor, Head, Chest, Boots, Offhand, Shield, Sash, Ring, Lamp, Back } from './types.js';

const itemsDatabaseHead = {
  CottonHeadband: new Head({
    name: 'Cotton Headband',
    stats: {
      strength: 1
    },
    armor: 30,
    type: 'light'
  }),

  CottonHat: new Head({
    name: 'Cotton Hat',
    stats: {
      intellect: 1
    },
    armor: 15,
    type: 'light'
  }),

  FlaxHat: new Head({
    name: 'Flax Hat',
    stats: {
      intellect: 3  // Fixed typo from 'intelect'
    },
    armor: 30,
    type: 'light',
    level: 8
  }),

  SilkHeadband: new Head({
    name: 'Silk Headband',
    stats: {
      strength: 4
    },
    armor: 120,
    type: 'light',
    level: 17,
    rarity: 'uncommon'
  })
};

const itemsDatabaseBoots = {  
  CottonPants: new Boots({
    name: 'Cotton Pants',
    stats: {
      intellect: 1
    },
    armor: 15,
    type: 'light'
  })
};

const itemsDatabaseWeapon = {};
const itemsDatabaseOffHand = {};
const itemsDatabaseLamp = {};

const itemsDatabaseBack = {
  Backpack: new Back({
    name: 'Backpack',
    stats: {
      spirit: 5
    },
    armor: 100
  })
};

const itemsDatabaseChest = {
  CottonRobes: new Chest({
    name: 'Cotton Robes',
    stats: {
      intellect: 2
    },
    armor: 30,
    type: 'light'
  })
};

const itemsDatabaseRings = {
  ThievesRing: new Ring({
    name: 'Thieves Ring',
    stats: {
      agility: 10
    }
  }),

  PhilosophersRing: new Ring({
    name: 'Philosopher\'s Ring',
    stats: {
      enhancepotion: 0.5
    }
  })
};

// Corrected the itemsDatabase object syntax
const itemsDatabase = {
  head: itemsDatabaseHead,
  chest: itemsDatabaseChest,
  boots: itemsDatabaseBoots,
  weapon: itemsDatabaseWeapon,
  offhand: itemsDatabaseOffHand,
  lamp: itemsDatabaseLamp,
  back: itemsDatabaseBack,
  ring: itemsDatabaseRings
};

export default itemsDatabase;