import { Weapon, Helmet, Chest, Boots, Shield, Sash, Ring, Lantern, Back, Race, Fairy } from './types.js';


const itemsDatabaseHelmet = {
  CottonHeadband: new Helmet({
    name: 'Cotton Headband',
    stats: {strength: 1},
    armor: 30,
    type: 'light'
  }),
  CottonHat: new Helmet({
    name: 'Cotton Hat',
    stats: {intellect: 1},
    armor: 15,
    type: 'light'
  }),
  FlaxHeadband: new Helmet({
    name: 'Flax Headband',
    stats: {strength: 3},
    armor: 60,
    type: 'light',
    level: 8
  }),
  FlaxHat: new Helmet({
    name: 'Flax Hat',
    stats: {intellect: 3},
    armor: 30,
    type: 'light',
    level: 8
  }),
  SilkHeadband: new Helmet({
    name: 'Silk Headband',
    stats: {strength: 4},
    armor: 120,
    type: 'light',
    level: 17,
    rarity: 'uncommon'
  }),
  SilkHat: new Helmet({
    name: 'Silk Hat',
    stats: {intellect: 4},
    armor: 60,
    type: 'light',
    level: 17,
    rarity: 'uncommon'
  }),
  LilyleafHeadband: new Helmet({
    name: 'Lilyleaf Headband',
    stats: {strength: 6},
    armor: 160,
    type: 'light',
    level: 27,
    rarity: 'uncommon'
  }),
  LilyleafHat: new Helmet({
    name: 'Lilyleaf Hat',
    stats: {intellect: 6},
    armor: 80,
    type: 'light',
    level: 27,
    rarity: 'uncommon'
  }),
  StrawHat: new Helmet({
    name: 'Straw Hat',
    stats: {agility: 10, fishingPower: 0.05},
    armor: 175,
    type: 'light',
    level: 30,
    rarity: 'uncommon',
  }),
  ScorchleafHat: new Helmet({
    name: 'Scorchleaf Hat',
    stats: {intellect: 10, spirit: 1},
    armor: 87,
    type: 'light',
    level: 34,
    rarity: 'uncommon'
  }),
  ScorchleafHeadband: new Helmet({
    name: 'Scorchleaf Headband',
    stats: {strength: 9,stamina: 1},
    armor: 187,
    type: 'light',
    level: 34,
    rarity: 'uncommon'
  }),
  CocoleafHat: new Helmet({
    name: 'Cocoleaf Hat',
    stats: {intellect: 11,spirit: 1},
    armor: 93,
    type: 'light',
    level: 42,
    rarity: 'uncommon'
  }),
  CocoleafHeadband: new Helmet({
    name: 'Cocoleaf Headband',
    stats: {strength: 11, stamina: 1},
    armor: 206,
    type: 'light',
    level: 42,
    rarity: 'uncommon'
  }),
  VangarsScarf: new Helmet({
    name: 'Vangar\'s Scarf',
    stats: {strength: 10,spirit: 2},
    armor: 50,
    type: 'light',
    level: 35,
    rarity: 'rare'
  }),
  ArachnidsHat: new Helmet({
    name: 'Arachnids Hat',
    stats: {intellect: 12, spirit: 2},
    armor: 97,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  DireBearHat: new Helmet({
    name: 'Dire Bear Hat',
    stats: {strength: 12, stamina: 1},
    armor: 226,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  LichtHood: new Helmet({
    name: 'Licht Hood',
    stats: {intellect: 10, spirit: 10},
    armor: 95,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  HellfangHeadband: new Helmet({
    name: 'Hellfang Headband',
    stats: {strength: 11,physicalPierce: 0.02},
    armor: 263,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  MaleficHat: new Helmet({
    name: 'Malefic Hat',
    stats: {intellect: 11, magicCritChance: 0.02},
    armor: 94,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  SeraphHeadband: new Helmet({
    name: 'Seraph Headband',
    stats: {strength: 11, physicalPierce: 0.02},
    armor: 263,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  SanctifiedHat: new Helmet({
    name: 'Sanctified Hat',
    stats: {intellect: 11, magicCritChance: 0.01},
    armor: 94,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  LightYetiBeads: new Helmet({
    name: 'Light Yeti Beads',
    stats: {strength: 16, stamina: 6, coldResistance: 0.12, buffDuration: 0.13,
      tundraVisibility: 0.1
    },
    armor: 278,
    type: 'light',
    level: 45,
    rarity: 'epic'
  }),
  BorealInquisitorHood: new Helmet({
    name: 'Boreal Inquisitor Hood',
    stats: {intellect: 18, magicCritChance: 0.03, coldResistance: 0.12,
      buffDuration: 0.11, tundraVisibility: 0.1
    },
    armor: 142,
    type: 'light',
    level: 50,
    rarity: 'epic'
  }),
  MammothSagesCrown: new Helmet({
    name: 'Mammoth Sage\'s Crown',
    stats: {intellect: 15, spirit: 12, coldResistance: 0.12, buffDuration: 0.11, tundraVisibility: 0.1},
    armor: 129,
    type: 'light',
    level: 45,
    rarity: 'epic'
  }),
  FrostleafHat: new Helmet({
    name: 'Frostleaf Hat',
    stats: {intellect: 15, spirit: 2, castSpeed: 0.03},
    armor: 110,
    type: 'light',
    level: 45,
    rarity: 'uncommon'
  }),
  FrostleafHeadband: new Helmet({
    name: 'Frostleaf Hat',
    stats: {strength: 15, stamina: 2, physicalPierce: 0.02},
    armor: 240,
    type: 'light',
    level: 45,
    rarity: 'uncommon'
  }),
  ScorchleafHeadband: new Helmet({
    name: 'Scorchleaf Headband',
    stats: {strength: 9, stamina: 1},
    armor: 187,
    type: 'light',
    level: 34,
    rarity: 'uncommon'
  }),
  ScorchleafHat: new Helmet({
    name: 'Scorchleaf Hat',
    stats: {intellect: 10, spirit: 1},
    armor: 87,
    type: 'light',
    level: 34,
    rarity: 'uncommon'
  }),
  CyclopsHeadband: new Helmet({
    name: 'Cyclops Headband',
    stats: {strength: 9, coldResistance: 0.07, buffDuration: 0.03,
      tundraVisibility: 0.05},
    armor: 237,
    type: 'light',
    level: 42,
    rarity: 'epic'
  }),
  DireWolfHood: new Helmet({
    name: 'Dire Wolf Hood',
    stats: {castSpeed: 0.05, coldResistance: 0.07, intellect: 9,
      tundraVisibility: 0.07},
    armor: 85,
    type: 'light',
    level: 42,
    rarity: 'epic'
  }),
  BorealGiHeadband: new Helmet({
    name: 'Boreal Gi Headband',
    stats: {strength: 19, stamina: 9, coldResistance: 0.12, buffDuration: 0.13,
      tundraVisibility: 0.1},
    armor: 336,
    type: 'light',
    level: 50,
    rarity: 'epic'
  }),




  LightLeatherMask: new Helmet({
    name: 'Light Leather Mask',
    stats: {agility: 1},
    armor: 30,
    type: 'medium'
  }),
  MediumLeatherMask: new Helmet({
    name: 'Medium Leather Mask',
    stats: {agility: 3},
    armor: 65,
    type: 'medium',
    level: 8
  }),
  HeavyLeatherMask: new Helmet({
    name: 'Heavy Leather Mask',
    stats: {agility: 4},
    armor: 125,
    type: 'medium',
    level: 17,
    rarity: 'uncommon'
  }),
  ThickLeatherMask: new Helmet({
    name: 'Thick Leather Mask',
    stats: {agility: 6},
    armor: 170,
    type: 'medium',
    level: 27,
    rarity: 'uncommon'
  }),
  AssassinsHood: new Helmet({
    name: 'Assassin\'s Hood',
    stats: {spirit: 2, agility: 8},
    armor: 220,
    type: 'medium',
    level: 25,
    rarity: 'rare',
  }),
  ElderMask: new Helmet({
    name: 'Elder Mask',
    stats: {spirit: 5, agility: 10},
    armor: 235,
    type: 'medium',
    level: 35,
    rarity: 'epic'
  }),
  StalkerHood: new Helmet({
    name: 'Stalker Hood',
    stats: {agility: 9, stamina: 2, physicalPierce: 0.03},
    armor: 225,
    type: 'medium',
    level: 40,
    rarity: 'epic'
  }),
  EverwinterCrown: new Helmet({
    name: 'Everwinter Crown',
    stats: {strength: 5, agility: 15, stamina: 2,
      critChance: 0.03, speedBoost: 0.02, coldResistance: 0.1,
    tundraVisibility: 0.1},
    armor: 360,
    type: 'medium',
    level: 50,
    rarity: 'epic'
  }),
  MediumYetiHood: new Helmet({
    name: 'Medium Yeti Hood',
    stats: {agility: 23, strength: 4, speedBoost: 0.02, coldResistance: 0.13,
      tundraVisibility: 0.15
    },
    armor: 252,
    type: 'medium',
    level: 45,
    rarity: 'epic'
  }),
  MammothRangersCrown: new Helmet({
    name: 'Mammoth Ranger\'s Crown',
    stats: {agility: 18, stamina: 8, coldResistance: 0.15,
      buffDuration: 0.12, tundraVisibility: 0.15
    },
    armor: 263,
    type: 'medium',
    level: 45,
    rarity: 'epic'
  }),
  CyclopsMediumHood: new Helmet({
    name: 'Cyclops Medium Hood',
    stats: {agility: 7, stamina: 3, critChance: 0.02,
      coldResistance: 0.08, tundraVisibility: 0.05
    },
    armor: 203,
    type: 'medium',
    level: 42,
    rarity: 'epic'
  }),



  CopperHelmet: new Helmet({
    name: 'Copper Helmet',
    stats: {strength: 1},
    armor: 55,
    type: 'heavy',
  }),

  IronHelmet: new Helmet({
    name: 'Iron Helmet',
    stats: {strength: 3},
    armor: 120,
    type: 'heavy',
    level: 8,
  }),

  SilverHelmet: new Helmet({
    name: 'Silver Helmet',
    stats: {strength: 4},
    armor: 200,
    type: 'heavy',
    level: 17,
    rarity: 'uncommon'
  }),

  WingedHelmet: new Helmet({
    name: 'Winged Helmet',
    stats: {strength: 5, spirit: 5, agility: 3},
    armor: 235,
    type: 'heavy',
    level: 21,
    rarity: 'uncommon'
  }),

  HodorsWarHelmet: new Helmet({
    name: 'Hodor\'s War Helmet',
    stats: {strength: 18, stamina: 4, critChance: 0.01},
    armor: 542,
    type: 'heavy',
    level: 25,
    rarity: 'rare'
  }),

  PlatinumHelmet: new Helmet({
    name: 'Platinum Helmet',
    stats: {strength: 6},
    armor: 300,
    type: 'heavy',
    level: 27,
    rarity: 'uncommon'
  }),

  MithrilHelmet: new Helmet({
    name: 'Mithril Helmet',
    stats: {strength: 10, stamina: 3},
    armor: 400,
    type: 'heavy',
    level: 27,
    rarity: 'uncommon'
  }),

  WarTrollHelmet: new Helmet({
    name: 'War Troll Helmet',
    stats: {strength: 11, stamina: 4},
    armor: 425,
    type: 'heavy',
    level: 39,
    rarity: 'rare'
  }),

  ZircHelmet: new Helmet({
    name: 'Zirc Helmet',
    stats: {strength: 12, stamina: 5, physicalPierce: 0.01, physicalAttack: 0.01},
    armor: 450,
    type: 'heavy',
    level: 42,
    rarity: 'uncommon'
  }),

  AbyssalHelmet: new Helmet({
    name: 'Abyssal Helmet',
    stats: {strength: 22, magicResistance: 0.04, buffDuration: 0.08},
    armor: 500,
    type: 'heavy',
    level: 40,
    rarity: 'epic'
  }),

  BastionHelmet: new Helmet({
    name: 'Bastion Helmet',
    stats: {strength: 22, magicResistance: 0.04, buffDuration: 0.08},
    armor: 500,
    type: 'heavy',
    level: 40,
    rarity: 'epic'
  }),
  FrostscaleHelm: new Helmet({
    name: 'Frostscale Helm',
    stats: {strength: 24, stamina:2, critDefense: 0.02, magicResistance: 0.04,
      coldResistance: 0.15, buffDuration: 0.1, tundraVisibility: 0.1},
    armor: 625,
    type: 'heavy',
    level: 50,
    rarity: 'epic'
  }),
  MammothWarriorsHelm: new Helmet({
    name: 'Mammoth Warrior\'s Helm',
    stats: {strength: 18, stamina: 4, speedBoost: -0.01, magicResistance: 0.07,
      coldResistance: 0.2, buffDuration: 0.1, tundraVisibility: 0.1},
    armor: 700,
    type: 'heavy',
    level: 45,
    rarity: 'epic'
  }),
  CobaltHelmet: new Helmet({
    name: 'Cobalt Helmet',
    stats: {strength: 12, stamina: 5, critDefense: 0.02,
      magicResistance: 0.02},
    armor: 550,
    type: 'heavy',
    level: 45,
    rarity: 'uncommon'
  }),
BrimfrostHelmet: new Helmet({
    name: 'Brimfrost Helmet',
    stats: {strength: 30, spirit: 4, coldResistance: 0.15, buffDuration: 0.15,
      tundraVisibility: 0.1
    },
    armor: 450,
    type: 'heavy',
    level: 45,
    rarity: 'epic'
  }),
CyclopsHeavyHelmet: new Helmet({
    name: 'Cyclops Heavy Helmet',
    stats: {strength: 18, critDefense: 0.03, coldResistance: 0.09,
      tundraVisibility: 0.05},
    armor: 400,
    type: 'heavy',
    level: 42,
    rarity: 'epic'
  }),





  MandrakeKingsCrown: new Helmet({
    name: 'Mandrake King\'s Crown',
    stats: {intellect: 5, spirit: 2},
    armor: 0,
    type: 'miscellaneous',
    level: 8,
    rarity: 'uncommon'
  }),
  SlimeCrown: new Helmet({
    name: 'Slime Crown',
    stats: {intellect: 9, magicCritChance: 0.01},
    armor: 0,
    type: 'miscellaneous',
    level: 16,
    rarity: 'uncommon'
  })
};

const itemsDatabaseChest = {
  CottonRobes: new Chest({
    name: 'Cotton Robes',
    stats: {intellect: 2},
    armor: 30,
    type: 'light'
  }),
  CottonGi: new Chest({
    name: 'Cotton Gi',
    stats: {strength: 2},
    armor: 60,
    type: 'light'
  }),
  FlaxRobes: new Chest({
    name: 'Flax Robes',
    stats: {intellect: 6},
    armor: 60,
    type: 'light',
    level: 8
  }),
  FlaxGi: new Chest({
    name: 'Flax Gi',
    stats: {strength: 6},
    armor: 120,
    type: 'light',
    level: 8
  }),
   CloakOfRatSpeed: new Chest({
    name: 'Cloak of Rat Speed',
    stats: {spirit: 2, agility: 14, speedBoost: 0.10},
    armor: 25,
    type: 'light',
    level: 14,
    rarity: 'uncommon'
  }),
  SilkRobes: new Chest({
    name: 'Silk Robes',
    stats: {intellect: 8},
    armor: 120,
    type: 'light',
    level: 17,
    rarity: 'rare'
  }),
  SilkGi: new Chest({
    name: 'Silk Gi',
    stats: {strength: 8},
    armor: 240,
    type: 'light',
    level: 17,
    rarity: 'rare'
  }),
  LilyleafRobes: new Chest({
    name: 'Lilyleaf Robes',
    stats: {intellect: 12},
    armor: 160,
    type: 'light',
    level: 27,
    rarity: 'uncommon'
  }),
  LilyleafGi: new Chest({
    name: 'Lilyleaf Gi',
    stats: {strength: 12},
    armor: 320,
    type: 'light',
    level: 27,
    rarity: 'uncommon'
  }),
  ScorchleafRobes: new Chest({
    name: 'Scorchleaf Robes',
    stats: {intellect: 18, spirit: 2},
    armor: 177,
    type: 'light',
    level: 34,
    rarity: 'uncommon'
  }),
  ScorchleafGi: new Chest({
    name: 'Scorchleaf Gi',
    stats: {strength: 18, stamina: 1, heatResistance: 0.15},
    armor: 320,
    type: 'light',
    level: 34,
    rarity: 'uncommon'
  }),
  CocoleafRobes: new Chest({
    name: 'Cocoleaf Robes',
    stats: {intellect: 21, spirit: 3},
    armor: 185,
    type: 'light',
    level: 42,
    rarity: 'uncommon'
  }),
  CocoleafGi: new Chest({
    name: 'Cocoleaf Gi',
    stats: {strength: 21, stamina: 2},
    armor: 372,
    type: 'light',
    level: 42,
    rarity: 'uncommon'
  }),
  VangarsCoat: new Chest({
    name: 'Vangar\'s Coat',
    stats: {strength: 20, spirit: 5},
    armor: 100,
    type: 'light',
    level: 35,
    rarity: 'rare'
  }),
  ArachnidsRobes: new Chest({
    name: 'Arachnids Robes',
    stats: {intellect: 24, spirit: 4, magicCritChance: 0.01},
    armor: 194,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  DireBearGarbs: new Chest({
    name: 'Dire Bear Garbs',
    stats: {strength: 24, stamina: 2},
    armor: 388,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  LichtRobes: new Chest({
    name: 'Licht Robes',
    stats: {intellect: 20, spirit: 15, magicCritChance: 0.01},
    armor: 190,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  MaleficRobes: new Chest({
    name: 'Malefic Robes',
    stats: {intellect: 22, magicPierce: 0.04, castSpeed: 0.08},
    armor: 189,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  HellfangGi: new Chest({
    name: 'Hellfang Gi',
    stats: {strength: 22, critDamage: 0.10, magicResistance: 0.06},
    armor: 423,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  SanctifiedRobes: new Chest({
    name: 'Sanctified Robes',
    stats: {intellect: 22, magicPierce: 0.04, castSpeed: 0.08},
    armor: 189,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  SeraphGi: new Chest({
    name: 'Seraph Gi',
    stats: {strength: 22, critDamage: 0.10, magicResistance: 0.06},
    armor: 423,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  FrostleafRobes: new Chest({
    name: 'Frostleaf Robes',
    stats: {intellect: 28, spirit: 6, coldResistance: 0.15, magicCritChance: 1},
    armor: 215,
    type: 'light',
    level: 45,
    rarity: 'uncommon'
  }),
  FrostleafGi: new Chest({
    name: 'Frostleaf Gi',
    stats: {strength: 28, stamina: 3, coldResistance: 0.15, physicalAttack: 0.03},
    armor: 400,
    type: 'light',
    level: 45,
    rarity: 'uncommon'
  }),
  LightYetiArmor: new Chest({
    name: 'Light Yeti Armor',
    stats: {strength: 27, stamina: 11, critDamage: 0.1,
      critChance: 0.02, coldResistance: 0.25},
    armor: 464,
    type: 'light',
    level: 45,
    rarity: 'epic'
  }),
  CyclopsGi: new Chest({
    name: 'Cyclops Gi',
    stats: {strength: 18, magicResistance: 0.05, coldResistance: 0.11},
    armor: 381,
    type: 'light',
    level: 42,
    rarity: 'epic'
  }),
  DireWolfGarbs: new Chest({
    name: 'Dire Wolf Garbs',
    stats: {intellect: 18, magicPierce: 0.03, coldResistance: 0.11},
    armor: 153,
    type: 'light',
    level: 42,
    rarity: 'epic'
  }),
  BorealGi: new Chest({
    name: 'Boreal Gi',
    stats: {strength: 32, stamina: 16, coldResistance: 0.25,
      critDamage: 0.1, critChance: 0.01},
    armor: 528,
    type: 'light',
    level: 50,
    rarity: 'epic'
  }),
  BorealInquisitorRobes: new Chest({
    name: 'Boreal Inquisitor Robes',
    stats: {intellect: 30, magicPierce: 0.04, castSpeed: 0.04,
      coldResistance: 0.25},
    armor: 233,
    type: 'light',
    level: 50,
    rarity: 'epic'
  }),




  LightLeatherVest: new Chest({
    name: 'Light Leather Vest',
    stats: {agility: 2},
    armor: 60,
    type: 'medium',
    rarity: 'common'
  }),
  MediumLeatherVest: new Chest({
    name: 'Medium Leather Vest',
    stats: {agility: 5},
    armor: 130,
    type: 'medium',
    level: 8,
    rarity: 'uncommon'
  }),
  HeavyLeatherVest: new Chest({
    name: 'Heavy Leather Vest',
    stats: {agility: 8},
    armor: 250,
    type: 'medium',
    level: 17,
    rarity: 'uncommon'
  }),
  ChampionBelt: new Chest({
    name: 'Champion Belt',
    stats: {strength: 10, stamina: 2},
    armor: 280,
    type: 'medium',
    level: 19,
    rarity: 'uncommon'
  }),
  AssassinsCloak: new Chest({
    name: 'Assassin\'s Cloak',
    stats: {spirit: 4, agility: 16, critChance: 0.02},
    armor: 425,
    type: 'medium',
    level: 25,
    rarity: 'rare'
  }),
  ThickLeatherVest: new Chest({
    name: 'Thick Leather Vest',
    stats: {agility: 12},
    armor: 340,
    type: 'medium',
    level: 27,
    rarity: 'uncommon'
  }),
  ElderChest: new Chest({
    name: 'Elder Chest',
    stats: {spirit: 10, agility: 20},
    armor: 470,
    type: 'medium',
    level: 35,
    rarity: 'epic'
  }),
  DrogarsVest: new Chest({
    name: 'Drogar\'s Vest',
    stats: {spirit: 9, agility: 16, critChance: 0.03},
    armor: 623,
    type: 'medium',
    level: 35,
    rarity: 'epic'
  }),
  StalkerVest: new Chest({
    name: 'Stalker Vest',
    stats: {agility: 18, stamina: 4, critChance: 0.02},
    armor: 450,
    type: 'medium',
    level: 40,
    rarity: 'epic'
  }),
  ForeswornVest: new Chest({
    name: 'Foresworn Vest',
    stats: {agility: 18, stamina: 4, critChance: 0.02},
    armor: 450,
    type: 'medium',
    level: 40,
    rarity: 'epic'
  }),
  MammothSagesGarbs: new Chest({
    name: 'Mammoth Sage\'s Garbs',
    stats: {intellect: 25, spirit: 20, holyResistance: 0.05,
      castSpeed: 0.03, coldResistance: 0.25
    },
    armor: 224,
    type: 'light',
    level: 45,
    rarity: 'epic'
  }),
  EverwinterVest: new Chest({
    name: 'Everwinter Vest',
    stats: {strength: 10, agility: 25, stamina: 4,
      critChance: 0.02, physicalPierce: 0.03, coldResistance: 0.25},
    armor: 500,
    type: 'medium',
    level: 50,
    rarity: 'epic'
  }),
  MammothRangersGarbs: new Chest({
    name: 'Mammoth Rangers Garbs',
    stats: {agility: 25, stamina: 10, critChance: 0.03,
      physicalPierce: 0.03, coldResistance: 0.28
    },
    armor: 664,
    type: 'medium',
    level: 45,
    rarity: 'epic'
  }),
  CyclopsMediumVest: new Chest({
    name: 'Cyclops Medium Vest',
    stats: {agility: 15, stamina: 4, cdReduction: 0.02, coldResistance: 0.13},
    armor: 405,
    type: 'medium',
    level: 42,
    rarity: 'epic'
  }),
  MediumYetiArmor: new Chest({
    name: 'Medium Yeti Armor',
    stats: {strength: 5, agility: 30, stamina: 8,
      physicalPierce: 0.04, coldResistance: 0.28, fallReduction: 0.15
    },
    armor: 606,
    type: 'medium',
    level: 45,
    rarity: 'epic'
  }),
  




    CopperChestplate: new Chest({
    name: 'Copper Chestplate',
    stats: {strength: 2},
    armor: 110,
    type: 'heavy',
    rarity: 'common'
  }),
  IronChestplate: new Chest({
    name: 'Iron Chestplate',
    stats: {strength: 6},
    armor: 240,
    type: 'heavy',
    level: 8,
    rarity: 'uncommon'
  }),
  GoblinArmor: new Chest({
    name: 'Goblin Armor',
    stats: {strength: 6, spirit: 3},
    armor: 375,
    type: 'heavy',
    level: 14,
    rarity: 'uncommon'
  }),
  SilverChestplate: new Chest({
    name: 'Silver Chestplate',
    stats: {strength: 8},
    armor: 400,
    type: 'heavy',
    level: 17,
    rarity: 'uncommon'
  }),
  PlatinumChestplate: new Chest({
    name: 'Platinum Chestplate',
    stats: {strength: 12},
    armor: 600,
    type: 'heavy',
    level: 27,
    rarity: 'uncommon'
  }),
  CrabCarapace: new Chest({
    name: 'Crab Carapace',
    stats: {strength: 12, spirit: 12, stamina: 3, speedBoost: -0.05},
    armor: 950,
    type: 'heavy',
    level: 28,
    rarity: 'uncommon'
  }),
  MithrilChestplate: new Chest({
    name: 'Mithril Chestplate',
    stats: {strength: 18, stamina: 4},
    armor: 800,
    type: 'heavy',
    level: 33,
    rarity: 'uncommon'
  }),
  WarTrollChestplate: new Chest({
    name: 'War Troll Chestplate',
    stats: {strength: 22, stamina: 8},
    armor: 850,
    type: 'heavy',
    level: 39,
    rarity: 'rare'
  }),
  ZircChestplate: new Chest({
    name: 'Zirc Chestplate',
    stats: {strength: 22, stamina: 8, physicalPierce: 0.03, physicalAttack: 0.03},
    armor: 875,
    type: 'heavy',
    level: 42,
    rarity: 'uncommon'
  }),
  AbyssalPlate: new Chest({
    name: 'Abyssal Plate',
    stats: {strength: 45, critDamage: 0.10, physicalPierce: 0.04},
    armor: 1000,
    type: 'heavy',
    level: 40,
    rarity: 'epic'
  }),
  TurtleShell: new Chest({
    name: 'Turtle Shell',
    stats: {strength: 28, stamina: 8, critDefense: 0.10, magicResistance: 0.10},
    armor: 1000,
    type: 'heavy',
    level: 40,
    rarity: 'epic'
  }),
  BastionPlate: new Chest({
    name: 'Bastion Plate',
    stats: {strength: 45, critDamage: 0.10, physicalPierce: 0.04},
    armor: 1000,
    type: 'heavy',
    level: 40,
    rarity: 'epic'
  }),
  CobaltChestplate: new Chest({
    name: 'Cobalt Chestplate',
    stats: {strength: 22, stamina: 8, critDefense: 0.04, magicResistance: 0.04},
    armor: 950,
    type: 'heavy',
    level: 45,
    rarity: 'uncommon'
  }),
  MammothWarriorsPlate: new Chest({
    name: 'Mammoth Warriors Plate',
    stats: {strength: 29, stamina: 15, speedBoost: -0.05,
      damageReduction: 0.08, coldResistance: 0.35
    },
    armor: 1400,
    type: 'heavy',
    level: 45,
    rarity: 'epic'
  }),
  BrimfrostChestplate: new Chest({
    name: 'Brimfrost Chestplate',
    stats: {strength: 55, spirit: 5, stamina: 7, critDamage: 0.1,
      physicalPierce: 0.05, coldResistance: 0.2},
    armor: 950,
    type: 'heavy',
    level: 45,
    rarity: 'epic'
  }),
  CyclopsHeavyChestplate: new Chest({
    name: 'Cyclops Heavy Chestplate',
    stats: {strength: 36, critChance: 0.07, coldResistance: 0.15,
      buffDuration: 0.06},
    armor: 800,
    type: 'heavy',
    level: 42,
    rarity: 'epic'
  }),
  FrostscalePlate: new Chest({
    name: 'Frostscale Plate',
    stats: {strength: 42, stamina: 12, critDamage: 0.08,
      critChance: 0.01, speedBoost: -0.01, physicalPierce: 0.03,
      coldResistance: 0.25
    },
    armor: 1300,
    type: 'heavy',
    level: 50,
    rarity: 'epic'
  }),
};

const itemsDatabaseBoots = {  
   CottonPants: new Boots({
    name: 'Cotton Pants',
    stats: {intellect: 1},
    armor: 15,
    type: 'light',
  }),
  CottonGiPants: new Boots({
    name: 'Cotton Gi Pants',
    stats: {strength: 1},
    armor: 30,
    type: 'light',
  }),
  SlimeBoots: new Boots({
    name: 'Slime Boots',
    stats: {agility: 5},
    armor: 20,
    type: 'light',
    level: 7,
    description: 'Reduces fall damage by 35%.'
  }),
  FlaxPants: new Boots({
    name: 'Flax Pants',
    stats: {intellect: 3},
    armor: 30,
    type: 'light',
    level: 8,
  }),
  FlaxGiPants: new Boots({
    name: 'Flax Gi Pants',
    stats: {strength: 3},
    armor: 60,
    type: 'light',
    level: 8,
  }),
  SilkPants: new Boots({
    name: 'Silk Pants',
    stats: {intellect: 4},
    armor: 60,
    type: 'light',
    level: 17,
    rarity: 'uncommon'
  }),
  SilkGiPants: new Boots({
    name: 'Silk Gi Pants',
    stats: {strength: 4},
    armor: 120,
    type: 'light',
    level: 17,
    rarity: 'uncommon'
  }),
  LilyleafPants: new Boots({
    name: 'Lilyleaf Pants',
    stats: {intellect: 6},
    armor: 80,
    type: 'light',
    level: 27,
    rarity: 'uncommon'
  }),
  LilyleafGiPants: new Boots({
    name: 'Lilyleaf Gi Pants',
    stats: {strength: 6},
    armor: 160,
    type: 'light',
    level: 27,
    rarity: 'uncommon'
  }),
  ScorchleafPants: new Boots({
    name: 'Scorchleaf Pants',
    stats: {intellect: 10, spirit: 1},
    armor: 87,
    type: 'light',
    level: 34,
    rarity: 'uncommon'
  }),
  ScorchleafGiPants: new Boots({
    name: 'Scorchleaf Gi Pants',
    stats: {strength: 9, stamina: 1, heatResistance: 0.10},
    armor: 187,
    type: 'light',
    level: 34,
    rarity: 'uncommon'
  }),
  CocoleafPants: new Boots({
    name: 'Cocoleaf Pants',
    stats: {intellect: 11, spirit: 1},
    armor: 93,
    type: 'light',
    level: 42,
    rarity: 'uncommon'
  }),
  CocoleafGiPants: new Boots({
    name: 'Cocoleaf Gi Pants',
    stats: {strength: 11, stamina: 1},
    armor: 206,
    type: 'light',
    level: 42,
    rarity: 'uncommon'
  }),
  ArachnidsPants: new Boots({
    name: 'Arachnids Pants',
    stats: {intellect: 12, spirit: 2},
    armor: 97,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  DireBearBoots: new Boots({
    name: 'Dire Bear Boots',
    stats: {strength: 12, stamina: 1},
    armor: 226,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  LichtPants: new Boots({
    name: 'Licht Pants',
    stats: {intellect: 10, spirit: 8},
    armor: 97,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  MaleficPants: new Boots({
    name: 'Malefic Pants',
    stats: {intellect: 11, buffDuration: 0.05},
    armor: 94,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  HellfangGiPants: new Boots({
    name: 'Hellfang Gi Pants',
    stats: {strength: 11, critChance: 0.01},
    armor: 423,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  SanctifiedPants: new Boots({
    name: 'Sanctified Pants',
    stats: {intellect: 11, buffDuration: 0.05},
    armor: 94,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  SeraphGiPants: new Boots({
    name: 'Seraph Gi Pants',
    stats: {strength: 11, critChance: 0.01},
    armor: 263,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  BorealInquisitorPants: new Boots({
    name: 'Boreal Inquisitor Pants',
    stats: {intellect: 18, magicCritChance: 0.03, coldResistance: 0.12},
    armor: 142,
    type: 'light',
    level: 50,
    rarity: 'epic'
  }),
  FrostleafPants: new Boots({
    name: 'Frostleaf Pants',
    stats: {intellect: 15, spirit: 2, coldResistance: 0.15, magicCritChance: 1},
    armor: 140,
    type: 'light',
    level: 45,
    rarity: 'uncommon'
  }),
  FrostleafGiPants: new Boots({
    name: 'Frostleaf Gi Pants',
    stats: {strength: 15, stamina: 2, coldResistance: 0.1, physicalPierce: 0.02},
    armor: 240,
    type: 'light',
    level: 45,
    rarity: 'uncommon'
  }),
  LightYetiBoots: new Boots({
    name: 'Light Yeti Pants',
    stats: {strength: 16, stamina: 6, buffDuration: 0.13, coldResistance: 0.12,
      tundraVisibility: 0.1},
    armor: 278,
    type: 'light',
    level: 45,
    rarity: 'epic'
  }),
  MammothSagesPants: new Boots({
    name: 'Mammoth Sage\'s Pants',
    stats: {intellect: 15, spirit: 12, magicCritChance: 0.02, coldResistance: 0.12},
    armor: 129,
    type: 'light',
    level: 45,
    rarity: 'epic'
  }),
  CyclopsGiPants: new Boots({
    name: 'Cyclops Gi Pants',
    stats: {strength: 9, physicalPierce: 0.01, coldResistance: 0.07},
    armor: 237,
    type: 'light',
    level: 42,
    rarity: 'epic'
  }),
  DireWolfPants: new Boots({
    name: 'Dire Wolf Pants',
    stats: {intellect: 9, magicCritChance: 0.01, coldResistance: 0.09},
    armor: 85,
    type: 'light',
    level: 42,
    rarity: 'epic'
  }),
  BorealGiPants: new Boots({
    name: 'Boreal Gi Pants',
    stats: {strength: 19, stamina: 9, physicalPierce: 0.02, coldResistance: 0.12},
    armor: 336,
    type: 'light',
    level: 50,
    rarity: 'epic'
  }),





  LightLeatherBoots: new Boots({
    name: 'Light Leather Boots',
    stats: {agility: 1},
    armor: 30,
    type: 'medium',
  }),
  MediumLeatherBoots: new Boots({
    name: 'Medium Leather Boots',
    stats: {agility: 3},
    armor: 65,
    type: 'medium',
    level: 8,
  }),
  HeavyLeatherBoots: new Boots({
    name: 'Heavy Leather Boots',
    stats: {agility: 4},
    armor: 125,
    type: 'medium',
    level: 17,
    rarity: 'uncommon'
  }),
  BulkyLeatherBoots: new Boots({
    name: 'Bulky Leather Boots',
    stats: {strength: 8, stamina: 3},
    armor: 154,
    type: 'medium',
    level: 20,
    rarity: 'uncommon'
  }),
  WingedBoots: new Boots({
    name: 'Winged Boots',
    stats: {spirit: 5, agility: 7},
    armor: 75,
    type: 'medium',
    level: 21,
    rarity: 'uncommon'
  }),
  AssassinsBoots: new Boots({
    name: 'Assassin\'s Boots',
    stats: {spirit: 2, agility: 8},
    armor: 220,
    type: 'medium',
    level: 25,
    rarity: 'rare',
  }),
  ThickLeatherBoots: new Boots({
    name: 'Thick Leather Boots',
    stats: {agility: 6},
    armor: 170,
    type: 'medium',
    level: 27,
    rarity: 'uncommon'
  }),
  ElderBoots: new Boots({
    name: 'Elder Boots',
    stats: {spirit: 5, agility: 10},
    armor: 235,
    type: 'medium',
    level: 35,
    rarity: 'epic'
  }),
  StalkerBoots: new Boots({
    name: 'Stalker Boots',
    stats: {agility: 9, stamina: 2, buffDuration: 0.06},
    armor: 225,
    type: 'medium',
    level: 40,
    rarity: 'epic'
  }),
  ForeswornBoots: new Boots({
    name: 'Foresworn Boots',
    stats: {agility: 9, stamina: 2, buffDuration: 0.06},
    armor: 225,
    type: 'medium',
    level: 40,
    rarity: 'epic'
  }),
  MediumYetiBoots: new Boots({
    name: 'Medium Yeti Boots',
    stats: {agility: 23, strength: 4, critChance: 0.02, coldResistance: 0.13},
    armor: 252,
    type: 'medium',
    level: 45,
    rarity: 'epic'
  }),
  MammothRangersPants: new Boots({
    name: 'Mammoth Ranger\'s Pants',
    stats: {agility: 18, stamina: 8, cdReduction: 0.03, coldResistance: 0.13},
    armor: 263,
    type: 'medium',
    level: 45,
    rarity: 'epic'
  }),
  EverwinterBoots: new Boots({
    name: 'Everwinter Boots',
    stats: {strength: 5, agility: 15, stamina: 2, speedBoost: 0.02,
      coldResistance: 0.15, buffDuration: 0.03},
    armor: 360,
    type: 'medium',
    level: 50,
    rarity: 'epic'
  }),
  CyclopsMediumPants: new Boots({
    name: 'Cyclops Medium Boots',
    stats: {agility: 7, stamina: 3, coldResistance: 0.08, buffDuration: 0.05},
    armor: 203,
    type: 'medium',
    level: 42,
    rarity: 'epic'
  }),




  CopperBoots: new Boots({
    name: 'Copper Boots',
    stats: {strength: 1},
    armor: 55,
    type: 'heavy',
  }),
  IronBoots: new Boots({
    name: 'Iron Boots',
    stats: {strength: 3},
    armor: 120,
    type: 'heavy',
    level: 8,
  }),
  SilverBoots: new Boots({
    name: 'Silver Boots',
    stats: {strength: 4},
    armor: 200,
    type: 'heavy',
    level: 17,
    rarity: 'uncommon'
  }),
  PlatinumBoots: new Boots({
    name: 'Platinum Boots',
    stats: {strength: 6},
    armor: 300,
    type: 'heavy',
    level: 27,
    rarity: 'uncommon'
  }),
  CrabBoots: new Boots({
    name: 'Crab Boots',
    stats: {strength: 6, spirit: 6, stamina: 1, speedBoost: -0.02},
    armor: 475,
    type: 'heavy',
    level: 28,
    rarity: 'uncommon'
  }),
  MithrilBoots: new Boots({
    name: 'Mithril Boots',
    stats: {strength: 10, stamina: 3},
    armor: 400,
    type: 'heavy',
    level: 33,
    rarity: 'uncommon'
  }),
  WarTrollBoots: new Boots({
    name: 'War Troll Boots',
    stats: {strength: 11, stamina: 4},
    armor: 425,
    type: 'heavy',
    level: 39,
    rarity: 'rare'
  }),
  ZircBoots: new Boots({
    name: 'Zirc Boots',
    stats: {strength: 12, stamina: 5, physicalPierce: 0.01, physicalAttack: 0.01},
    armor: 400,
    type: 'heavy',
    level: 42,
    rarity: 'uncommon'
  }),
  AbyssalBoots: new Boots({
    name: 'Abyssal Boots',
    stats: {strength: 22, critDefense: 0.04},
    armor: 500,
    type: 'heavy',
    level: 40,
    rarity: 'epic'
  }),
  BastionBoots: new Boots({
    name: 'Bastion Boots',
    stats: {strength: 22, critDefense: 0.04},
    armor: 500,
    type: 'heavy',
    level: 40,
    rarity: 'epic'
  }),
  FrostscaleGreaves: new Boots({
    name: 'Frostscale Greaves',
    stats: {strength: 24, stamina: 2, critChance: 0.02, holyResistance: 0.05,
      coldResistance: 0.15, critDefense: 0.02},
    armor: 625,
    type: 'heavy',
    level: 40,
    rarity: 'epic'
  }),
  MammothWarriorsBoots: new Boots({
    name: 'Mammoth Warrior\'s Boots',
    stats: {strength: 18, stamina: 4, critDefense: 0.1, speedBoost: -0.02,
      holyResistance: 0.1, coldResistance: 0.2},
    armor: 700,
    type: 'heavy',
    level: 45,
    rarity: 'epic'
  }),
  BrimfrostBoots: new Boots({
    name: 'Brimfrost Boots',
    stats: {strength: 30, spirit: 4, critChance: 0.02, coldResistance: 0.15},
    armor: 450,
    type: 'heavy',
    level: 45,
    rarity: 'epic'
  }),
  CyclopsHeavyBoots: new Boots({
    name: 'Cyclops Heavy Boots',
    stats: {strength: 18, magicResistance: 0.03, coldResistance: 0.09},
    armor: 321,
    type: 'heavy',
    level: 45,
    rarity: 'epic'
  }),
  
};

const itemsDatabaseWeapons = {
  CopperDagger: new Weapon({
    name: 'Copper Dagger',
    damage: {physical: 3},
    type: 'dagger',
  }),
  IronDagger: new Weapon({
    name: 'Iron Dagger',
    damage: {physical: 5},
    type: 'dagger',
    level: 8,
  }),
  WolfToothDagger: new Weapon({
    name: 'Wolf Tooth Dagger',
    damage: {physical: 6},
    stats: {agility: 4},
    type: 'dagger',
    level: 11,
    rarity: 'uncommon'
  }),
  SplintedDagger: new Weapon({
    name: 'Splinted Dagger',
    damage: {physical: 7},
    stats: {agility: 7},
    type: 'dagger',
    level: 14,
    rarity: 'uncommon'
  }),
  RatCarver: new Weapon({
    name: 'Rat Carver',
    damage: {physical: 7},
    stats: {agility: 4},
    type: 'dagger',
    level: 15,
    rarity: 'uncommon',
    description: 'Chance on hit to make your target bleed.'
  }),
  SimpleDagger: new Weapon({
    name: 'Simple Dagger',
    damage: {physical: 8},
    stats: {spirit: 2, agility: 4},
    type: 'dagger',
    level: 15,
    rarity: 'uncommon',
  }),
  SilverDagger: new Weapon({
    name: 'Silver Dagger',
    damage: {physical: 7},
    type: 'dagger',
    level: 17,
    rarity: 'uncommon'
  }),
  SpidersClaw: new Weapon({
    name: 'Spider\'s Claw',
    damage: {physical: 8},
    stats: {spirit: 2, agility: 9},
    type: 'dagger',
    level: 23,
    rarity: 'uncommon'
  }),
  SerpentDagger: new Weapon({
    name: 'Serpent Dagger',
    damage: {physical: 10},
    stats: {spirit: 4, agility: 8},
    type: 'dagger',
    level: 25,
    rarity: 'uncommon',
    description: '8% Chance to inflict poison'
  }),
  CrocSlicer: new Weapon({
    name: 'Croc Slicer',
    damage: {physical: 9},
    stats: {strength: 7, spirit: 4},
    type: 'dagger',
    level: 25,
    rarity: 'uncommon'
  }),
  PlatinumDagger: new Weapon({
    name: 'Platinum Dagger',
    damage: {physical: 9},
    type: 'dagger',
    level: 27,
    rarity: 'uncommon'
  }),
  ButcherKnife: new Weapon({
    name: 'Butcher Knife',
    damage: {physical: 11},
    stats: {strength: 6, spirit: 4},
    type: 'dagger',
    level: 30,
    rarity: 'uncommon',
    description: 'Chance on hit to make your target bleed.',
  }),
  MithrilDagger: new Weapon({
    name: 'Mithril Dagger',
    damage: {physical: 12},
    type: 'dagger',
    level: 33,
    rarity: 'uncommon'
  }),
  ZircDagger: new Weapon({
    name: 'Zirc Dagger',
    damage: {physical: 15},
    type: 'dagger',
    level: 42,
    rarity: 'uncommon'
  }),
  CobaltDagger: new Weapon({
    name: 'Cobalt Dagger',
    damage: {physical: 18},
    type: 'dagger',
    level: 45,
    rarity: 'uncommon'
  }),
  SabertoothDagger: new Weapon({
    name: 'Sabertooth Dagger',
    damage: {physical: 12},
    stats: {agility: 21, critChance: 0.03},
    type: 'dagger',
    level: 43,
    rarity: 'rare'
  }),
  SanguineThorn: new Weapon({
    name: 'Sanguine Thorn',
    damage: {physical: 12},
    stats: {agility: 28, stamina: 5, critChance: 0.035, holyResistance: 0.05},
    type: 'dagger',
    level: 35,
    rarity: 'epic',
    description: 'Chance on hit to make your target bleed badly.'
  }),
  ArachnidsBite: new Weapon({
    name: 'Arachnids Bite',
    damage: {physical: 12},
    stats: {spirit: 4, agility: 18, critChance: 0.01},
    type: 'dagger',
    level: 40,
    rarity: 'epic',
    description: 'Chance on hit to create a venom pool on the floor.'
  }),
  DireBearDagger: new Weapon({
    name: 'Dire Bear Dagger',
    damage: {physical: 12},
    stats: {agility: 15, stamina: 3},
    type: 'dagger',
    level: 40,
    rarity: 'epic',
    description: 'The more hungry you are the bigger the physical damage buff.'
  }),
  ElysianDagger: new Weapon({
    name: 'Elysian Dagger',
    damage: {physical: 12},
    stats: {agility: 20, critChance: 0.02, physicalPierce: 0.03},
    type: 'dagger',
    level: 40,
    rarity: 'epic',
  }),
  NightPiercer: new Weapon({
    name: 'Night Piercer',
    damage: {physical: 12},
    stats: {agility: 20, critChance: 0.02, physicalPierce: 0.03},
    type: 'dagger',
    level: 40,
    rarity: 'epic',
  }),
  Ragnarok: new Weapon({
    name: 'Ragnarok',
    damage: {physical: 13},
    stats: {agility: 23, stamina: 5, critChance: 0.02},
    type: 'dagger',
    level: 40,
    rarity: 'legendary',
    description: 'Critical hits unleash a dragon\'s roar, slowing all targets hit by 40% for 6 seconds.'
  }),
  Hivepiercer: new Weapon({
    name: 'Hivepiercer',
    damage: {physical: 12},
    stats: {agility: 25, stamina: 2, critChance: 0.03},
    type: 'dagger',
    level: 40,
    rarity: 'legendary',
    description: 'Critical hits give 30% physical pierce for 10 seconds (5s cooldown).'
  }),
  DreadDagger: new Weapon({
    name: 'Dread Dagger',
    damage: {physical: 15},
    stats: {spirit: 5, agility: 20, critChance: 0.03},
    type: 'dagger',
    level: 40,
    rarity: 'legendary',
    description: 'Stacks Lesser Dread on enemies, causing bonus damage at max stacks.'
  }),
  VoidFrost: new Weapon({
    name: 'Void Frost',
    damage: {physical: 14},
    stats: {agility: 20, stamina: 2, critChance: 0.02, physicalPierce: 0.01},
    type: 'dagger',
    level: 50,
    rarity: 'legendary',
    description: 'Builds Void stacks on hit, reducing enemy damage (max 10%)'
  }),




  LightLeatherGloves: new Weapon({
    name: 'Light Leather Gloves',
    damage: {physical: 4},
    type: 'gauntlet',
  }),
  MediumLeatherGloves: new Weapon({
    name: 'Medium Leather Gloves',
    damage: {physical: 6},
    type: 'gauntlet',
    level: 8,
  }),
  KnuckleDusters: new Weapon({
    name: 'Knuckle Dusters',
    damage: {physical: 8},
    stats: {strength: 4, spirit: 2},
    type: 'gauntlet',
    level: 15,
    rarity: 'uncommon',
  }),
  HeavyLeatherGloves: new Weapon({
    name: 'Heavy Leather Gloves',
    damage: {physical: 8},
    type: 'gauntlet',
    level: 17,
    rarity: 'uncommon'
  }),
  BearClaws: new Weapon({
    name: 'Bear Claws',
    damage: {physical: 9},
    stats: {strength: 4, spirit: 4},
    type: 'gauntlet',
    level: 19,
    rarity: 'uncommon'
  }),
  PantherClaws: new Weapon({
    name: 'Panther Claws',
    damage: {physical: 11},
    stats: {strength: 7, spirit: 4},
    type: 'gauntlet',
    level: 23,
    rarity: 'uncommon'
  }),
  DemonGauntlets: new Weapon({
    name: 'Demon Gauntlets',
    damage: {physical: 9, fire: 2},
    stats: {strength: 10},
    type: 'gauntlet',
    level: 35,
    rarity: 'uncommon'
  }),
  ElderGauntlets: new Weapon({
    name: 'Elder Gauntlets',
    damage: {physical: 13},
    stats: {strength: 19, spirit: 10},
    type: 'gauntlet',
    level: 35,
    rarity: 'epic'
  }),
  DireBearGloves: new Weapon({
    name: 'Dire Bear Gloves',
    damage: {physical: 12},
    stats: {strength: 15, stamina: 2},
    type: 'gauntlet',
    level: 40,
    rarity: 'epic',
    description: 'The more hungry you are the bigger the physical damage buff.'
  }),
  GauntletsOfDevotion: new Weapon({
    name: 'Gauntlets of Devotion',
    damage: {physical: 13},
    stats: {agility: 8, critChance: 0.02, physicalPierce: 0.03},
    type: 'gauntlet',
    level: 40,
    rarity: 'epic',
  }),
  ProfanedGauntlets: new Weapon({
    name: 'Profaned Gauntlets',
    damage: {physical: 13},
    stats: {agility: 8, critChance: 0.02, physicalPierce: 0.03},
    type: 'gauntlet',
    level: 40,
    rarity: 'epic',
  }),
  AsurasGauntlets: new Weapon({
    name: 'Asura\'s Gauntlets',
    damage: {physical: 14},
    stats: {strength: 27, spirit: 14, physicalPierce: 0.05},
    type: 'gauntlet',
    level: 40,
    rarity: 'legendary',
    description: 'Gain Fury stacks when hit, dealing bonus damage at max stacks.'
  }),
  Iskarion: new Weapon({
    name: 'Iskarion',
    damage: {physical: 15},
    stats: {strength: 35, spirit: 16, physicalPierce: 0.06},
    type: 'gauntlet',
    level: 50,
    rarity: 'legendary',
    description: 'Slow down your target for 40% for 6 seconds upon landing your Weapon Art.'
  }),
  DireWolfGauntlets: new Weapon({
    name: 'Dire Wolf Gauntlets',
    damage: {physical: 13},
    stats: {strength: 26, agility: 15},
    type: 'gauntlet',
    level: 45,
    rarity: 'legendary',
    description: 'Chance on hit to make your target bleed.'
  }),
  YetiGauntlets: new Weapon({
    name: 'Yeti Gauntlets',
    damage: {physical: 15},
    stats: {strength: 28, spirit: 5, stamina: 10, physicalPierce: 0.06},
    type: 'gauntlet',
    level: 48,
    rarity: 'legendary',
  }),




  CopperSword: new Weapon({
    name: 'Copper Sword',
    damage: {physical: 5},
    type: 'sword',
  }),
  IronSword: new Weapon({
    name: 'Iron Sword',
    damage: {physical: 7},
    type: 'sword',
    level: 8,
  }),
  Klinge: new Weapon({
    name: 'Klinge',
    damage: {physical: 9},
    stats: {strength: 4},
    type: 'sword',
    level: 15,
    rarity: 'uncommon',
    description: 'Chance on hit to make your target bleed'
  }),
  SilverSword: new Weapon({
    name: 'Silver Sword',
    damage: {physical: 8},
    type: 'sword',
    level: 17,
    rarity: 'uncommon'
  }),
  SimpleSword: new Weapon({
    name: 'Simple Sword',
    damage: {physical: 8},
    stats: {strength: 4, spirit: 2},
    type: 'sword',
    level: 18,
    rarity: 'uncommon',
  }),
  TuskenBlade: new Weapon({
    name: 'Tusken Blade',
    damage: {physical: 11},
    stats: {strength: 4, spirit: 2},
    type: 'sword',
    level: 20,
    rarity: 'uncommon'
  }),
  LionsClaw: new Weapon({
    name: 'Lions Claw',
    damage: {physical: 12},
    stats: {strength: 7, spirit: 5},
    type: 'sword',
    level: 23,
    rarity: 'uncommon',
  }),
  PlatinumSword: new Weapon({
    name: 'Platinum Sword',
    damage: {physical: 11},
    type: 'sword',
    level: 27,
    rarity: 'uncommon'
  }),
  MythrilSword: new Weapon({
    name: 'Mythril Sword',
    damage: {physical: 14},
    type: 'sword',
    level: 33,
    rarity: 'uncommon'
  }),
  ZircSword: new Weapon({
    name: 'Zirc Sword',
    damage: {physical: 17},
    type: 'sword',
    level: 42,
    rarity: 'uncommon'
  }),
  CobaltSword: new Weapon({
    name: 'Cobalt Sword',
    damage: {physical: 20},
    type: 'sword',
    level: 45,
    rarity: 'uncommon'
  }),
  BasilisksBlade: new Weapon({
    name: 'Basilisk\'s Blade',
    damage: {physical: 13},
    stats: {strength: 8, stamina: 3},
    type: 'sword',
    level: 30,
    rarity: 'rare'
  }),
  BeastmanSword: new Weapon({
    name: 'Beastman Sword',
    damage: {physical: 14},
    stats: {strength: 16, stamina: 10, spirit: 5},
    type: 'sword',
    level: 33,
    rarity: 'rare'
  }),
  FiendclawBlade: new Weapon({
    name: 'Fiendclaw Blade',
    damage: {physical: 9, fire: 2},
    stats: {strength: 9, spirit: 4},
    type: 'sword',
    level: 35,
    rarity: 'rare'
  }),
  Cutlass: new Weapon({
    name: 'Cutlass',
    damage: {physical: 14},
    stats: {strength: 21, agility: 8, physicalPierce: 0.04},
    type: 'sword',
    level: 42,
    rarity: 'rare'
  }),
  SanguineBlade: new Weapon({
    name: 'Sanguine Blade',
    damage: {physical: 12},
    stats: {strength: 8, spirit: 8},
    type: 'sword',
    level: 35,
    rarity: 'epic',
    description: 'Chance on hit to make your target bleed badly'
  }),
  DireBearSword: new Weapon({
    name: 'Dire Bear Sword',
    damage: {physical: 9},
    stats: {strength: 9, spirit: 4},
    type: 'sword',
    level: 40,
    rarity: 'epic',
    description: 'The more hungry you are the bigger the physical damage buff.'
  }),
  BlackOmen: new Weapon({
    name: 'Black Omen',
    damage: {physical: 14},
    stats: {strength: 17, critChance: 0.02, physicalPierce: 0.03},
    type: 'sword',
    level: 40,
    rarity: 'epic',
  }),
  Solarius: new Weapon({
    name: 'Solarius',
    damage: {physical: 14},
    stats: {strength: 17, critChance: 0.02, physicalPierce: 0.03},
    type: 'sword',
    level: 40,
    rarity: 'epic',
  }),
  Viridian: new Weapon({
    name: 'Viridian',
    damage: {physical: 15},
    stats: {strength: 24, stamina: 6, critChance: 0.01, physicalPierce: 0.03},
    type: 'sword',
    level: 40,
    rarity: 'legendary',
    description: 'Applies stackable Blighted debuff (reduces defense by 5% per stack).'
  }),
  RunicCutlass: new Weapon({
    name: 'Runic Cutlass',
    damage: {physical: 17},
    stats: {strength: 27, agility: 10, critChance: 0.02, physicalPierce: 0.08},
    type: 'sword',
    level: 50,
    rarity: 'legendary',
  }),




  IronSpear: new Weapon({
    name: 'Iron Spear',
    damage: {physical: 6},
    type: 'spear',
    level: 8,
  }),
  SplintedSpear: new Weapon({
    name: 'Splinted Spear',
    damage: {physical: 9},
    stats: {strength: 7},
    type: 'spear',
    level: 12,
    rarity: 'uncommon'
  }),
  IceGolemSpear: new Weapon({
    name: 'Ice Golem Spear',
    damage: {physical: 12},
    stats: {strength: 18, stamina: 8, physicalPierce: 0.025},
    type: 'spear',
    level: 45,
    rarity: 'epic'
  }),
  Hellpiercer: new Weapon({
    name: 'Hellpiercer',
    damage: {physical: 11, fire: 4},
    stats: {strength: 16, critChance: 0.02, physicalPierce: 0.05},
    type: 'spear',
    level: 40,
    rarity: 'legendary'
  }),
  Austeris: new Weapon({
    name: 'Austeris',
    damage: {physical: 12},
    stats: {strength: 20, critChance: 0.02, physicalPierce: 0.03},
    type: 'spear',
    level: 50,
    rarity: 'legendary',
    description: 'Attacks apply Chill stacks (2% slow per stack, max 20%).'
  }),

  Tyle: new Weapon({
    name: 'Tyle',
    damage: {physical: 11},
    stats: {strength: 18, stamina: 6, critChance: 0.01, physicalPierce: 0.03},
    type: 'tyle',
    level: 40,
    rarity: 'legendary',
    description: '3% Hemorrhage buildup on each hit.'
  }),





  SplintedClub: new Weapon({
    name: 'Splinted Club',
    damage: {physical: 10},
    stats: {strength: 7},
    type: 'hatchet',
    level: 12,
    rarity: 'uncommon'
  }),




    CopperGreatsword: new Weapon({
    name: 'Copper Greatsword',
    damage: {physical: 8},
    type: 'greatsword',
  }),
  IronGreatsword: new Weapon({
    name: 'Iron Greatsword',
    damage: {physical: 10},
    type: 'greatsword',
    level: 8,
  }),
  SilverGreatsword: new Weapon({
    name: 'Silver Greatsword',
    damage: {physical: 12},
    type: 'greatsword',
    level: 17,
    rarity: 'uncommon'
  }),
  ChampionCleaver: new Weapon({
    name: 'Champion Cleaver',
    damage: {physical: 14},
    stats: {strength: 8},
    type: 'greatsword',
    level: 19,
    rarity: 'uncommon'
  }),
  PlatinumGreatsword: new Weapon({
    name: 'Platinum Greatsword',
    damage: {physical: 14},
    type: 'greatsword',
    level: 27,
    rarity: 'uncommon'
  }),
  MithrilGreatsword: new Weapon({
    name: 'Mithril Greatsword',
    damage: {physical: 17},
    type: 'greatsword',
    level: 33,
    rarity: 'uncommon'
  }),
  ZircGreatsword: new Weapon({
    name: 'Zirc Greatsword',
    damage: {physical: 20},
    type: 'greatsword',
    level: 42,
    rarity: 'uncommon'
  }),
  CobaltGreatsword: new Weapon({
    name: 'Cobalt Greatsword',
    damage: {physical: 23},
    type: 'greatsword',
    level: 45,
    rarity: 'uncommon'
  }),
  BasiliskGreatblade: new Weapon({
    name: 'Basilisk Greatblade',
    damage: {physical: 15},
    stats: {strength: 10, spirit: 6, stamina: 6},
    type: 'greatsword',
    level: 30,
    rarity: 'rare'
  }),
  DemonicGreatsword: new Weapon({
    name: 'Demonic Greatsword',
    damage: {physical: 12, fire: 3},
    stats: {strength: 13, stamina: 2},
    type: 'greatsword',
    level: 38,
    rarity: 'rare'
  }),
  Judicator: new Weapon({
    name: 'Judicator',
    damage: {physical: 16},
    stats: {strength: 18, critChance: 0.02, physicalPierce: 0.03},
    type: 'greatsword',
    level: 40,
    rarity: 'epic',
  }),
  DoomCarver: new Weapon({
    name: 'Doom Carver',
    damage: {physical: 16},
    stats: {strength: 18, critChance: 0.02, physicalPierce: 0.03},
    type: 'greatsword',
    level: 40,
    rarity: 'epic',
  }),
  SanguineGreatsword: new Weapon({
    name: 'Sanguine Greatsword',
    damage: {physical: 18},
    stats: {strength: 27, stamina: 12, holyResistance: 0.075},
    type: 'greatsword',
    level: 40,
    rarity: 'epic',
    description: 'Chance to cause severe bleeding.'
  }),
  SandShooter: new Weapon({
    name: 'Sand Shooter',
    damage: {physical: 18},
    stats: {strength: 16, stamina: 4},
    type: 'greatsword',
    level: 40,
    rarity: 'legendary',
    description: 'Summons damaging sandstorm around user'
  }),
  GoblinKingsClub: new Weapon({
    name: 'Goblin Kings Club',
    damage: {physical: 19},
    stats: {strength: 24, physicalPierce: 0.03, critChance: 0.02},
    type: 'greatsword',
    level: 40,
    rarity: 'legendary'
  }),

  SuveriasRuneblade: new Weapon({
    name: 'Suveria\'s Runeblade',
    damage: {physical: 11, holy: 8},
    stats: {strength: 14, spirit: 20},
    type: 'greatsword',
    level: 40,
    rarity: 'legendary'
  }),
  Rimehowl: new Weapon({
    name: 'Rimehowl',
    damage: {physical: 20},
    stats: {strength: 28, stamina: 8, physicalPierce: 0.04},
    type: 'greatsword',
    level: 50,
    rarity: 'legendary',
    description: 'Running attacks grant 18% speed boost (12s duration, 9s cooldown). For the first 3 seconds of the passive, crit charges 25% faster.'
  }),




  IronGreataxe: new Weapon({
    name: 'Iron Greataxe',
    damage: {physical: 10},
    type: 'greataxe',
    level: 8,
  }),
  Anchor: new Weapon({
    name: 'Anchor',
    damage: {physical: 16},
    stats: {stamina: 5},
    type: 'greataxe',
    level: 30,
    rarity: 'rare',
  }),
  TrollsStoneColumn: new Weapon({
    name: 'Troll\'s Stone Column',
    damage: {physical: 17},
    stats: {physicalPierce: 0.05},
    type: 'greataxe',
    level: 39,
    rarity: 'rare'
  }),
  EdgeWing: new Weapon({
    name: 'Edge Wing',
    damage: {physical: 16},
    stats: {strength: 16, stamina: 2},
    type: 'greataxe',
    level: 35,
    rarity: 'epic'
  }),
  DariusGreataxe: new Weapon({
    name: 'Darius\' Greataxe',
    damage: {physical: 12, fire: 10},
    stats: {strength: 16, stamina: 5},
    type: 'greataxe',
    level: 45,
    rarity: 'epic'
  }),
  YetiAxe: new Weapon({
    name: 'Yeti Axe',
    damage: {physical: 23},
    stats: {strength: 35, spirit: 15, stamina: 15},
    type: 'greataxe',
    level: 48,
    rarity: 'epic'
  }),
  Cataclysm: new Weapon({
    name: 'Cataclysm',
    damage: {physical: 18},
    stats: {strength: 20, stamina: 5, physicalPierce: 0.03},
    type: 'greataxe',
    level: 40,
    rarity: 'legendary'
  }),
  RubyReaver: new Weapon({
    name: 'Ruby Reaver',
    damage: {physical: 16},
    stats: {strength: 14, stamina: 4, fireResistance: 0.07},
    type: 'greataxe',
    level: 40,
    rarity: 'legendary'
  }),




  CopperKatana: new Weapon({
    name: 'Copper Katana',
    damage: {physical: 5},
    type: 'katana',
  }),
  IronKatana: new Weapon({
    name: 'Iron Katana',
    damage: {physical: 7},
    type: 'katana',
    level: 8,
  }),
  SimpleKatana: new Weapon({
    name: 'Simple Katana',
    damage: {physical: 9},
    stats: {spirit: 2, agility: 4},
    type: 'katana',
    level: 15,
    rarity: 'uncommon',
  }),
  SilverKatana: new Weapon({
    name: 'Silver Katana',
    damage: {physical: 9},
    type: 'katana',
    level: 17,
    rarity: 'uncommon'
  }),
  PlatinumKatana: new Weapon({
    name: 'Platinum Katana',
    damage: {physical: 11},
    type: 'katana',
    level: 27,
    rarity: 'uncommon'
  }),
  MithrilKatana: new Weapon({
    name: 'Mithril Katana',
    damage: {physical: 14},
    type: 'katana',
    level: 33,
    rarity: 'uncommon'
  }),
  ZircKatana: new Weapon({
    name: 'Zirc Katana',
    damage: {physical: 17},
    type: 'katana',
    level: 42,
    rarity: 'uncommon'
  }),
  CobaltKatana: new Weapon({
    name: 'Cobalt Katana',
    damage: {physical: 20},
    type: 'katana',
    level: 45,
    rarity: 'uncommon'
  }),
  TraditionalKatana: new Weapon({
    name: 'Traditional Katana',
    damage: {physical: 12},
    stats: {strength: 4, agility: 10, stamina: 4},
    type: 'katana',
    level: 20,
    rarity: 'rare',
    description: 'Critical hits unleash fiery arrows that strike nearby enemies.'
  }),
  SerpentKatana: new Weapon({
    name: 'Serpent Katana',
    damage: {physical: 13},
    stats: {strength: 6, agility: 10, stamina: 2},
    type: 'katana',
    level: 24,
    rarity: 'rare',
    description: '15% chance to poison target.'
  }),
  Shizukari: new Weapon({
    name: 'Shizukari',
    damage: {physical: 17},
    stats: {strength: 10, agility: 17, stamina: 8},
    type: 'katana',
    level: 45,
    rarity: 'rare'
  }),
  SanguineKen: new Weapon({
    name: 'Sanguine Ken',
    damage: {physical: 14},
    stats: {strength: 8, agility: 18, stamina: 8, holyResistance: 0.02},
    type: 'katana',
    level: 35,
    rarity: 'epic',
    description: 'Chance to cause bleeding.'
  }),
  TarnishedKubikiri: new Weapon({
    name: 'Tarnished Kubikiri',
    damage: {physical: 16},
    stats: {strength: 10, agility: 25, stamina: 10},
    type: 'katana',
    level: 50,
    rarity: 'legendary',
    description: '6% Hemorrhage buildup and chance to bleed.'
  }),
  Sanguinaire: new Weapon({
    name: 'Sanguinaire',
    damage: {physical: 18, fire: 4},
    stats: {strength: 18, agility: 27, stamina: 10, holyResistance: -0.05},
    type: 'katana',
    level: 50,
    rarity: 'legendary',
    description: 'You are attuned to the blood of Velor Yth Carven, your Agility is increased based off your Strength.'
  }),





  OakBow: new Weapon({
    name: 'Oak Bow',
    damage: {physical: 3},
    type: 'bow',
  }),
  PineBow: new Weapon({
    name: 'Pine Bow',
    damage: {physical: 5},
    type: 'bow',
    level: 8,
  }),
  AdventurersBow: new Weapon({
    name: 'Adventurer\'s Bow',
    damage: {physical: 7},
    stats: {agility: 6, critChance: 0.01},
    type: 'bow',
    level: 15,
    rarity: 'uncommon'
  }),
  HuntingBow: new Weapon({
    name: 'Hunting Bow',
    damage: {physical: 7},
    stats: {agility: 2, spirit: 2},
    type: 'bow',
    level: 15,
    rarity: 'uncommon',
  }),
  ElderwoodBow: new Weapon({
    name: 'Elderwood Bow',
    damage: {physical: 7},
    type: 'bow',
    level: 17,
    rarity: 'uncommon'
  }),
  BearBow: new Weapon({
    name: 'Bear Bow',
    damage: {physical: 7},
    stats: {agility: 4, spirit: 4},
    type: 'bow',
    level: 19,
    rarity: 'uncommon'
  }),
  TuskhornBow: new Weapon({
    name: 'Tuskhorn Bow',
    damage: {physical: 9},
    stats: {agility: 4, stamina: 4},
    type: 'bow',
    level: 20,
    rarity: 'uncommon'
  }),
  SpiderLegBow: new Weapon({
    name: 'Spider Leg Bow',
    damage: {physical: 9},
    stats: {agility: 8, spirit: 2},
    type: 'bow',
    level: 23,
    rarity: 'uncommon'
  }),
  LakewoodBow: new Weapon({
    name: 'Lakewood Bow',
    damage: {physical: 9},
    type: 'bow',
    level: 27,
    rarity: 'uncommon'
  }),
  CrabBow: new Weapon({
    name: 'Crab Bow',
    damage: {physical: 10},
    stats: {agility: 8, spirit: 8},
    type: 'bow',
    level: 28,
    rarity: 'uncommon'
  }),
  PalmBow: new Weapon({
    name: 'Palm Bow',
    damage: {physical: 11},
    stats: {agility: 18, spirit: 5, critChance: 0.01},
    type: 'bow',
    level: 42,
    rarity: 'uncommon'
  }),
  TrollTuskBow: new Weapon({
    name: 'Troll Tusk Bow',
    damage: {physical: 12},
    stats: {agility: 12, stamina: 1, physicalPierce: 0.05},
    type: 'bow',
    level: 39,
    rarity: 'rare'
  }),
  SabertoothBow: new Weapon({
    name: 'Sabertooth Bow',
    damage: {physical: 14},
    stats: {agility: 24, spirit: 4, critChance: 0.01},
    type: 'bow',
    level: 43,
    rarity: 'rare'
  }),
  ArachnidsShot: new Weapon({
    name: 'Arachnids Shot',
    damage: {physical: 12},
    stats: {agility: 19, spirit: 3, critChance: 0.02},
    type: 'bow',
    level: 40,
    rarity: 'epic',
    description: 'Chance to fire a spread of string shots.'
  }),
  DireBearBow: new Weapon({
    name: 'Dire Bear Bow',
    damage: {physical: 12},
    stats: {agility: 16, spirit: 3, stamina: 3},
    type: 'bow',
    level: 40,
    rarity: 'epic',
    description: 'Physical damage buff scales with hunger.'
  }),
  HallowedBow: new Weapon({
    name: 'Hallowed Bow',
    damage: {physical: 12},
    stats: {agility: 21, critChance: 0.02, physicalPierce: 0.03},
    type: 'bow',
    level: 40,
    rarity: 'epic',
  }),
  VoidPiercer: new Weapon({
    name: 'Void Piercer',
    damage: {physical: 12},
    stats: {agility: 21, critChance: 0.02, physicalPierce: 0.03},
    type: 'bow',
    level: 40,
    rarity: 'epic',
  }),
  SanguineGreatbow: new Weapon({
    name: 'Sanguine Greatbow',
    damage: {physical: 14},
    stats: {agility: 25, stamina: 5, critDamage: 0.05, critChance: 0.02, holyResistance: 0.05},
    type: 'bow',
    level: 40,
    rarity: 'epic',
    description: 'Chance on hit to make your target bleed.'
  }),
  Vermillion: new Weapon({
    name: 'Vermillion',
    damage: {physical: 13},
    stats: {agility: 26, spirit: 8, critChance: 0.02},
    type: 'bow',
    level: 40,
    rarity: 'legendary',
    description: 'Critical hits unleash fiery arrows that strike nearby enemies.'
  }),
  Hiveseeker: new Weapon({
    name: 'Hiveseeker',
    damage: {physical: 15},
    stats: {spirit: 5, agility: 26, critChance: 0.03},
    type: 'bow',
    level: 40,
    rarity: 'legendary',
    description: 'Landing a critical hit with your M1/Weapon Art will cause Hiveseeker to summon a bee that fights for you. Disappears after 40 seconds, 5 second cooldown.'
  }),
  Boreastria: new Weapon({
    name: 'Boreastria',
    damage: {physical: 15},
    stats: {agility: 30, spirit: 10, critChance: 0.04},
    type: 'bow',
    level: 50,
    rarity: 'legendary',
    description: 'Attacks summon Ice Spikes (10s cooldown).'
  }),




  OakStaff: new Weapon({
    name: 'Oak Staff',
    damage: {physical: 4},
    stats: {intellect: 4},
    type: 'staff',
    level: 1,
  }),
  PineStaff: new Weapon({
    name: 'Pine Staff',
    damage: {physical: 6},
    stats: {intellect: 8},
    type: 'staff',
    level: 8,
  }),
  RootStaff: new Weapon({
    name: 'Root Staff',
    damage: {physical: 8},
    stats: {intellect: 10},
    type: 'staff',
    level: 10,
  }),
  QuarterStaff: new Weapon({
    name: 'Quarter Staff',
    damage: {physical: 8},
    stats: {intellect: 12, spirit: 2},
    type: 'staff',
    level: 15,
    rarity: 'uncommon',
  }),
  SlimeStaff: new Weapon({
    name: 'Slime Staff',
    damage: {physical: 8},
    stats: {intellect: 12},
    type: 'staff',
    level: 16,
    rarity: 'uncommon',
    description: 'Melee attacks on poisoned enemies heal you.'
  }),
  ElderwoodStaff: new Weapon({
    name: 'Elderwood Staff',
    damage: {physical: 8},
    stats: {intellect: 12},
    type: 'staff',
    level: 17,
    rarity: 'uncommon'
  }),
  SpiderStaff: new Weapon({
    name: 'Spider Staff',
    damage: {physical: 9},
    stats: {intellect: 14, spirit: 2},
    type: 'staff',
    level: 23,
    rarity: 'uncommon'
  }),
  LakewoodStaff: new Weapon({
    name: 'Lakewood Staff',
    damage: {physical: 10},
    stats: {intellect: 16},
    type: 'staff',
    level: 27,
    rarity: 'uncommon'
  }),
  SpectreStaff: new Weapon({
    name: 'Spectre Staff',
    damage: {physical: 10},
    stats: {intellect: 14, spirit: 8},
    type: 'staff',
    level: 31,
    rarity: 'uncommon',
    description: 'Chance to fire spectre bolts.'
  }),
  PalmStaff: new Weapon({
    name: 'Palm Staff',
    damage: {physical: 12},
    stats: {intellect: 24, spirit: 10, magicCritChance: 0.01},
    type: 'staff',
    level: 42,
    rarity: 'uncommon'
  }),
  FrostpineStaff: new Weapon({
    name: 'Frostpine Staff',
    damage: {physical: 16},
    stats: {intellect: 28, spirit: 14, magicCritChance: 0.02},
    type: 'staff',
    level: 45,
    rarity: 'uncommon'
  }),
  ImpStaff: new Weapon({
    name: 'Imp Staff',
    damage: {physical: 10},
    stats: {intellect: 16, spirit: 8, fireAttack: 0.10},
    type: 'staff',
    level: 35,
    rarity: 'rare'
  }),
  KingSlimeStaff: new Weapon({
    name: 'King Slime Staff',
    damage: {physical: 11},
    stats: {intellect: 23, spirit: 2},
    type: 'staff',
    level: 35,
    rarity: 'epic',
    description: 'Melee attacks on poisoned enemies heal you.'
  }),
  ArachnidsStaff: new Weapon({
    name: 'Arachnids Staff',
    damage: {physical: 11},
    stats: {intellect: 26, spirit: 4, magicCritChance: 0.01},
    type: 'staff',
    level: 40,
    rarity: 'epic',
    description: 'Chance to summon venom pools.'
  }),
  DivineConcord: new Weapon({
    name: 'Divine Concord',
    damage: {physical: 11},
    stats: {intellect: 25, magicCritChance: 0.02, magicPierce: 0.03},
    type: 'staff',
    level: 40,
    rarity: 'epic',
  }),
  InfernalCovenant: new Weapon({
    name: 'Infernal Covenant',
    damage: {physical: 11},
    stats: {intellect: 25, magicCritChance: 0.02, magicPierce: 0.03},
    type: 'staff',
    level: 40,
    rarity: 'epic'
  }),
  Armageddon: new Weapon({
    name: 'Armageddon',
    damage: {physical: 12},
    stats: {intellect: 34, spirit: 8, magicCritChance: 0.03},
    type: 'staff',
    level: 40,
    rarity: 'legendary',
    description: 'Chance to erupt hellfire (6s cooldown).'
  }),
  RevenantsGrasp: new Weapon({
    name: 'Revenant\'s Grasp',
    damage: {physical: 13},
    stats: {intellect: 25, spirit: 15, magicCritChance: 0.03},
    type: 'staff',
    level: 40,
    rarity: 'legendary',
    description: 'Magical strikes build Dread (5% max HP damage at max stacks).'
  }),
  SuveriasStaff: new Weapon({
    name: 'Suveria\'s Staff',
    damage: {physical: 11},
    stats: {intellect: 10, spirit: 25, magicCritChance: 0.02},
    type: 'staff',
    level: 40,
    rarity: 'legendary',
    description: 'A beacon of light. Landing a Magical ability has a 25% chance to proc a massive healing circle, healing you and your allies. Holy abilities will instead have a 33% chance. This passive\'s healing scales off of your priest level. Furthermore, it has a 30 second cooldown.'
  })
};

const itemsDatabaseOffHand = {
 CopperShield: new Shield({
    name: 'Copper Shield',
    posture: 5
  }),

  IronShield: new Shield({
    name: 'Iron Shield',
    posture: 10,
    level: 8,
    armor: 25
  }),

  SplintedShield: new Shield({
    name: 'Splinted Shield',
    posture: 8,
    level: 10,
    armor: 46,
    rarity: 'uncommon'
  }),

  SlimeShield: new Shield({
    name: 'Slime Shield',
    posture: 10,
    level: 16,
    armor: 67,
    rarity: 'uncommon',
    description: 'On block, the attacker accumulates poison buildup.'
  }),

  SilverShield: new Shield({
    name: 'Silver Shield',
    posture: 15,
    level: 17,
    armor: 35,
    rarity: 'uncommon'
  }),

  PlatinumShield: new Shield({
    name: 'Platinum Shield',
    posture: 20,
    level: 27,
    armor: 50,
    rarity: 'uncommon'
  }),

  MithrilShield: new Shield({
    name: 'Mithril Shield',
    posture: 20,
    level: 33,
    armor: 60,
    rarity: 'uncommon'
  }),

  ZircShield: new Shield({
    name: 'Zirc Shield',
    posture: 20,
    level: 42,
    armor: 70,
    rarity: 'uncommon'
  }),

  CobaltShield: new Shield({
    name: 'Cobalt Shield',
    posture: 25,
    level: 45,
    armor: 100,
    rarity: 'uncommon'
  }),

  ElderShield: new Shield({
    name: 'Elder Shield',
    stats: {
      spirit: 5,
      stamina: 5
    },
    posture: 20,
    level: 35,
    armor: 100,
    rarity: 'epic'
  }),

  LanzasMerit: new Shield({
    name: 'Lanza\'s Merit',
    stats: {
      magicResistance: 0.08
    },
    posture: 20,
    level: 40,
    armor: 235,
    rarity: 'epic'
  }),

  TemplarsAegis: new Shield({
    name: 'Templar\'s Aegis',
    stats: {
      strength: 27,
      stamina: 5
    },
    posture: 17,
    level: 40,
    armor: 212,
    rarity: 'epic'
  }),

  Riftguard: new Shield({
    name: 'Riftguard',
    stats: {
      strength: 27,
      stamina: 5
    },
    posture: 17,
    level: 40,
    armor: 212,
    rarity: 'epic'
  }),

  IceGolemShield: new Shield({
    name: 'Ice Golem Shield',
    stats: {
      magicResistance: 0.05,
      holyResistance: 0.05,
      fireResistance: -0.05
    },
    posture: 35,
    level: 45,
    armor: 300,
    rarity: 'epic'
  }),

  WarriorsSash: new Sash({
    name: 'Warriors Sash',
    stats: {strength: 15, spirit: 5, stamina: 5},
    level: 30,
    rarity: 'rare'
  }),

  MagiciansSash: new Sash({
    name: 'Magicians Sash',
    stats: {intellect: 15, spirit: 5, stamina: 5},
    level: 30,
    rarity: 'rare'
  }),

  ThievesSash: new Sash({
    name: 'Thieves Sash',
    stats: {agility: 15, spirit: 5, stamina: 5},
    level: 30,
    rarity: 'rare'
  })
};

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
      magicPower: 0.03
    },
    rarity: 'rare'
  }),

  RubyLantern: new Lantern({
    name: 'Ruby Lantern',
    stats: {
      physicalAttack: 0.03
    },
    rarity: 'rare'
  }),

  EmberfrostLantern: new Lantern({
    name: 'Emberfrost Lantern',
    stats: {
      heatResistance: 0.25
    },
    rarity: 'rare'
  }),

  FrostfireLantern: new Lantern({
    name: 'Frostfire Lantern',
    stats: {
      coldResistance: 0.25
    },
    rarity: 'rare'
  }),

  CyclopsLantern: new Lantern({
    name: 'Cyclops Lantern',
    stats: {
      coldResistance: 0.25,
      tundraVisibility: 0.18
    },
    rarity: 'uncommon'
  }),
};

const itemsDatabaseBack = {
  Backpack: new Back({
    name: 'Backpack',
    stats: {spirit: 5, maxWeight: 25},
    armor: 100,
    rarity: 'uncommon'
  }),

  RatCape: new Back({
    name: 'Rat Cape',
    stats: {agility: 12, critChance: 0.02},
    armor: 35,
    rarity: 'uncommon'
  }),

  ChampionCape: new Back({
    name: 'Champion Cape',
    stats: {strength: 12, spirit: 4},
    armor: 35,
    rarity: 'uncommon'
  }),

  EctoplasmicCloak: new Back({
    name: 'Ectoplasmic Cloak',
    stats: {intellect: 12, spirit: 4},
    armor: 35,
    rarity: 'rare'
  }),

  AbyssalShroud: new Back({
    name: 'Abyssal Shroud',
    stats: {strength: 25, stamina: 5},
    armor: 75,
    rarity: 'epic'
  }),

  ShadowstepDrape: new Back({
    name: 'Shadowstep Drape',
    stats: {agility: 25, speedBoost: 0.03},
    armor: 75,
    rarity: 'epic'
  }),

  CowlOfTheVoid: new Back({
    name: 'Cowl of the Void',
    stats: {intellect: 25, spirit: 10},
    armor: 75,
    rarity: 'epic'
  }),

  LionsMantle: new Back({
    name: 'Lion\'s Mantle',
    stats: {strength: 25, stamina: 5},
    armor: 75,
    rarity: 'epic'
  }),

  WindborneCloak: new Back({
    name: 'Windborne Cloak',
    stats: {agility: 25, speedBoost: 0.03},
    armor: 75,
    rarity: 'epic'
  }),

  ArchonsVeil: new Back({
    name: 'Archon\'s Veil',
    stats: {intellect: 25, spirit: 10},
    armor: 75,
    rarity: 'epic'
  }),

  IceFractalCape: new Back({
    name: 'Ice Fractal Cape',
    stats: {intellect: 15, spirit: 30, coldResistance: 0.07},
    armor: 100,
    rarity: 'epic'
  }),

  IskaelsVeil: new Back({
    name: 'Iskael\'s Veil',
    stats: {strength: 15, agility: 30, coldResistance: 0.07},
    armor: 75,
    rarity: 'epic'
  }),

  IskaelsShrould: new Back({
    name: 'Iskael\'s Shroud',
    stats: {intellect: 30, spirit: 15, coldResistance: 0.07},
    armor: 100,
    rarity: 'epic'
  }),

  YetiCloak: new Back({
    name: 'Yeti Cloak',
    stats: {strength: 30, stamina: 7, coldResistance: 0.07},
    armor: 110,
    rarity: 'epic'
  }),

  FifthFlame: new Back({
    name: 'Fifth Flame',
    stats: {intellect: 30, spirit: 15, coldResistance: 0.07},
    armor: 100,
    rarity: 'epic',
    description: 'Obtainable during 2025 July Event.'
  }),
  DivineCalling: new Back({
    name: 'Divine Calling',
    stats: {intellect: 30, spirit: 15, coldResistance: 0.07},
    armor: 100,
    rarity: 'epic',
    description: 'Obtainable during 2025 July Event.'
  }),
  FrostPrinceCape: new Back({
    name: 'Frost Prince Cape',
    stats: {intellect: 30, spirit: 15, coldResistance: 0.07},
    armor: 100,
    rarity: 'epic',
    description: 'Obtainable during 2025 July Event.'
  }),
  Oculus: new Back({
    name: 'Oculus',
    stats: {intellect: 30, spirit: 15, coldResistance: 0.07},
    armor: 100,
    rarity: 'epic',
    description: 'Obtainable during 2025 July Event.'
  }),
};

const itemsDatabaseRings = {
  ThievesRing: new Ring({
    name: 'Thieves Ring',
    stats: {agility: 10}
  }),

  SorcerersRing: new Ring({
    name: 'Sorcerer\'s Ring',
    stats: {intellect: 10}
  }),

  WarriorsRing: new Ring({
    name: 'Warrior\'s Ring',
    stats: {strength: 10}
  }),

  PhilosophersRing: new Ring({
    name: 'Philosopher\'s Ring',
    description: 'Enhances the efficiency of health and mana potions.',
    rarity: 'uncommon'
  }),

  RingOfVitality: new Ring({
    name: 'Ring of Vitality',
    stats: {stamina: 3},
    rarity: 'uncommon'
  }),

  FlameStoneRing: new Ring({
    name: 'Flame Stone Ring',
    stats: {fireResistance: 0.17},
    rarity: 'uncommon'
  }),

  HolyStoneRing: new Ring({
    name: 'Holy Stone Ring',
    stats: {holyResistance: 0.17},
    rarity: 'uncommon'
  }),

  SpellStoneRing: new Ring({
    name: 'Spell Stone Ring',
    stats: {magicResistance: 0.17},
    rarity: 'uncommon',
    description: '(Unobtainable)'
  }),

  EmberfrostRing: new Ring({
    name: 'Emberfrost Ring',
    stats: {heatResistance: 0.25},
    rarity: 'uncommon'
  }),

  PoisonbiteRing: new Ring({
    name: 'Poisonbite Ring',
    stats: {immunity: 0.35},
    rarity: 'uncommon'
  }),

  MinersRing: new Ring({
    name: 'Miner\'s Ring',
    description: '(Unobtainable) Enhances mining efficiency.',
    rarity: 'uncommon'
  }),

  LumberjackRing: new Ring({
    name: 'Lumberjack Ring',
    description: '(Unobtainable) Enhances tree chopping efficiency.',
    rarity: 'uncommon'
  }),

  GiantSlayersRing: new Ring({
    name: 'Giant Slayer\'s Ring',
    description: 'Increases posture damage on Weapon Arts.',
    rarity: 'rare'
  }),

  MaelisRing: new Ring({
    name: 'Maelis\'s Ring',
    description: 'Enhances the potency of fairy buffs.',
    rarity: 'rare'
  }),

  ShieldGodsRing: new Ring({
    name: 'Shield God\'s Ring',
    level: 20,
    description: 'Increases damage reduction on hyperarmor.',
    rarity: 'rare'
  }),

  CastersRing: new Ring({
    name: 'Caster\'s Ring',
    stats: {castSpeed: 0.10},
    rarity: 'rare'
  }),

  RingOfSecondEye: new Ring({
    name: 'Ring of Second Eye',
    description: 'Increases critical strike chance on Weapon Arts.',
    rarity: 'rare'
  }),

  FocusRing: new Ring({
    name: 'Focus Ring',
    description: 'Faster focus regeneration.',
    rarity: 'epic'
  }),

  ElderRing: new Ring({
    name: 'Elder Ring',
    stats: {healthRegen: 0.10},
    rarity: 'epic'
  }),

  RingOfResistance: new Ring({
    name: 'Ring of Resistance',
    stats: {magicResistance: 0.06, holyResistance: 0.06, fireResistance: 0.06},
    rarity: 'epic',
    description: '(Unobtainable)'
  }),

  DoomBand: new Ring({
    name: 'Doom Band',
    stats: {strength: 24, spirit: 5, stamina: 8},
    rarity: 'epic'
  }),

  HexRing: new Ring({
    name: 'Hex Ring',
    stats: {intellect: 24, spirit: 5, stamina: 8},
    rarity: 'epic'
  }),

  ShadowBand: new Ring({
    name: 'Shadow Band',
    stats: {agility: 24, spirit: 5,stamina: 8},
    rarity: 'epic'
  }),

  BlessedBand: new Ring({
    name: 'Blessed Band',
    stats: {strength: 24, spirit: 5, stamina: 8},
    rarity: 'epic'
  }),

  SwiftBand: new Ring({
    name: 'Swift Band',
    stats: {agility: 24, spirit: 5, stamina: 8},
    rarity: 'epic'
  }),

  SageRing: new Ring({
    name: 'Sage Ring',
    stats: {intellect: 24, spirit: 5, stamina: 8},
    rarity: 'epic'
  }),

  PaladinsRing: new Ring({
    name: 'Paladin\'s Ring',
    description: 'Crit damage taken is reduced by 20%.',
    rarity: 'epic'
  }),

  DemonCirclet: new Ring({
    name: 'Demon Circlet',
    stats: {strength: 10, agility: 10, stamina: 10},
    rarity: 'legendary',
    description: '(Unobtainable)'
  }),

  LuckyRing: new Ring({
    name: 'Lucky Ring',
    stats: {luck: 1},
    rarity: 'legendary'
  }),

  VampiricRing: new Ring({
    name: 'Vampiric Ring',
    description: 'Heals upon landing a critical attack.',
    rarity: 'legendary'
  }),

  PrimordialRing: new Ring({
    name: 'Primordial Ring',
    level: 30,
    description: 'Physical damage buff based on hunger.',
    rarity: 'legendary'
  }),

  SuveriasRing: new Ring({
    name: 'Suveria\'s Ring',
    stats: {holyAttack: 0.15, undeadDamage: 0.10},
    rarity: 'legendary'
  }),

  MerchantsRing: new Ring({
    name: 'Merchant\'s Ring',
    stats: {moneyGain: 0.1},
    rarity: 'legendary'
  }),

  ManaCleaverRing: new Ring({
    name: 'Mana Cleaver Ring',
    description: '+7 Mana gain upon landing a basic attack or a weapon art.',
    rarity: 'legendary'
  }),

  FightersRing: new Ring({
    name: 'Fighter\'s Ring',
    description: 'Deal +5% increased basic attack damage when below 20% HP. Does not proc on crits.',
    rarity: 'legendary'
  }),

  CovetousVipersRing: new Ring({
    name: 'Covetous Viper\'s Ring',
    stats: {spirit: 2},
    description: 'Your melee attacks on poisoned enemies restore a portion of your health.',
    rarity: 'legendary'
  }),

  FrostfireRing: new Ring({
    name: 'Frostfire Ring',
    stats: {coldResistance: 0.25},
    rarity: 'rare'
  }),

  ValorWarriorsRing: new Ring({
    name: 'Valor Warrior\'s Ring',
    stats: {strength: 20},
    rarity: 'uncommon'
  }),

  RefinedThievesRing: new Ring({
    name: 'Refined Thieves Ring',
    stats: {agility: 20},
    rarity: 'uncommon'
  }),

  ChargedSorcererRing: new Ring({
    name: 'Charged Sorcerer Ring',
    stats: {intellect: 20},
    rarity: 'uncommon'
  }),

  IceGolemRing: new Ring({
    name: 'Ice Golem Ring',
    stats: {strength: 10, stamina: 5},
    rarity: 'uncommon',
    description: 'Every hit with Mana Damage builds Lesser Frostbite. 3 second cooldown per proc.'
  }),

  YetiRing: new Ring({
    name: 'Yeti Ring',
    stats: {strength: 10, stamina: 5},
    rarity: 'uncommon',
    description: 'You become infuriated. Every time you get hit, gain 2% damage. This scales up to 10%. Goes away after 2 seconds. Getting hit refreshes the cooldown.'
  }),

  IskaelRing: new Ring({
    name: 'Iskael Ring',
    stats: {strength: 10, stamina: 5},
    rarity: 'epic',
    description: 'Landing an M1 or a Critical Attack will cause your enemies to build up Lesser Frostbite, causing them to freeze. If stacked with Isakel\'s Rune, buildup will be increased by 20%.'
  }),
  DariusFavour: new Ring({
    name: 'Darius\' Favour',
    stats: {physicalAttack: 0.03, fireAttack: 0.05},
    rarity: 'legendary',
  }),

  PiercingBand: new Ring({
    name: 'Piercing Band',
    stats: {physicalPierce: 0.1},
    rarity: 'epic',
  }),

  PiercingMagicBand: new Ring({
    name: 'Piercing Magic Band',
    stats: {magicPierce: 0.1},
    rarity: 'epic',
  }),
};

const itemDatabaseFairies = {
  Fairy: new Fairy({
    name: 'Fairy',
    stats: {magicAttack: 0.2},
    rarity: 'rare'
  }),
  GoldenFairy: new Fairy({
    name: 'Golden Fairy',
    stats: {luck: 3},
    rarity: 'legendary'
  }),
  EarthFairy: new Fairy({
    name: 'Earth Fairy',
    stats: {earthAttack: 0.1},
    rarity: 'legendary'
  }),
  FireFairy: new Fairy({
    name: 'Fire Fairy',
    stats: {fireAttack: 0.1},
    rarity: 'legendary'
  }),
  WaterFairy: new Fairy({
    name: 'Water Fairy',
    stats: {waterAttack: 0.1},
    rarity: 'legendary'
  }),
  LightningFairy: new Fairy({
    name: 'Lightning Fairy',
    stats: {lightningAttack: 0.1},
    rarity: 'legendary'
  }),
  WindFairy: new Fairy({
    name: 'Wind Fairy',
    stats: {windAttack: 0.1},
    rarity: 'legendary'
  })
}

const Ghoul = new Race({
  name: 'Ghoul',
  stats: {magicAttack: 0.025, immunity: 0.5}
});

const Amphibu = new Race({
  name: 'Amphibu',
  stats: {swimBoost: 35, immunity: 0.5},
  rarity: 'uncommon'
});

const Slime = new Race({
  name: 'Slime',
  stats: {magicResistance: -0.075, fireResistance: -0.075, immunity: 0.25},
  rarity: 'epic'
});

const HalfGolem = new Race({
  name: 'Half Golem',
  stats: {speedBoost: -0.05, damageReduction: 0.05,
      maxWeight: 10, robustness: 0.25},
    rarity: 'epic'
});

const Seraphim = new Race({
  name: 'Seraphim',
  stats: {luck: 1, fireResistance: 0.025},
  rarity: 'legendary'
});

const Infernim = new Race({
  name: 'Infernim',
  stats: {luck: 1, fireResistance: 0.1, holyResistance: -0.05},
  rarity: 'legendary'
});

// Then create the races database with all races
const racesDatabase = {
  Human: new Race({
    name: 'Human',
    stats: {focusEfficiency: 1, manaEfficiency: 2}
  }),

  Elf: new Race({
    name: 'Elf',
    stats: {speedBoost: 0.05, cdReduction: 0.05, stealth: 0.1,
        mana: 0.1, focus: 0.05}
  }),

  Orc: new Race({
    name: 'Orc',
    stats: {healthRegen: 0.1, maxHunger: 0.15, heatResistance: 0.2}
  }),

  Ghoul,
  PhantomGhoul: new Race({
    name: 'Ghoul: Phantom Ghoul',
    stats: {...Ghoul.stats,
        jumpBoost: 0.03, fallReduction: 0.1, speedBoost: 0.025}
  }),
  HowlingWraith: new Race({
    name: 'Ghoul: Howling Wraith',
    stats: {...Ghoul.stats,
        robustness: 0.05, holyResistance: 0.05, coldResistance: 0.1, speedBoost: 0.025}
  }),
  WretchedWraith: new Race({
    name: 'Ghoul: Wretched Wraith',
    stats: {...Ghoul.stats,
        attackPower: 0.05, magicPower: 0.05, speedBoost: 0.025}
  }),

  Amphibu,
  Goliath: new Race({
    name: 'Amphibu: Goliath',
    rarity: 'uncommon',
    stats: {...Amphibu.stats,
        jumpBoost: 0.02, fallReduction: 0.05, speedBoost: -0.05,
        damageReduction: 0.05, attackPower: 0.03}
  }),
  AgileFrog: new Race({
    name: 'Amphibu: Agile Frog',
    rarity: 'uncommon',
    stats: {...Amphibu.stats,
        swimBoost: Amphibu.stats.swimBoost + 35, speedBoost: 0.15,
    jumpBoost: 0.25, fallReduction: 0.15}
  }),
  GoldenPoison: new Race({
    name: 'Amphibu: Golden Poison',
    rarity: 'uncommon',
    stats: {...Amphibu.stats,
        immunity: Amphibu.stats.immunity + 0.5, speedBoost: 0.07,
        jumpBoost: 0.15, fallReduction: 0.05}
  }),

  Ailuran: new Race({
    name: 'Ailuran',
    stats: {speedBoost: 0.08, fireResistance: -0.1, heatResistance: 0.25,
        coldResistance: 0.25, fallReduction: 0.15, jumpBoost: 0.25},
    rarity: 'rare'
  }),

  Chiroptran: new Race({
    name: 'Chiroptran',
    stats: {windResistance: -5, holyAttack: 0.05, holyResistance: -0.05},
    rarity: 'rare'
  }),

  Slime,
  BlackOozeSlime: new Race({
    name: 'Black Ooze Slime',
    stats: {...Slime.stats},
    rarity: 'epic'
  }),
  PredatorSlime: new Race({
    name: 'Predator Slime',
    stats: {...Slime.stats},
    rarity: 'epic'
  }),
  SapphireSlime: new Race({
    name: 'Sapphire Slime',
    stats: {...Slime.stats},
    rarity: 'epic'
  }),

  HalfGolem,
  SiegeGolem: new Race({
    name: 'Half Golem: Siege Body',
    stats: {speedBoost: -0.1, damageReduction: 0.1, magicResistance: 0.05, maxWeight: 25, robustness: 0.25},
    rarity: 'epic'
  }),
  AssaultGolem: new Race({
    name: 'Half Golem: Assault Body',
    stats: {speedBoost: 0.06, damageReduction: -0.1, attackPower: 0.12, robustness: 0.25},
    rarity: 'epic'
  }),
  CrystalGolem: new Race({
    name: 'Half Golem: Crystal Body',
    stats: {speedBoost: 0.06, damageReduction: -0.1, magicPower: 0.12, robustness: 0.25},
    rarity: 'epic'
  }),

  Bunny: new Race({
    name: 'Bunny',
    rarity: 'epic'
  }),

  Dullahan: new Race({
    name: 'Dullahan',
    stats: {coldResistance: 0.25, holyResistance: -0.1, robustness: 0.25},
  rarity: 'legendary'
  }),

  Vampire: new Race({
    name: 'Vampire',
    stats: {luck: 1, holyResistance: -0.2},
  rarity: 'legendary'
  }),

  Seraphim,
  TwoWingSeraphim: new Race({
    name: 'Seraphim: 2 Wings',
    stats: {...Seraphim.stats, agility: 15},
  rarity: 'legendary'
  }),
  FourWingSeraphim: new Race({
    name: 'Seraphim: 4 Wings',
    stats: {...Seraphim.stats, physicalAttack: 0.06},
  rarity: 'legendary'
  }),
  SixWingSeraphim: new Race({
    name: 'Seraphim: 6 Wings',
    stats: {...Seraphim.stats, focusEfficiency: 5, manaEfficiency: 5},
  rarity: 'legendary'
  }),

  Infernim,
  TwoHornInfernim: new Race({
    name: 'Infernim: 2 Horns',
    stats: {...Infernim.stats, speedBoost: 0.06},
  rarity: 'legendary'
  }),
  FourHornInfernim: new Race({
    name: 'Infernim: 4 Horns',
    stats: {...Infernim.stats, magicPower: 0.1},
  rarity: 'legendary'
  }),
  SixHornInfernim: new Race({
    name: 'Infernim: 6 Horns',
    stats: {...Infernim.stats, fireAttack: 0.2},
  rarity: 'legendary'
  }),
};

const itemsDatabase = {
  helmet: itemsDatabaseHelmet,
  chest: itemsDatabaseChest,
  boots: itemsDatabaseBoots,
  weapon: itemsDatabaseWeapons,
  offhand: itemsDatabaseOffHand,
  lantern: itemsDatabaseLantern,
  back: itemsDatabaseBack,
  ring: itemsDatabaseRings,
  race: racesDatabase,
  fairy: itemDatabaseFairies
};

export default itemsDatabase;