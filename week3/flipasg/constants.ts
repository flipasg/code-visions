import {  IMagicBook, IWeapon } from './types';

export const MAGIC_BOOK: IMagicBook = {
  "ice": {
    "prefix": "Icy",
    "attribute": "+5 ice damage"
  },
  "fire": {
    "prefix": "Inferno",
    "attribute": "+5 fire damage"
  },
  "lifesteal": {
    "prefix": "Vampire",
    "attribute": "+5 lifesteal"
  },
  "agility": {
    "prefix": "Quick",
    "attribute": "+5 agility"
  },
  "strength": {
    "prefix": "Angry",
    "attribute": "+5 strength"
  }
}

export const WEAPON: IWeapon = {
  name: 'Dagger of the Nooblet',
  stats: [
    '5 - 10 attack damage',
    '1.2 attack speed'
  ]
};