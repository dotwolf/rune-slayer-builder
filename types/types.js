// Tipos base
class Item {
  constructor({
    name,
    rarity,
    stats,
    runes,
    runeslots,
  }) {
    this.name = name;
    this.rarity = rarity || 'common';
    this.stats = stats || {};
    this.runes = runes || {};
    this.runeslots = runeslots || 0;
  }
  getTooltip() {
    return 1; //Fazer return com todas as informaçoes relevantes
  }
}

class Rune {
  constructor({
    name,
    type,
    rarity,
    stats,
  }) {
    this.name = name;
    this.rarity = rarity || 'uncommon';
    this.type = type || null; // Head, Chest, Legs, Weapon, null
    this.stats = stats || {};
  }

  getTooltip() {
    return `${this.name} (${this.rarity}, ${this.type}): ${this.effect}`;
  }
}

class Lamp extends Item {
  constructor({
    ...item
  }) {
    super({ ...item, runeslots: 0});
  }
}

class Weapon extends Item {
  constructor({
    damage,
    level,
    type,
    ...itemProps
  }) {
    super({ ...itemProps, runeslots: 3});
    this.damage = damage;
    this.level = level || 1;
    this.type = type;
  }
  getTooltip() {
    return 1; //Fazer return com todas as informaçoes relevantes
  }
}

class Armor extends Item {
  constructor({
    armor,
    level,
    type,
    ...item
  }) {
    super({ ...item });
    this.armor = armor || 0;
    this.level = level || null;
    this.type = type;
  }
  getTooltip() {
    return 1; //Fazer return com todas as informaçoes relevantes
  }
}

class Head extends Armor {
    constructor({
    ...item
  }) {
    super({ ...item, runeslots: 4});
  }
}

class Boots extends Armor {
    constructor({
    ...item
  }) {
    super({ ...item, runeslots: 4});
  }
}

class Chest extends Armor {
    constructor({
    ...item
  }) {
    super({ ...item, runeslots: 6});
  }
}

class Offhand extends Armor {
    constructor({
    ...item
  }) {
    super({ ...item, runeslots: 3});
  }
}

class Back extends Armor {
    constructor({
    ...item
  }) {
    super({ ...item, runeslots: 0, type: 'miscellaneous'});
  }
}

class Shield extends Armor {
    constructor({
    ...item
  }) {
    super({ ...item, runeslots: 0});
  }
}

class Sash extends Item {
  constructor({
    ...item
  }) {
    super({ ...item, runeslots: 0});
  }
}


class Ring extends Item {
  constructor({
    ...item
  }) {
    super({ ...item, runeslots: 0});
  }
}


export { Item, Rune, Weapon, Armor, Head, Chest, Boots, Offhand, Shield, Sash, Ring, Lamp };