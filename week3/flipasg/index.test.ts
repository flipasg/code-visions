import { describe, expect, test } from 'vitest';
import { Weapon } from './types';
import { MAGIC_BOOK, WEAPON } from './constants';
import { enchant, getRandomEnchantment } from '.';

describe('Enchantment', () => {
  describe('enchant', () => {

    test('should enchant weapon with fire', () => {
      const weapon = WEAPON;
      const enchanment = MAGIC_BOOK.fire;
      const expectedResult = {
        name: 'Inferno Dagger of the Nooblet',
        stats: ['5 - 10 attack damage', '1.2 attack speed', '+5 fire damage'],
      };
  
      expect(enchant(weapon, enchanment)).toStrictEqual(expectedResult)
    });
  
    test('should enchant weapon with agility', () => {
      const weapon = WEAPON;
      const enchanment = MAGIC_BOOK.agility;
      const expectedResult = {
        name: 'Quick Dagger of the Nooblet',
        stats: ['5 - 10 attack damage', '1.2 attack speed', '+5 agility'],
      };
  
      expect(enchant(weapon, enchanment)).toStrictEqual(expectedResult)
    });
  
    test('should enchant weapon with lifesteal', () => {
      const weapon = WEAPON;
      const enchanment = MAGIC_BOOK.lifesteal;
      const expectedResult = {
        name: 'Vampire Dagger of the Nooblet',
        stats: ['5 - 10 attack damage', '1.2 attack speed', '+5 lifesteal'],
      };
  
      expect(enchant(weapon, enchanment)).toStrictEqual(expectedResult)
    });
  
    test('should enchant weapon only once (with fire)', () => {
      const weapon = {
        name: 'Vampire Dagger of the Nooblet',
        stats: ['5 - 10 attack damage', '1.2 attack speed', '+5 lifesteal'],
      };
      const enchanment = MAGIC_BOOK.fire;
      const expectedResult = {
        name: 'Inferno Dagger of the Nooblet',
        stats: ['5 - 10 attack damage', '1.2 attack speed', '+5 fire damage'],
      };
  
      expect(enchant(weapon, enchanment)).toStrictEqual(expectedResult)
    });
  
    test('should enchant weapon only once (with agility)', () => {
      const weapon = {
        name: 'Vampire Dagger of the Nooblet',
        stats: ['5 - 10 attack damage', '1.2 attack speed', '+5 lifesteal'],
      };
      const enchanment = MAGIC_BOOK.agility;
      const expectedResult = {
        name: 'Quick Dagger of the Nooblet',
        stats: ['5 - 10 attack damage', '1.2 attack speed', '+5 agility'],
      };
  
      expect(enchant(weapon, enchanment)).toStrictEqual(expectedResult)
    });
  
    test('should enchant weapon only once (with the same enchantment)', () => {
      const weapon = {
        name: 'Vampire Dagger of the Nooblet',
        stats: ['5 - 10 attack damage', '1.2 attack speed', '+5 lifesteal'],
      };
      const enchanment = MAGIC_BOOK.lifesteal;
      const expectedResult = weapon;
  
      expect(enchant(weapon, enchanment)).toStrictEqual(expectedResult)
    });
  });

  describe('getRandomEnchantment', () => {
    test('should return a random enchantment of magic book', () => {
      expect(Object.values(MAGIC_BOOK)).toContain(getRandomEnchantment());
      expect(Object.values(MAGIC_BOOK)).toContain(getRandomEnchantment());
      expect(Object.values(MAGIC_BOOK)).toContain(getRandomEnchantment());
    });
  })
});
