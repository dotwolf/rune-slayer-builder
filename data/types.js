class Race {
  constructor({
    name,
    stats,
    rarity,
  }) {
    this.name = name;
    this.stats = stats || {};
    this.rarity = rarity || 'common';
  }
}

class Class {
  constructor({
    name,
    stats,
  }) {
    this.name = name;
    this.stats = stats || {};
  }
}

class Item {
  constructor({
    name,
    rarity,
    stats,
    runes,
    runeslots,
    description,
  }) {
    this.name = name;
    this.rarity = rarity || 'common';
    this.stats = stats || {};
    this.runes = runes || {};
    this.runeslots = runeslots || 0;
    this.description = description || null;
  }
}

class Rune {
  constructor({
    name,
    type,
    rarity,
    stats,
    description,
  }) {
    this.name = name;
    this.rarity = rarity || 'uncommon';
    this.type = type || 'null'; // Helmet, Chest, Legs, Weapon, null (any)
    this.stats = stats || {};
    this.description = description || null
  }
}

class Lantern extends Item {
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
    ...item
  }) {
    super({ ...item, runeslots: 3});
    this.damage = damage || {physical: 0};
    this.level = level || 1;
    this.type = type;
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
}

class Helmet extends Armor {
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
    posture,
    ...item
  }) {
    super({ ...item, runeslots: 0});
    this.posture = posture;
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
    level,
    ...item
  }) {
    super({ ...item, runeslots: 0});
    this.level = level || null;
  }
}

class Fairy extends Item {
  constructor({
    ...item
  }) {
    super({ ...item, runeslots: 0});
  }
}


export { Fairy, Class, Item, Rune, Weapon, Armor, Helmet, Chest, Boots, Offhand, Shield, Sash, Ring, Lantern, Back, Race };