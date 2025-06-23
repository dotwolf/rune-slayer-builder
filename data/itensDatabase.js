import { Item, Weapon, Armor, Helmet, Chest, Boots, Offhand, Shield, Sash, Ring, Lantern, Back } from './types.js';

const itemsDatabaseHelmet = {
  CottonHeadband: new Helmet({
    name: 'Cotton Headband',
    stats: {
      strength: 1
    },
    armor: 30,
    type: 'light'
  }),

  CottonHat: new Helmet({
    name: 'Cotton Hat',
    stats: {
      intellect: 1
    },
    armor: 15,
    type: 'light'
  }),

  FlaxHat: new Helmet({
    name: 'Flax Hat',
    stats: {
      intellect: 3  // Fixed typo from 'intelect'
    },
    armor: 30,
    type: 'light',
    level: 8
  }),

  SilkHeadband: new Helmet({
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
const itemsDatabaseLantern = {
  Lantern: new Lantern({
    name: 'Lantern',
  }),

  AmberLantern: new Lantern({
    name: 'Amber Lantern',
    stats: {
      spirit: 5
    },
    rarity: 'uncommon'
  }),

  AmethystLantern: new Lantern({
    name: 'Amethyst Lantern',
    stats: {
      stamina: 4
    },
    rarity: 'uncommon'
  }),

  SapphireLantern: new Lantern({
    name: 'Sapphire Lantern',
    stats: {
      magatk: 0.03
    },
    rarity: 'rare'
  }),

  RubyLantern: new Lantern({
    name: 'Ruby Lantern',
    stats: {
      phyatk: 0.03
    },
    rarity: 'rare'
  }),

  EmberfrostLantern: new Lantern({
    name: 'Emberfrost Lantern',
    stats: {
      heatres: 0.25
    },
    rarity: 'rare'
  }),

  FrostfireLantern: new Lantern({
    name: 'Frostfire Lantern',
    stats: {
      coldres: 0.25
    },
    rarity: 'rare'
  }),

  CopperShield: new Shield({
    name: 'Copper Shield',
    stats: {},
    posture: 5
  }),

  IronShield: new Shield({
    name: 'Iron Shield',
    stats: {},
    posture: 10,
    level: 8,
    armor: 25
  }),

  SplintedShield: new Shield({
    name: 'Splinted Shield',
    stats: {},
    posture: 8,
    level: 10,
    armor: 46
  }),

  SlimeShield: new Shield({
    name: 'Slime Shield',
    stats: {},
    posture: 10,
    level: 16,
    armor: 67,
  }),

  SilverShield: new Shield({
    name: 'Silver Shield',
    stats: {},
    posture: 15,
    level: 17,
    armor: 35
  }),

  PlatinumShield: new Shield({
    name: 'Platinum Shield',
    stats: {},
    posture: 20,
    level: 27,
    armor: 50
  }),

  MithrilShield: new Shield({
    name: 'Mithril Shield',
    stats: {},
    posture: 20,
    level: 33,
    armor: 60
  }),

  ZircShield: new Shield({
    name: 'Zirc Shield',
    stats: {},
    posture: 20,
    level: 42,
    armor: 70
  }),

  CobaltShield: new Shield({
    name: 'Cobalt Shield',
    stats: {},
    posture: 25,
    level: 45,
    armor: 100
  }),

  ElderShield: new Shield({
    name: 'Elder Shield',
    stats: {
      spirit: 5,
      stamina: 5
    },
    posture: 20,
    level: 35,
    armor: 100
  }),

  LanzasMerit: new Shield({
    name: 'Lanza\'s Merit',
    stats: {
      magres: 0.08
    },
    posture: 20,
    level: 40,
    armor: 235
  }),

  TemplarsAegis: new Shield({
    name: 'Templar\'s Aegis',
    stats: {
      strength: 27,
      stamina: 5
    },
    posture: 17,
    level: 40,
    armor: 212
  }),

  Riftguard: new Shield({
    name: 'Riftguard',
    stats: {
      strength: 27,
      stamina: 5
    },
    posture: 17,
    level: 40,
    armor: 212
  }),

  IceGolemShield: new Shield({
    name: 'Ice Golem Shield',
    stats: {
      magres: 0.05,
      holyres: 0.05,
      fireres: -0.05
    },
    posture: 35,
    level: 45,
    armor: 300
  }),
};



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

  SorcerersRing: new Ring({
    name: 'Sorcerer\'s Ring',
    stats: {
      intellect: 10
    }
  }),

  WarriorsRing: new Ring({
    name: 'Warrior\'s Ring',
    stats: {
      strength: 10
    }
  }),

  PhilosophersRing: new Ring({
    name: 'Philosopher\'s Ring',
  }),

  RingOfVitality: new Ring({
    name: 'Ring of Vitality',
    stats: {
      stamina: 3
    },
  }),

  FlameStoneRing: new Ring({
    name: 'Flame Stone Ring',
    stats: {
      fireres: 0.17
    }
  }),

  HolyStoneRing: new Ring({
    name: 'Holy Stone Ring',
    stats: {
      holyres: 0.17
    }
  }),

  SpellStoneRing: new Ring({
    name: 'Spell Stone Ring',
    stats: {
      magres: 0.17
    }
  }),

  EmberfrostRing: new Ring({
    name: 'Emberfrost Ring',
    stats: {
      heatres: 0.25
    }
  }),

  PoisonbiteRing: new Ring({
    name: 'Poisonbite Ring',
    stats: {
      immunity: 0.35
    }
  }),

  MinersRing: new Ring({
    name: 'Miner\'s Ring',
  }),

  LumberjackRing: new Ring({
    name: 'Lumberjack Ring',
  }),

  GiantSlayersRing: new Ring({
    name: 'Giant Slayer\'s Ring',
  }),

  MaelissRing: new Ring({
    name: 'Maelis\'s Ring',
  }),

  ShieldGodsRing: new Ring({
    name: 'Shield God\'s Ring',
    level: 20
  }),

  CastersRing: new Ring({
    name: 'Caster\'s Ring',
    stats: {
      castspeed: 0.10
    }
  }),

  RingOfSecondEye: new Ring({
    name: 'Ring of Second Eye',
  }),

  FocusRing: new Ring({
    name: 'Focus Ring',
  }),

  ElderRing: new Ring({
    name: 'Elder Ring',
    stats: {
      healthreg: 0.10
    },
  }),

  RingOfResistance: new Ring({
    name: 'Ring of Resistance',
    stats: {
      magres: 0.06,
      holyres: 0.06,
      fireres: 0.06
    }
  }),

  DoomBand: new Ring({
    name: 'Doom Band',
    stats: {
      strength: 24,
      spirit: 5,
      stamina: 8
    },
  }),

  HexRing: new Ring({
    name: 'Hex Ring',
    stats: {
      intellect: 24,
      spirit: 5,
      stamina: 8
    },
  }),

  ShadowBand: new Ring({
    name: 'Shadow Band',
    stats: {
      agility: 24,
      spirit: 5,
      stamina: 8
    },
  }),

  BlessedBand: new Ring({
    name: 'Blessed Band',
    stats: {
      strength: 24,
      spirit: 5,
      stamina: 8
    },
  }),

  SwiftBand: new Ring({
    name: 'Swift Band',
    stats: {
      agility: 24,
      spirit: 5,
      stamina: 8
    },
  }),

  SageRing: new Ring({
    name: 'Sage Ring',
    stats: {
      intellect: 24,
      spirit: 5,
      stamina: 8
    },
  }),

  PaladinsRing: new Ring({
    name: 'Paladin\'s Ring',
    effect: 'Crit damage taken is reduced by 20%'
  }),

  DemonCirclet: new Ring({
    name: 'Demon Circlet',
    stats: {
      strength: 10,
      agility: 10,
      stamina: 10
    }
  }),

  LuckyRing: new Ring({
    name: 'Lucky Ring',
    stats: {
      luck: 1
    }
  }),

  VampiricRing: new Ring({
    name: 'Vampiric Ring',
    effect: 'Heals upon landing a critical attack',
    soulbound: true
  }),

  PrimordialRing: new Ring({
    name: 'Primordial Ring',
    effect: 'Physical damage buff based on hunger',
    level: 30
  }),

  SuveriasRing: new Ring({
    name: 'Suveria\'s Ring',
    stats: {
      holyAttackDamage: 0.15,
      undeadDamage: 0.10
    }
  }),

  MerchantsRing: new Ring({
    name: 'Merchant\'s Ring',
    effect: '+10% increased money gain from all sources'
  }),

  ManaCleaverRing: new Ring({
    name: 'Mana Cleaver Ring',
    effect: 'On each M1: Gain slight Mana Regen on hit. 5s CD for every 50 Intelligence'
  }),

  FightersRing: new Ring({
    name: 'Fighter\'s Ring',
    effect: 'Deal +5% increased basic attack damage when below 20% HP. Does not proc on crits'
  }),

  CovetousVipersRing: new Ring({
    name: 'Covetous Viper\'s Ring',
    effect: 'Your melee attacks on poisoned enemies restore a portion of your health'
  })
};

// Corrected the itemsDatabase object syntax
const itemsDatabase = {
  helmet: itemsDatabaseHelmet,
  chest: itemsDatabaseChest,
  boots: itemsDatabaseBoots,
  weapon: itemsDatabaseWeapon,
  offhand: itemsDatabaseOffHand,
  Lantern: itemsDatabaseLantern,
  back: itemsDatabaseBack,
  ring: itemsDatabaseRings
};

export default itemsDatabase;