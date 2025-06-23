import { Rune } from './types.js';

const runesDatabase = {
  LesserStrengthRune: new Rune({
    name: 'Lesser Strength Rune',
    stats: {strength: 3}
  }),

  StrengthRune: new Rune({
    name: 'Strength Rune',
    stats: {strength: 6},
    rarity: 'rare'
  }),

  GiantBeeRune: new Rune({
    name: 'Giant Bee Rune',
    stats: {intellect: 8, spirit: 5},
    rarity: 'epic'
  }),
  
  IskaelRune: new Rune({
    name: 'Iskael, Lord of Endless Frost',
    stats: {phyatk: 0.05, magatk: 0.05, cdreduction: 0.1},
    rarity: 'legendary'
  })

};

export default runesDatabase;