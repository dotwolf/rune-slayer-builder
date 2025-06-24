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
    stats: {spirit: 3},
    rarity: 'rare'
  }),
  StaminaRune: new Rune({
    name: 'Stamina Rune',
    stats: {stamina: 1},
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
    stats: {spirit: 5, magatk: 0.05},
    type: 'helmet',
    rarity: 'epic',
    description: 'When it\'s raining, your lightning based attacks have a chance to call down a lightning strike.'
  }),
  DireBearRune: new Rune({
    name: 'Dire Bear Rune',
    stats: {stamina: 2, physpierce: 0.06},
    type: 'helmet',
    rarity: 'epic'
  }),
  RuneGolemRune: new Rune({
    name: 'Rune Golem Rune',
    stats: {stamina: 3, holyres: 0.02, cdreduction: 0.15},
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
    stats: {speed: -2, stamina: 8, magres: 0.08},
    type: 'helmet',
    rarity: 'epic'
  }),
  FrostyRune: new Rune({
    name: 'Frosty Rune',
    stats: {magatk: 0.08, intellect: 6, spirit: 4, magcrit: 0.02},
    type: 'helmet',
    rarity: 'epic'
  }),
  
  KingMandrakeRune: new Rune({
    name: 'King Mandrake Rune',
    stats: {spirit: 5, intellect: 3, concentration: 0.1},
    type: 'chest',
    rarity: 'epic'
  }),
  LycantharRune: new Rune({
    name: 'King Mandrake Rune',
    stats: {strength: 8, intellect: -5, stamina: -3, magres: 0.05},
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
    stats: {stamina: 5, phyatk: 0.05, fireres: 0.06},
    type: 'chest',
    rarity: 'epic'
  }),
  RatRune: new Rune({
    name: 'Rat Rune',
    stats: {intellect: 4, spirit: 2, speedboost: 0.01},
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
    stats: {strength: 5, stamina: 3, phyatk: 0.02},
    type: 'chest',
    rarity: 'epic'
  }),
  RatRune: new Rune({
    name: 'Rat Rune',
    stats: {intellect: 4, spirit: 2, speedboost: 0.01},
    type: 'chest',
    rarity: 'epic'
  }),
  AmphithereRune: new Rune({
    name: 'Amphithere Rune',
    stats: {agility: 5, speedBoost: 0.01},
    slot: 'chest',
    rarity: 'epic'
  }),
  HammerhelmetRune: new Rune({
    name: 'Hammerhelmet Rune',
    stats: {phyatk: 0.02, armor: 50, strength: 6, stamina: 4},
    slot: 'chest',
    rarity: 'epic'
  }),
  MudCrabRune: new Rune({
    name: 'Mud Crab Rune',
    stats: {armor: 125, strength: 3, stamina: 6, speedboost: -0.02, 
      magres: -0.06, holyres: 0.02},
    slot: 'chest',
    rarity: 'epic'
  }),
  GraltharRune: new Rune({
    name: 'Gralthar Rune',
    stats: {agility: 5, stamina: 3, phyatk: 0.02},
    slot: 'chest',
    rarity: 'epic'
  }),
  FiendRune: new Rune({
    name: 'Fiend Rune',
    stats: {stamina: 4, fireres: 0.06},
    slot: 'chest',
    rarity: 'epic'
  }),
  LobsterRune: new Rune({
    name: 'Lobster Rune',
    stats: {phyatk: 0.02, armor: 110, strength: 2, stamina: 3, speedboost: -0.02},
    slot: 'chest',
    rarity: 'epic'
  }),
  IceGolemRune: new Rune({
    name: 'Ice Golem Rune',
    stats: {
    armor: -50, agility: 12, stamina: 1, speedboost: 0.03, magres: 0.03},
    slot: 'chest',
    rarity: 'epic'
  }),
  WhaleRune: new Rune({
    name: 'Whale Rune',
    stats: {armor: 100, intellect: 10, spirit: 5, cdreduction: 0.05},
    slot: 'chest',
    rarity: 'epic'
  }),




  PurityRune: new Rune({
    name: 'Purity Rune',
    stats: {spirit: 5, holyatk: 0.05},
    slot: 'boots',
    rarity: 'epic',
    description: 'Removes all status effects from the people you heal.'
  }),
  BeeRune: new Rune({
    name: 'Bee Rune',
    stats: {intellect: 4, spirit: 3},
    slot: 'boots',
    rarity: 'epic'
  }),
  DeerRune: new Rune({
    name: 'Deer Rune',
    stats: {spirit: 3, stamina: 1},
    slot: 'boots',
    rarity: 'epic'
  }),
  WolfRune: new Rune({
    name: 'Wolf Rune',
    stats: {spirit: 1, agility: 6, stamina: 2},
    slot: 'boots',
    rarity: 'epic'
  }),
  BearRune: new Rune({
    name: 'Bear Rune',
    stats: {strength: 8, stamina: 2, magres: 0.02},
    slot: 'boots',
    rarity: 'epic'
  }),
  PantherRune: new Rune({
    name: 'Panther Rune',
    stats: {agility: 8, stamina: 1, phypierce: 0.02},
    slot: 'boots',
    rarity: 'epic'
  }),
  BansheeRune: new Rune({
    name: 'Banshee Rune',
    stats: {intellect: 5, spirit: 4},
    slot: 'boots',
    rarity: 'epic'
  }),
  HillTrollRune: new Rune({
    name: 'Hill Troll Rune',
    stats: {strength: 8, stamina: 3, magres: 0.02, holyres: 0.02},
    slot: 'boots',
    rarity: 'epic'
  }),
  RazorFangRune: new Rune({
    name: 'Razor Fang Rune',
    stats: {stamina: 5, magres: 0.05},
    slot: 'boots',
    rarity: 'epic'
  }),
  SabertoothRune: new Rune({
    name: 'Sabertooth Rune',
    stats: {magatk: 0.06, spirit: 8, holyres: 0.04},
    slot: 'boots',
    rarity: 'epic'
  }),
  MammothRune: new Rune({
    name: 'Mammoth Rune',
    stats: {strength: 6, stamina: 6, magres: 0.05},
    slot: 'boots',
    rarity: 'epic'
  }),
  SnowmanRune: new Rune({
    name: 'Snowman Rune',
    stats: {strength: 3, spirit: 6, stamina: 3, robustness: 0.10},
    slot: 'boots',
    rarity: 'epic'
  }),




  ContractorRune: new Rune({
    name: 'Contractor Rune',
    stats: {agility: 5, sneak: 0.35},
    slot: 'weapon',
    rarity: 'epic'
  }),
  SharkRune: new Rune({
    name: 'Shark Rune',
    stats: {strength: 5, agility: 2, phypierce: 0.02},
    slot: 'weapon',
    rarity: 'epic',
    effect: 'Chance on hit to make your target bleed'
  }),
  SlimeRune: new Rune({
    name: 'Slime Rune',
    stats: {intellect: 5, stamina: 1},
    slot: 'weapon',
    rarity: 'epic'
  }),
  BlackOozeSlimeRune: new Rune({
    name: 'Black Ooze Slime Rune',
    stats: {intellect: 5, magpierce: 0.02},
    slot: 'weapon',
    rarity: 'epic'
  }),
  GoblinRune: new Rune({
    name: 'Goblin Rune',
    stats: {agility: 6, phypierce: 0.03},
    slot: 'weapon',
    rarity: 'epic'
  }),
  SpiderRune: new Rune({
    name: 'Spider Rune',
    stats: {agility: 5, phyatk: 0.02},
    slot: 'weapon',
    rarity: 'epic'
  }),
  AdultSpiderRune: new Rune({
    name: 'Adult Spider Rune',
    stats: {strength: 3, phypierce: 0.03},
    slot: 'weapon',
    rarity: 'epic'
  }),
  CrocodileRune: new Rune({
    name: 'Crocodile Rune',
    stats: {strength: 2, stamina: 2, phypierce: 0.03},
    slot: 'weapon',
    rarity: 'epic'
  }),
  ImpRune: new Rune({
    name: 'Imp Rune',
    stats: {intellect: 5, fireatk: 0.05},
    slot: 'weapon',
    rarity: 'epic'
  }),
  SkeletonPirateRune: new Rune({
    name: 'Skeleton Pirate Rune',
    stats: {strength: 6, agility: 8, phypierce: 0.02},
    slot: 'weapon',
    rarity: 'epic'
  }),
  GoblinChampionRune: new Rune({
    name: 'Goblin Champion Rune',
    stats: {strength: 8, phyatk: 0.03},
    slot: 'weapon',
    rarity: 'epic'
  }),
  RatKingRune: new Rune({
    name: 'Rat King Rune',
    stats: {intellect: 5, magatk: 0.05},
    slot: 'weapon',
    rarity: 'epic'
  }),
  BasiliskRune: new Rune({
    name: 'Basilisk Rune',
    stats: {strength: 5, spirit: 5, stamina: 2},
    slot: 'weapon',
    rarity: 'epic'
  }),
  SpiderQueenRune: new Rune({
    name: 'Spider Queen Rune',
    stats: {intellect: 5, spirit: 5, casttime: 20},
    slot: 'weapon',
    rarity: 'epic'
  }),
  ElderTreantRune: new Rune({
    name: 'Elder Treant Rune',
    stats: {strength: 3, agility: 9, speedboost: 0.01},
    slot: 'weapon',
    rarity: 'epic'
  }),
  DrogarRune: new Rune({
    name: 'Drogar Rune',
    stats: {strength: 5, agility: 5, phypierce: 0.05},
    slot: 'weapon',
    rarity: 'epic'
  }),
  GoblinKingRune: new Rune({
    name: 'Goblin King Rune',
    stats: {strength: 6, agility: 2, stamina: 2, phyatk: 0.06},
    slot: 'weapon',
    rarity: 'epic'
  }),
  WyvernRune: new Rune({
    name: 'Wyvern Rune',
    stats: {magatk: 0.03, intellect: 10, spirit: 8, castspeed: 0.05},
    slot: 'weapon',
    rarity: 'epic'
  }),
  YetiRune: new Rune({
    name: 'Yeti Rune',
    stats: {phyatk: 8, strength: 15, intellect: -8, stamina: 5, magres: 0.05, holyres: 0.03},
    slot: 'weapon',
    rarity: 'epic'
  }),



  
  IskaelRune: new Rune({
    name: 'Iskael, Lord of Endless Frost',
    stats: {phyatk: 0.05, magatk: 0.05, cdreduction: 0.1},
    rarity: 'legendary'
  })

};

export default runesDatabase;