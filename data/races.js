import { Race } from './types.js';

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

  Ghoul: new Race({
    name: 'Ghoul',
    stats: {magicAttack: 0.025, immunity: 0.5}
  }),
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

  Amphibu: new Race({
    name: 'Amphibu',
    stats: {swimBoost: 35, immunity: 0.5}
  }),
  Goliath: new Race({
    name: 'Amphibu: Goliath',
    stats: {...Amphibu.stats,
        jumpBoost: 0.02, fallReduction: 0.05, speedBoost: -0.05,
        damageReduction: 0.05, attackPower: 0.03}
  }),
  AgileFrog: new Race({
    name: 'Amphibu: Agile Frog',
    stats: {...Amphibu.stats,
        swimBoost: Amphibu.stats.swimBoost + 35, speedBoost: 0.15,
    jumpBoost: 0.25, fallReduction: 0.15}
  }),
  GoldenPoison: new Race({
    name: 'Amphibu: Golden Poison',
    stats: {...Amphibu.stats,
        immunity: Amphibu.stats.immunity + 0.5, speedBoost: 0.07,
        jumpBoost: 0.15, fallReduction: 0.05}
  }),

  Ailuran: new Race({
    name: 'Ailuran',
    stats: {speedBoost: 0.08, fireResistance: -0.1, heatResistance: 0.25,
        coldResistance: 0.25, fallReduction: 0.15, jumpBoost: 0.25}
  }),

  Chiroptran: new Race({
    name: 'Chiroptran',
    stats: {windResistance: -5, holyAttack: 0.05, holyResistance: -0.05}
  }),

  Slime: new Race({
    name: 'Slime',
    stats: {magicResistance: -0.075, fireResistance: -0.075, immunity: 0.25}
  }),
  BlackOozeSlime: new Race({
    name: 'Black Ooze Slime',
    stats: {...Slime.stats}
  }),
  PredatorSlime: new Race({
    name: 'Predator Slime',
    stats: {...Slime.stats}
  }),
  SapphireSlime: new Race({
    name: 'Sapphire Slime',
    stats: {...Slime.stats}
  }),

  HalfGolem: new Race({
    name: 'Half Golem',
    stats: {speedBoost: -0.05, damageReduction: 0.05,
        maxWeight: 10, robustness: 0.25}
  }),
  SiegeGolem: new Race({
    name: 'Half Golem: Siege Body',
    stats: {...HalfGolem.stats,
        speedBoost: HalfGolem.stats.speedBoost-0.1,
        damageReduction: HalfGolem.stats.damageReduction+0.1,
        maxWeight: HalfGolem.stats.maxWeight+25,
        robustness: HalfGolem.stats.robustness+0.25}
  }),
  AssaultGolem: new Race({
    name: 'Half Golem: Assault Body',
    stats: {...HalfGolem.stats,
        speedBoost: HalfGolem.stats.speedBoost+0.06,
        damageReduction: HalfGolem.stats.damageReduction-0.1,
        attackPower: 0.12,
        robustness: HalfGolem.stats.robustness+0.25}
  }),
  CrystalGolem: new Race({
    name: 'Half Golem: Crystal Body',
    stats: {...HalfGolem.stats,
        speedBoost: HalfGolem.stats.speedBoost+0.06,
        damageReduction: HalfGolem.stats.damageReduction-0.1,
        magicPower: 0.12,
        robustness: HalfGolem.stats.robustness+0.25}
  }),

  Bunny: new Race({
    name: 'Bunny',
  }),

  Dullahan: new Race({
    name: 'Dullahan',
    stats: {coldResistance: 0.25, holyResistance: -0.1, robustness: 0.25}
  }),

  Vampire: new Race({
    name: 'Vampire',
    stats: {luck: 1, holyResistance: -0.2}
  }),

  Seraphim: new Race({
    name: 'Seraphim',
    stats: {luck: 1, fireResistance: 0.025}
  }),
  TwoWingSeraphim: new Race({
    name: 'Seraphim: 2 Wings',
    stats: {...Seraphim.stats, agility: 15}
  }),
  FourWingSeraphim: new Race({
    name: 'Seraphim: 4 Wings',
    stats: {...Seraphim.stats, physicalAttack: 0.06}
  }),
  SixWingSeraphim: new Race({
    name: 'Seraphim: 6 Wings',
    stats: {...Seraphim.stats, focusEfficiency: 5, manaEfficiency: 5}
  }),

  Infernim: new Race({
    name: 'Infernim',
    stats: {luck: 1, fireResistance: 0.1, holyResistance: -0.05}
  }),
  TwoHornInfernim: new Race({
    name: 'Infernim: 2 Horns',
    stats: {...Infernim.stats, speedBoost: 0.06}
  }),
  FourHornInfernim: new Race({
    name: 'Infernim: 4 Horns',
    stats: {...Infernim.stats, magicPower: 0.1}
  }),
  SixHornInfernim: new Race({
    name: 'Infernim: 6 Horns',
    stats: {...Infernim.stats, fireAttack: 0.2}
  }),
};

export default racesDatabase;