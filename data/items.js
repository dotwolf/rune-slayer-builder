import { Item, Weapon, Armor, Head, Chest, Boots, Offhand, Shield, Sash, Ring, Lamp, Back } from '../js/types.js';

const itemsDatabase = {
  CottonHeadband: new Head({
    name: 'Cotton Headband',
    stats: {
      'strength': 1
    },
    armor: 30,
    type: 'light'
  }),

  CottonHat: new Head({
    name: 'Cotton Hat',
    stats: {
      'intellect': 1
    },
    armor: 15,
    type: 'light'
  }),

 FlaxHat: new Head({
    name: 'Flax Hat',
    stats: {
      'intelect': 3
    },
    armor: 30,
    type: 'light',
    level: 8
  }),

 SilkHeadband: new Head({
    name: 'Silk Headband',
    stats: {
      'strength': 4
    },
    armor: 120,
    type: 'light',
    level: 17,
    rarity: 'uncommon'
  }),

  


  CottonRobes: new Chest({
    name: 'Cotton Robes',
    stats: {
      'intellect': 2
    },
    armor: 30,
    type: 'light'
  }),




  CottonPants: new Boots({
    name: 'Cotton Pants',
    stats: {
      'intellect': 1
    },
    armor: 15,
    type: 'light'
  }),




  Backpack: new Back({
    name: 'Backpack',
    stats: {
      'spirit': 5
    },
    armor: 100,
  }),




  ThievesRing: new Ring({
  name: 'Thieves Ring',
  stats: {
      'agility': 10
    }
  }),

  PhilosophersRing: new Ring({
  name: 'Philosopher\'s Ring',
  stats: {
      'enhancepotion': 0.5
    }
  })
};

export default itemsDatabase;