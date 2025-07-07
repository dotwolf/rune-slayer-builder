const statlist = [
  { name: "Strength", stat: "strength", percentual: false, category: 'Main' },
  { name: "Agility", stat: "agility", percentual: false, category: 'Main' },
  { name: "Intellect", stat: "intellect", percentual: false, category: 'Main' },
  { name: "Spirit", stat: "spirit", percentual: false, category: 'Main' },
  { name: "Stamina", stat: "stamina", percentual: false, category: 'Main' },
  { name: "Luck", stat: "luck", percentual: false, category: 'Main' },
  { name: "Posture", stat: "posture", percentual: false, category: 'Main' },

  { name: "Critical Chance", stat: "critChance", percentual: true, category: 'Critical' },
  { name: "Critical Damage", stat: "critDamage", percentual: true, category: 'Critical' },
  { name: "Critical Defense", stat: "critDefense", percentual: true, category: 'Critical' },

  { name: "Attack Power", stat: "attackPower", percentual: true, category: 'Attack' },
  { name: "Physical Pierce", stat: "physicalPierce", percentual: true, category: 'Attack' },
  { name: "Physical Attack", stat: "physicalAttack", percentual: true, category: 'Attack' },

  { name: "Magic Resistance", stat: "magicResistance", percentual: true, category: 'Resistance' },
  { name: "Magic Critical Chance", stat: "magicCritChance", percentual: true, category: 'Critical' },
  { name: "Magic Attack", stat: "magicAttack", percentual: true, category: 'Attack' },
  { name: "Magic Power", stat: "magicPower", percentual: true, category: 'Attack' },
  { name: "Magic Pierce", stat: "magicPierce", percentual: true, category: 'Attack' },

  { name: "Cold Resistance", stat: "coldResistance", percentual: true, category: 'Resistance' },
  { name: "Heat Resistance", stat: "heatResistance", percentual: true, category: 'Resistance' },
  { name: "Fire Resistance", stat: "fireResistance", percentual: true, category: 'Resistance' },
  { name: "Fire Attack", stat: "fireAttack", percentual: true, category: 'Attack' },
  { name: "Earth Attack", stat: "earthAttack", percentual: true, category: 'Attack' },
  { name: "Water Attack", stat: "waterAttack", percentual: true, category: 'Attack' },
  { name: "Lightning Attack", stat: "lightningAttack", percentual: true, category: 'Attack' },
  { name: "Wind Attack", stat: "windAttack", percentual: true, category: 'Attack' },
  { name: "Holy Resistance", stat: "holyResistance", percentual: true, category: 'Resistance' },
  { name: "Holy Attack", stat: "holyAttack", percentual: true, category: 'Attack' },
  { name: "Undead Damage", stat: "undeadDamage", percentual: true, category: 'Attack' },
  { name: "Wind Resistance", stat: "windResistance", percentual: false, category: 'Resistance' },
  { name: "Tundra Visibility", stat: "tundraVisibility", percentual: true, category: 'Miscellaneous' },

  { name: "Speed Boost", stat: "speedBoost", percentual: true, category: 'Mobility' },
  { name: "Speed", stat: "speed", percentual: false, category: 'Mobility' },
  { name: "Jump Boost", stat: "jumpBoost", percentual: true, category: 'Mobility' },
  { name: "Fall Reduction", stat: "fallReduction", percentual: true, category: 'Mobility' },
  { name: "Swim Boost", stat: "swimBoost", percentual: false, category: 'Mobility' },
  { name: "Stealth", stat: "stealth", percentual: true, category: 'Mobility' },
  { name: "Sneak", stat: "sneak", percentual: true, category: 'Mobility' },

  { name: "Buff Duration", stat: "buffDuration", percentual: true, category: 'Duration' },
  { name: "Cooldown Reduction", stat: "cdReduction", percentual: true, category: 'Duration' },
  { name: "Damage Reduction", stat: "damageReduction", percentual: true, category: 'Resistance' },
  { name: "Robustness", stat: "robustness", percentual: true, category: 'Resistance' },
  { name: "Concentration", stat: "concentration", percentual: true, category: 'Resistance' },
  { name: "Cast Speed", stat: "castSpeed", percentual: true, category: 'Duration' },
  { name: "Cast Time", stat: "castTime", percentual: false, category: 'Duration' },

  { name: "Total Mana", stat: "mana", percentual: true, category: 'Resource' },
  { name: "Focus", stat: "focus", percentual: true, category: 'Resource' },
  { name: "Mana Efficiency", stat: "manaEfficiency", percentual: false, category: 'Resource' },
  { name: "Focus Efficiency", stat: "focusEfficiency", percentual: false, category: 'Resource' },

  { name: "Armor", stat: "armor", percentual: false, category: 'Main' },
  { name: "Max Weight", stat: "maxWeight", percentual: false, category: 'Resource' },
  { name: "Max Hunger", stat: "maxHunger", percentual: true, category: 'Resource' },
  { name: "Health Regen", stat: "healthRegen", percentual: true, category: 'Resource' },
  { name: "Immunity", stat: "immunity", percentual: true, category: 'Resistance' },
  { name: "Fishing Power", stat: "fishingPower", percentual: true, category: 'Miscellaneous' },
  { name: "Money Gain", stat: "moneyGain", percentual: true, category: 'Miscellaneous' }
];

export default statlist;