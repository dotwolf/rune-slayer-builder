import { Class } from './types.js';

const classesDatabase = {
  Warrior: new Class({
    name: 'Warrior',
    stats: {strength: 3, stamina: 2}
  }),
  Archer: new Class({
    name: 'Archer',
    stats: {agility: 3, stamina: 1, spirit: 1}
  }),
  Thief: new Class({
    name: 'Thief',
    stats: {agility: 3, stamina: 1, strength: 1}
  }),
  Striker: new Class({
    name: 'Striker',
    stats: {stamina: 3, strength: 2}
  }),
  Magician: new Class({
    name: 'Magician',
    stats: {intellect: 3, spirit: 2}
  }),
  Priest: new Class({
    name: 'Priest',
    stats: {spirit: 3, intellect: 2}
  }),
  Samurai: new Class({
    name: 'Samurai',
    stats: {strength: 2, agility: 2, stamina: 1}
  })
}

export default classesDatabase;