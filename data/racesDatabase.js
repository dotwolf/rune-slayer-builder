import { Race } from './types.js';

const racesDatabase = {
  Human: new Race({
    name: 'Human',
    stats: {focusefficiency: 1, manaefficiency: 2}
  }),

  Elf: new Race({
    name: 'Elf',
    stats: {speedboost: 0.05, cdreduction: 0.05, stealth: 0.1,
        mana: 0.1, focus: 0.05}
  }),

  Orc: new Race({
    name: 'Orc',
    stats: {healthregen: 0.1, maxhunger: 0.15, heatres: 0.2}
  }),

  Ghoul: new Race({
    name: 'Ghoul',
    stats: {magatk: 0.025, immunity: 0.5}
  }),
  PhantomGhoul: new Race({
    name: 'Ghoul: Phantom Ghoul',
    stats: {...Ghoul.stats,
        jumpboost: 0.03, fallreduction: 0.1, speedboost: 0.025}
  }),
  HowlingWraith: new Race({
    name: 'Ghoul: Howling Wraith',
    stats: {...Ghoul.stats,
        robustness: 5, holyres: 0.05, coldres: 0.1, speedboost: 0.025}
  }),
  WretchedWraith: new Race({
    name: 'Ghoul: Wretched Wraith',
    stats: {...Ghoul.stats,
        atkpower: 0.05, magpower: 0.05, speedboost: 0.025}
  }),

  Amphibu: new Race({
    name: 'Amphibu',
    stats: {swimboost: 35, immunity: 0.5}
  }),
  Goliath: new Race({
    name: 'Amphibu: Goliath',
    stats: {...Amphibu.stats,
        jumpboost: 0.02, fallreduction: 0.05, speedboost: -0.05,
        damagereduction: 0.05, atkpower: 0.03}
  }),
  AgileFrog: new Race({
    name: 'Amphibu: Agile Frog',
    stats: {...Amphibu.stats,
        swimboost: Amphibu.stats.swimboost + 35, speedboost: 0.15,
    jumpboost: 0.25, fallreduction: 0.15}
  }),
  GoldenPoison: new Race({
    name: 'Amphibu: Golden Poison',
    stats: {...Amphibu.stats,
        immunity: Amphibu.stats.immunity + 0.5, speedboost: 0.07,
        jumpboost: 0.15, fallreduction: 0.05}
  }),

  Ailuran: new Race({
    name: 'Ailuran',
    stats: {speedboost: 0.08, fireres: -0.1, heatres: 0.25,
        coldres: 0.25, fallreduction: 0.15, jumpboost: 0.25}
  }),

  Chiroptran: new Race({
    name: 'Chiroptran',
    stats: {windresistance: -5, holyatk: 0.05, holyres: -0.05}
  }),

  Slime: new Race({
    name: 'Slime',
    stats: {magicres: -0.075, fireres: -0.075, immunity: 0.25}
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
    stats: {speedboost: -0.05, damagereduction: 0.05,
        maxweight: 10, robustness: 0.25}
  }),
  SiegeGolem: new Race({
    name: 'Half Golem: Siege Body',
    stats: {...HalfGolem.stats,
        speedboost: HalfGolem.stats.speedboost-0.1,
        damagereduction: HalfGolem.stats.damagereduction+0.1,
        maxweight: HalfGolem.stats.maxweight+25,
        robustness: HalfGolem.stats.robustness+0.25}
  }),
  AssaultGolem: new Race({
    name: 'Half Golem: Assault Body',
    stats: {...HalfGolem.stats,
        speedboost: HalfGolem.stats.speedboost+0.06,
        damagereduction: HalfGolem.stats.damagereduction-0.1,
        atkpower: 0.12,
        robustness: HalfGolem.stats.robustness+0.25}
  }),
  CrystalGolem: new Race({
    name: 'Half Golem: Crystal Body',
    stats: {...HalfGolem.stats,
        speedboost: HalfGolem.stats.speedboost+0.06,
        damagereduction: HalfGolem.stats.damagereduction-0.1,
        magpower: 0.12,
        robustness: HalfGolem.stats.robustness+0.25}
  }),

  Bunny: new Race({
    name: 'Bunny',
  }),

  Dullahan: new Race({
    name: 'Dullahan',
    stats: {coldres: 0.25, holyres: -0.1, robustness: 0.25}
  }),

  Vampire: new Race({
    name: 'Vampire',
    stats: {luck: 1, holyres: -0.2}
  }),

  Seraphim: new Race({
    name: 'Seraphim',
    stats: {luck: 1, fireres: 0.025}
  }),
  TwoWingSeraphim: new Race({
    name: 'Seraphim: 2 Wings',
    stats: {...Seraphim.stats, agility: 15}
  }),
  FourWingSeraphim: new Race({
    name: 'Seraphim: 4 Wings',
    stats: {...Seraphim.stats, phyatk: 0.06}
  }),
  SixWingSeraphim: new Race({
    name: 'Seraphim: 6 Wings',
    stats: {...Seraphim.stats, focusefficiency: 5, manaefficiency: 5}
  }),

  Infernim: new Race({
    name: 'Infernim',
    stats: {luck: 1, fireres: 0.1, holyres: -0.05}
  }),
  TwoHornInfernim: new Race({
    name: 'Infernim: 2 Horns',
    stats: {...Infernim.stats, speedboost: 0.06}
  }),
  FourHornInfernim: new Race({
    name: 'Infernim: 4 Horns',
    stats: {...Infernim.stats, magpower: 0.1}
  }),
  SixHornInfernim: new Race({
    name: 'Infernim: 6 Horns',
    stats: {...Infernim.stats, fireattack: 0.2}
  }),
};

export default racesDatabase;