import { Rune } from './types.js';

const runesDatabase = {
  LesserStrengthRune: new Rune({
    name: 'Lesser Strength Rune',
    stats: {strength: 3}
  }),
  LesserAgilityRune: new Rune({
    name: 'Lesser Agility Rune',
    stats: {agility: 3}
  }),
  LesserIntellectRune: new Rune({
    name: 'Lesser Intellect Rune',
    stats: {intellect: 3}
  }),
  LesserSpiritRune: new Rune({
    name: 'Lesser Spirit Rune',
    stats: {spirit: 3}
  }),
  LesserStaminaRune: new Rune({
    name: 'Lesser Stamina Rune',
    stats: {stamina: 1}
  }),




  StrengthRune: new Rune({
    name: 'Strength Rune',
    stats: {strength: 6},
    rarity: 'rare'
  }),
  AgilityRune: new Rune({
    name: 'Agility Rune',
    stats: {agility: 6},
    rarity: 'rare'
  }),
  IntellectRune: new Rune({
    name: 'Intellect Rune',
    stats: {intellect: 6},
    rarity: 'rare'
  }),
  SpiritRune: new Rune({
    name: 'Spirit Rune',
    stats: {spirit: 6},
    rarity: 'rare'
  }),
  StaminaRune: new Rune({
    name: 'Stamina Rune',
    stats: {stamina: 2},
    rarity: 'rare'
  }),




  GiantBeeRune: new Rune({
    name: 'Giant Bee Rune',
    stats: {intellect: 8, spirit: 5},
    type: 'helmet',
    rarity: 'epic'
  }),
  BoarRune: new Rune({
    name: 'Boar Rune',
    stats: {strength: 4, stamina: 2},
    type: 'helmet',
    rarity: 'epic'
  }),
  StormCallerRune: new Rune({
    name: 'Storm Caller Rune',
    stats: {spirit: 5, magicAttack: 0.05},
    type: 'helmet',
    rarity: 'epic',
    description: 'When it\'s raining, your lightning based attacks have a chance to call down a lightning strike.'
  }),
  DireBearRune: new Rune({
    name: 'Dire Bear Rune',
    stats: {stamina: 2, physicalPierce: 0.06},
    type: 'helmet',
    rarity: 'epic'
  }),
  RuneGolemRune: new Rune({
    name: 'Rune Golem Rune',
    stats: {stamina: 3, holyResistance: 0.02, cdReduction: 0.15},
    type: 'helmet',
    rarity: 'epic'
  }),
  MutatedFrogRune: new Rune({
    name: 'Mutated Frog Rune',
    stats: {agility: 9, stamina: 3, immunity: 0.05},
    type: 'helmet',
    rarity: 'epic'
  }),
  CyclopsRune: new Rune({
    name: 'Cyclops Rune Rune',
    stats: {speed: -2, stamina: 8, magicResistance: 0.08},
    type: 'helmet',
    rarity: 'epic'
  }),
  FrostyRune: new Rune({
    name: 'Frosty Rune',
    stats: {magicAttack: 0.08, intellect: 6, spirit: 4, magicCritChance: 0.02},
    type: 'helmet',
    rarity: 'epic'
  }),
  DireSnowWolfRune: new Rune({
    name: 'Dire Snow Wolf Rune',
    stats: {physicalAttack: 0.03, strength: 7, agility: 6},
    rarity: 'epic',
    type: 'helmet'
  }),
  



  KingMandrakeRune: new Rune({
    name: 'King Mandrake Rune',
    stats: {spirit: 5, intellect: 3, concentration: 0.1},
    type: 'chest',
    rarity: 'epic'
  }),
  LycantharRune: new Rune({
    name: 'Lycanthar Rune',
    stats: {strength: 8, intellect: -5, stamina: -3, magicResistance: 0.05},
    type: 'chest',
    rarity: 'epic'
  }),
  LichtKingRune: new Rune({
    name: 'Licht King Rune',
    stats: {spirit: 10, intellect: 3, concentration: 0.05},
    type: 'chest',
    rarity: 'epic'
  }),
  AncientDemonRune: new Rune({
    name: 'Ancient Demon Rune',
    stats: {stamina: 5, physicalAttack: 0.05, fireResistance: 0.06},
    type: 'chest',
    rarity: 'epic'
  }),
  RatRune: new Rune({
    name: 'Rat Rune',
    stats: {intellect: 4, spirit: 2, speedBoost: 0.01},
    type: 'chest',
    rarity: 'epic'
  }),
  SerpentRune: new Rune({
    name: 'Serpent Rune',
    stats: {agility: 8, spirit: 2, stamina: 1},
    type: 'chest',
    rarity: 'epic'
  }),
  BraelorRune: new Rune({
    name: 'Braelor Rune',
    stats: {strength: 5, stamina: 3, physicalAttack: 0.02},
    type: 'chest',
    rarity: 'epic'
  }),
  AmphithereRune: new Rune({
    name: 'Amphithere Rune',
    stats: {agility: 5, speedBoost: 0.01},
    type: 'chest',
    rarity: 'epic'
  }),
  HammerhelmetRune: new Rune({
    name: 'Hammerhelmet Rune',
    stats: {physicalAttack: 0.02, armor: 50, strength: 6, stamina: 4},
    type: 'chest',
    rarity: 'epic'
  }),
  MudCrabRune: new Rune({
    name: 'Mud Crab Rune',
    stats: {armor: 125, strength: 3, stamina: 6, speedBoost: -0.02, 
      magicResistance: -0.06, holyResistance: 0.02},
    type: 'chest',
    rarity: 'epic'
  }),
  GraltharRune: new Rune({
    name: 'Gralthar Rune',
    stats: {agility: 5, stamina: 3, physicalAttack: 0.02},
    type: 'chest',
    rarity: 'epic'
  }),
  FiendRune: new Rune({
    name: 'Fiend Rune',
    stats: {stamina: 4, fireResistance: 0.06},
    type: 'chest',
    rarity: 'epic'
  }),
  LobsterRune: new Rune({
    name: 'Lobster Rune',
    stats: {physicalAttack: 0.02, armor: 110, strength: 2, stamina: 3, speedBoost: -0.02},
    type: 'chest',
    rarity: 'epic'
  }),
  IceGolemRune: new Rune({
    name: 'Ice Golem Rune',
    stats: {
    armor: -50, agility: 12, stamina: 1, speedBoost: 0.03, magicResistance: 0.03},
    type: 'chest',
    rarity: 'epic'
  }),
  WhaleRune: new Rune({
    name: 'Whale Rune',
    stats: {armor: 100, intellect: 10, spirit: 5, cdReduction: 0.05},
    type: 'chest',
    rarity: 'epic'
  }),
  BarracudaRune: new Rune({
    name: 'Barracuda Rune',
    stats: {stamina: 1, physicalPierce: 0.02},
    type: 'chest',
    rarity: 'epic'
  }),




  MandrakeRune: new Rune({
    name: 'Mandrake Rune',
    stats: {spirit: 4, intellect: 5, stamina: 3},
    type: 'boots',
    rarity: 'epic'
  }),
  PurityRune: new Rune({
    name: 'Purity Rune',
    stats: {spirit: 5, holyAttack: 0.05},
    type: 'boots',
    rarity: 'epic',
    description: 'Removes all status effects from the people you heal.'
  }),
  BeeRune: new Rune({
    name: 'Bee Rune',
    stats: {intellect: 4, spirit: 3},
    type: 'boots',
    rarity: 'epic'
  }),
  DeerRune: new Rune({
    name: 'Deer Rune',
    stats: {spirit: 3, stamina: 1},
    type: 'boots',
    rarity: 'epic'
  }),
  WolfRune: new Rune({
    name: 'Wolf Rune',
    stats: {spirit: 1, agility: 6, stamina: 2},
    type: 'boots',
    rarity: 'epic'
  }),
  BearRune: new Rune({
    name: 'Bear Rune',
    stats: {strength: 8, stamina: 2, magicResistance: 0.02},
    type: 'boots',
    rarity: 'epic'
  }),
  PantherRune: new Rune({
    name: 'Panther Rune',
    stats: {agility: 8, stamina: 1, physicalPierce: 0.02},
    type: 'boots',
    rarity: 'epic'
  }),
  BansheeRune: new Rune({
    name: 'Banshee Rune',
    stats: {intellect: 5, spirit: 4},
    type: 'boots',
    rarity: 'epic'
  }),
  HillTrollRune: new Rune({
    name: 'Hill Troll Rune',
    stats: {strength: 8, stamina: 3, magicResistance: 0.02, holyResistance: 0.02},
    type: 'boots',
    rarity: 'epic'
  }),
  RazorFangRune: new Rune({
    name: 'Razor Fang Rune',
    stats: {stamina: 5, magicResistance: 0.05},
    type: 'boots',
    rarity: 'epic'
  }),
  SabertoothRune: new Rune({
    name: 'Sabertooth Rune',
    stats: {magicAttack: 0.06, spirit: 8, holyResistance: 0.04},
    type: 'boots',
    rarity: 'epic'
  }),
  MammothRune: new Rune({
    name: 'Mammoth Rune',
    stats: {strength: 6, stamina: 6, magicResistance: 0.05},
    type: 'boots',
    rarity: 'epic'
  }),
  SnowmanRune: new Rune({
    name: 'Snowman Rune',
    stats: {strength: 3, spirit: 6, stamina: 3, robustness: 0.10},
    type: 'boots',
    rarity: 'epic'
  }),
  BeaverRune: new Rune({
    name: 'Beaver Rune',
    stats: {spirit: 3, agility: 6},
    type: 'boots',
    rarity: 'epic'
  }),



  ContractorRune: new Rune({
    name: 'Contractor Rune',
    stats: {agility: 5, sneak: 0.35},
    type: 'weapon',
    rarity: 'epic'
  }),
  SharkRune: new Rune({
    name: 'Shark Rune',
    stats: {strength: 5, agility: 2, physicalPierce: 0.02},
    type: 'weapon',
    rarity: 'epic',
    effect: 'Chance on hit to make your target bleed'
  }),
  SlimeRune: new Rune({
    name: 'Slime Rune',
    stats: {intellect: 5, stamina: 1},
    type: 'weapon',
    rarity: 'epic'
  }),
  BlackOozeSlimeRune: new Rune({
    name: 'Black Ooze Slime Rune',
    stats: {intellect: 5, magicPierce: 0.02},
    type: 'weapon',
    rarity: 'epic'
  }),
  GoblinRune: new Rune({
    name: 'Goblin Rune',
    stats: {agility: 6, physicalPierce: 0.03},
    type: 'weapon',
    rarity: 'epic'
  }),
  SpiderRune: new Rune({
    name: 'Spider Rune',
    stats: {agility: 5, physicalAttack: 0.02},
    type: 'weapon',
    rarity: 'epic'
  }),
  AdultSpiderRune: new Rune({
    name: 'Adult Spider Rune',
    stats: {strength: 3, physicalPierce: 0.03},
    type: 'weapon',
    rarity: 'epic'
  }),
  CrocodileRune: new Rune({
    name: 'Crocodile Rune',
    stats: {strength: 2, stamina: 2, physicalPierce: 0.03},
    type: 'weapon',
    rarity: 'epic'
  }),
  ImpRune: new Rune({
    name: 'Imp Rune',
    stats: {intellect: 5, fireAttack: 0.05},
    type: 'weapon',
    rarity: 'epic'
  }),
  SkeletonPirateRune: new Rune({
    name: 'Skeleton Pirate Rune',
    stats: {strength: 6, agility: 8, physicalPierce: 0.02},
    type: 'weapon',
    rarity: 'epic'
  }),
  GoblinChampionRune: new Rune({
    name: 'Goblin Champion Rune',
    stats: {strength: 8, physicalAttack: 0.03},
    type: 'weapon',
    rarity: 'epic'
  }),
  RatKingRune: new Rune({
    name: 'Rat King Rune',
    stats: {intellect: 5, magicAttack: 0.05},
    type: 'weapon',
    rarity: 'epic'
  }),
  BasiliskRune: new Rune({
    name: 'Basilisk Rune',
    stats: {strength: 5, spirit: 5, stamina: 2},
    type: 'weapon',
    rarity: 'epic'
  }),
  SpiderQueenRune: new Rune({
    name: 'Spider Queen Rune',
    stats: {intellect: 5, spirit: 5, castSpeed: 0.15},
    type: 'weapon',
    rarity: 'epic'
  }),
  ElderTreantRune: new Rune({
    name: 'Elder Treant Rune',
    stats: {strength: 3, agility: 9, speedBoost: 0.01},
    type: 'weapon',
    rarity: 'epic'
  }),
  DrogarRune: new Rune({
    name: 'Drogar Rune',
    stats: {strength: 5, agility: 5, physicalPierce: 0.05},
    type: 'weapon',
    rarity: 'epic'
  }),
  GoblinKingRune: new Rune({
    name: 'Goblin King Rune',
    stats: {strength: 6, agility: 2, stamina: 2, physicalAttack: 0.06},
    type: 'weapon',
    rarity: 'epic'
  }),
  WyvernRune: new Rune({
    name: 'Wyvern Rune',
    stats: {magicAttack: 0.03, intellect: 10, spirit: 8, castSpeed: 0.05},
    type: 'weapon',
    rarity: 'epic'
  }),
  YetiRune: new Rune({
    name: 'Yeti Rune',
    stats: {physicalAttack: 0.08, strength: 15, intellect: -8, stamina: 5, magicResistance: 0.05, holyResistance: 0.03},
    type: 'weapon',
    rarity: 'epic'
  }),
  SlimeKingRune: new Rune({
    name: 'Slime King Rune',
    stats: {intellect: 6, stamina: -15, castSpeed: 0.025, mana: 0.1},
    type: 'weapon',
    rarity: 'epic'
  }),



  

  CoconutCrabRune: new Rune({
    name: 'Coconut Crab Rune',
    stats: {armor: 90, strength: 2, stamina: 8, buffDuration: 0.02},
    rarity: 'legendary',
    type: 'chest'
  }),

  SnowWolfRune: new Rune({
    name: 'Snow Wolf Rune',
    stats: {intellect: 6, stamina: 4, speedBoost: 0.01},
    rarity: 'legendary',
    type: 'boots'
  }),

  IskaelRune: new Rune({
    name: 'Iskael, Lord of Endless Frost',
    stats: {physicalAttack: 0.05, magicAttack: 0.05, cdReduction: 0.1},
    rarity: 'legendary',
    type: 'weapon'
  }),

};

export default runesDatabase;