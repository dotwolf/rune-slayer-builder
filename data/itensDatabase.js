import { Item, Weapon, Armor, Helmet, Chest, Boots, Offhand, Shield, Sash, Ring, Lantern, Back } from './types.js';

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
    stats: {strength: 11,phypierce: 0.02},
    armor: 263,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  MaleficHat: new Helmet({
    name: 'Malefic Hat',
    stats: {intellect: 11, magcrit: 0.02},
    armor: 94,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  SeraphHeadband: new Helmet({
    name: 'Seraph Headband',
    stats: {strength: 11, phypierce: 0.02},
    armor: 263,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  SanctifiedHat: new Helmet({
    name: 'Sanctified Hat',
    stats: {intellect: 11, magcrit: 0.01},
    armor: 94,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  LightYetiBeads: new Helmet({
    name: 'Light Yeti Beads',
    stats: {strength: 22, stamina: 11, coldres: 0.1, buffDuration: 0.03},
    armor: 362,
    type: 'light',
    level: 45,
    rarity: 'epic'
  }),
  BorealInquisitorHood: new Helmet({
    name: 'Boreal Inquisitor Hood',
    stats: {intellect: 13, magcrit: 0.03, coldres: 0.1},
    armor: 362,
    type: 'light',
    level: 50,
    rarity: 'epic'
  }),
  MammothSagesCrown: new Helmet({
    name: 'Mammoth Sage\'s Crown',
    stats: {strength: 14, stamina: 6, coldres: 0.15},
    armor: 321,
    type: 'light',
    level: 45,
    rarity: 'epic'
  }),
  FrostleafHat: new Helmet({
    name: 'Frostleaf Hat',
    stats: {intellect: 15, spirit: 2, castspeed: 0.03},
    armor: 110,
    type: 'light',
    level: 45,
    rarity: 'uncommon'
  }),
  FrostleafHeadband: new Helmet({
    name: 'Frostleaf Hat',
    stats: {strength: 15, stamina: 2, phypierce: 0.02},
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
    stats: {agility: 9, stamina: 2, phypierce: 0.03},
    armor: 225,
    type: 'medium',
    level: 40,
    rarity: 'epic'
  }),
  EverwinterCrown: new Helmet({
    name: 'Everwinter Crown',
    stats: {strength: 5, agility: 15, stamina: 2,
      critChance: 0.03, speedboost: 0.02, coldres: 0.1},
    armor: 360,
    type: 'medium',
    level: 50,
    rarity: 'epic'
  }),
  MediumYetiHood: new Helmet({
    name: 'Medium Yeti Hood',
    stats: {agility: 14, stamina: 4, phypierce: 0.03, coldres: 0.1,
      phyatk: 0.02},
    armor: 330,
    type: 'medium',
    level: 45,
    rarity: 'epic'
  }),
  MammothRangersCrown: new Helmet({
    name: 'Mammoth Ranger\'s Crown',
    stats: {agility: 11, stamina: 4, coldres: 0.15},
    armor: 280,
    type: 'medium',
    level: 45,
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
    stats: {strength: 12, stamina: 5, phypierce: 0.01, phyatk: 0.01},
    armor: 450,
    type: 'heavy',
    level: 42,
    rarity: 'uncommon'
  }),

  AbyssalHelmet: new Helmet({
    name: 'Abyssal Helmet',
    stats: {strength: 22, magres: 0.04, buffDuration: 0.08},
    armor: 500,
    type: 'heavy',
    level: 40,
    rarity: 'epic'
  }),

  BastionHelmet: new Helmet({
    name: 'Bastion Helmet',
    stats: {strength: 22, magres: 0.04, buffDuration: 0.08},
    armor: 500,
    type: 'heavy',
    level: 40,
    rarity: 'epic'
  }),
  FrostscaleHelm: new Helmet({
    name: 'Frostscale Helm',
    stats: {strength: 20, critdefense: 0.02, magres: 0.03,
      coldres: 0.06, buffDuration: 0.04},
    armor: 625,
    type: 'heavy',
    level: 50,
    rarity: 'epic'
  }),
  MammothWarriorsHelm: new Helmet({
    name: 'Mammoth Warrior\'s Helm',
    stats: {strength: 18, speedboost: -0.02, magres: 0.07,
      coldres: 0.15, buffDuration: 0.1},
    armor: 700,
    type: 'heavy',
    level: 45,
    rarity: 'epic'
  }),
  CobaltHelmet: new Helmet({
    name: 'Cobalt Helmet',
    stats: {strength: 12, stamina: 5, critdefense: 0.02,
      magres: 0.02},
    armor: 550,
    type: 'heavy',
    level: 45,
    rarity: 'uncommon'
  }),
BrimfrostHelmet: new Helmet({
    name: 'Cobalt Helmet',
    stats: {strength: 24, coldres: 0.1, buffDuration: 0.1},
    armor: 600,
    type: 'heavy',
    level: 45,
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
    name: 'Slime Crpwm',
    stats: {intellect: 9, magcrit: 0.01},
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
    stats: {strength: 18, stamina: 1, heatres: 0.15},
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
    stats: {intellect: 24, spirit: 4, magcritchance: 0.01},
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
    stats: {intellect: 20, spirit: 15, magcritchance: 0.01},
    armor: 190,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  MaleficRobes: new Chest({
    name: 'Malefic Robes',
    stats: {intellect: 22, magpierce: 0.04, castSpeed: 0.08},
    armor: 189,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  HellfangGi: new Chest({
    name: 'Hellfang Gi',
    stats: {strength: 22, critDamage: 0.10, magres: 0.06},
    armor: 423,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  SanctifiedRobes: new Chest({
    name: 'Sanctified Robes',
    stats: {intellect: 22, magpierce: 0.04, castSpeed: 0.08},
    armor: 189,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  SeraphGi: new Chest({
    name: 'Seraph Gi',
    stats: {strength: 22, critDamage: 0.10, magres: 0.06},
    armor: 423,
    type: 'light',
    level: 40,
    rarity: 'epic'
  }),
  FrostleafRobes: new Chest({
    name: 'Frostleaf Robes',
    stats: {intellect: 28, spirit: 6, coldres: 0.15, magicCrit: 1},
    armor: 215,
    type: 'light',
    level: 45,
    rarity: 'uncommon'
  }),
  FrostleafGi: new Chest({
    name: 'Frostleaf Gi',
    stats: {strength: 28, stamina: 3, coldres: 0.15, phyatk: 0.03},
    armor: 400,
    type: 'light',
    level: 45,
    rarity: 'uncommon'
  }),
  LightYetiArmor: new Chest({
    name: 'Light Yeti Armor',
    stats: {strength: 22, stamina: 11, coldres: 0.2, phyatk: 0.03},
    armor: 472,
    type: 'light',
    level: 45,
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
    name: 'MammothSage\'s Garbs',
    stats: {strength: 20, stamina: 11, magres: 0.05, coldres: 0.3},
    armor: 465,
    type: 'light',
    level: 45,
    rarity: 'epic'
  }),
  EverwinterVest: new Chest({
    name: 'Everwinter Vest',
    stats: {strength: 10, agility: 25, stamina: 4,
      critChance: 0.02, phypierce: 0.03, coldres: 0.25},
    armor: 500,
    type: 'medium',
    level: 50,
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
    stats: {strength: 22, stamina: 8, phypierce: 0.03, phyatk: 0.03},
    armor: 875,
    type: 'heavy',
    level: 42,
    rarity: 'uncommon'
  }),
  AbyssalPlate: new Chest({
    name: 'Abyssal Plate',
    stats: {strength: 45, critDamage: 0.10, phypierce: 0.04},
    armor: 1000,
    type: 'heavy',
    level: 40,
    rarity: 'epic'
  }),
  TurtleShell: new Chest({
    name: 'Turtle Shell',
    stats: {strength: 28, stamina: 8, critDefense: 0.10, magicres: 0.10},
    armor: 1000,
    type: 'heavy',
    level: 40,
    rarity: 'epic'
  }),
  BastionPlate: new Chest({
    name: 'Bastion Plate',
    stats: {strength: 45, critDamage: 0.10, phypierce: 0.04},
    armor: 1000,
    type: 'heavy',
    level: 40,
    rarity: 'epic'
  }),
  CobaltChestplate: new Chest({
    name: 'Cobalt Chestplate',
    stats: {strength: 22, stamina: 8, critdefense: 0.04, magicResistance: 0.04},
    armor: 950,
    type: 'heavy',
    level: 45,
    rarity: 'uncommon'
  }),
  BrimfrostChestplate: new Chest({
    name: 'Brimfrost Chestplate',
    stats: {strength: 40, stamina: 10, critDamage: 0.05,
      phypierce: 0.04, coldres: 0.2},
    armor: 1225,
    type: 'heavy',
    level: 45,
    rarity: 'epic'
  }),
};

const itemsDatabaseBoots = {  
  CottonPants: new Boots({
    name: 'Cotton Pants',
    stats: {intellect: 1},
    armor: 15,
    type: 'light'
  })
};

const itemsDatabaseWeapon = {};

const itemsDatabaseOffHand = {
  CopperShield: new Shield({
    name: 'Copper Shield',
    posture: 5,
    armor: 0,
    rarity: 'common'
  }),

  IronShield: new Shield({
    name: 'Iron Shield',
    posture: 10,
    armor: 25,
    level: 8,
    rarity: 'uncommon'
  }),

  SplintedShield: new Shield({
    name: 'Splinted Shield',
    posture: 8,
    armor: 46,
    level: 10,
    rarity: 'uncommon'
  }),

  SlimeShield: new Shield({
    name: 'Slime Shield',
    posture: 10,
    armor: 67,
    level: 16,
    rarity: 'rare',
    description: 'On block, the attacker accumulates poison buildup.'
  }),

  SilverShield: new Shield({
    name: 'Silver Shield',
    posture: 15,
    armor: 35,
    level: 17,
    rarity: 'rare'
  }),

  PlatinumShield: new Shield({
    name: 'Platinum Shield',
    posture: 20,
    armor: 50,
    level: 27,
    rarity: 'epic'
  }),

  MithrilShield: new Shield({
    name: 'Mithril Shield',
    posture: 20,
    armor: 60,
    level: 33,
    rarity: 'epic'
  }),

  ZircShield: new Shield({
    name: 'Zirc Shield',
    posture: 20,
    armor: 70,
    level: 42,
    rarity: 'epic'
  }),

  CobaltShield: new Shield({
    name: 'Cobalt Shield',
    posture: 25,
    armor: 100,
    level: 45,
    rarity: 'legendary'
  }),

  ElderShield: new Shield({
    name: 'Elder Shield',
    stats: {spirit: 5, stamina: 5},
    posture: 20,
    armor: 100,
    level: 35,
    rarity: 'legendary'
  }),

  LanzasMerit: new Shield({
    name: 'Lanza\'s Merit',
    stats: {magicResistance: 0.08},
    posture: 20,
    armor: 235,
    level: 40,
    rarity: 'legendary'
  }),

  TemplarsAegis: new Shield({
    name: 'Templar\'s Aegis',
    stats: {strength: 27, stamina: 5},
    posture: 17,
    armor: 212,
    level: 40,
    rarity: 'legendary'
  }),

  Riftguard: new Shield({
    name: 'Riftguard',
    stats: {strength: 27, stamina: 5},
    posture: 17,
    armor: 212,
    level: 40,
    rarity: 'legendary'
  }),

  IceGolemShield: new Shield({
    name: 'Ice Golem Shield',
    stats: {magres: 0.05, holyres: 0.05, fireres: -0.05},
    posture: 35,
    armor: 300,
    level: 45,
    rarity: 'legendary'
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
      magres: 0.08
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
      magres: 0.05,
      holyres: 0.05,
      fireres: -0.05
    },
    posture: 35,
    level: 45,
    armor: 300,
    rarity: 'epic'
  }),
};

const itemsDatabaseBack = {
  Backpack: new Back({
    name: 'Backpack',
    stats: {spirit: 5, weight: 25},
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
  })

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
    stats: {fireres: 0.17},
    rarity: 'uncommon'
  }),

  HolyStoneRing: new Ring({
    name: 'Holy Stone Ring',
    stats: {holyres: 0.17},
    rarity: 'uncommon'
  }),

  SpellStoneRing: new Ring({
    name: 'Spell Stone Ring',
    stats: {magres: 0.17},
    rarity: 'uncommon'
  }),

  EmberfrostRing: new Ring({
    name: 'Emberfrost Ring',
    stats: {heatres: 0.25},
    rarity: 'uncommon'
  }),

  PoisonbiteRing: new Ring({
    name: 'Poisonbite Ring',
    stats: {immunity: 0.35},
    rarity: 'uncommon'
  }),

  MinersRing: new Ring({
    name: 'Miner\'s Ring',
    description: 'Enhances mining efficiency.',
    rarity: 'uncommon'
  }),

  LumberjackRing: new Ring({
    name: 'Lumberjack Ring',
    description: 'Enhances tree chopping efficiency.',
    rarity: 'uncommon'
  }),

  GiantSlayersRing: new Ring({
    name: 'Giant Slayer\'s Ring',
    description: 'Increases posture damage on Weapon Arts.',
    rarity: 'rare'
  }),

  MaelissRing: new Ring({
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
    stats: {castspeed: 0.10},
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
    stats: {healthreg: 0.10},
    rarity: 'epic'
  }),

  RingOfResistance: new Ring({
    name: 'Ring of Resistance',
    stats: {magres: 0.06, holyres: 0.06, fireres: 0.06},
    rarity: 'epic'
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
    rarity: 'legendary'
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
    stats: {holydmg: 0.15, undeaddmg: 0.10},
    rarity: 'legendary'
  }),

  MerchantsRing: new Ring({
    name: 'Merchant\'s Ring',
    stats: {moneygain: 0.1},
    rarity: 'legendary'
  }),

  ManaCleaverRing: new Ring({
    name: 'Mana Cleaver Ring',
    description: 'On each M1: Gain slight Mana Regen on hit. 5s CD for every 50 Intelligence.',
    rarity: 'legendary'
  }),

  FightersRing: new Ring({
    name: 'Fighter\'s Ring',
    description: 'Deal +5% increased basic attack damage when below 20% HP. Does not proc on crits.',
    rarity: 'legendary'
  }),

  CovetousVipersRing: new Ring({
    name: 'Covetous Viper\'s Ring',
    description: 'Your melee attacks on poisoned enemies restore a portion of your health.',
    rarity: 'legendary'
  }),

  FrostfireRing: new Ring({
    name: 'Frostfire Ring',
    stats: {coldres: 0.25},
    rarity: 'rare'
  }),

  ValorWarriorsRing: new Ring({
    name: 'Valor Warrior\'s Ring',
    stats: {strength: 20},
    rarity: 'uncommon'
  }),

  RefinedThievesRing: new Ring({
    name: 'Frostfire Ring',
    stats: {agility: 20},
    rarity: 'uncommon'
  }),

  ChargedSorcererRing: new Ring({
    name: 'Charged Sorcerer Ring',
    stats: {intellect: 20},
    rarity: 'uncommon'
  }),
};

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