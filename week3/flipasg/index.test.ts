import { describe, expect, test } from 'vitest';
import { Weapon } from './types';
import { MAGIC_BOOK, WEAPON } from './constants';
import { enchant, getRandomEnchantment, roll } from '.';

describe('Enchantment', () => {
  describe('enchant', () => {
    test('should enchant weapon with fire', () => {
      const weapon = WEAPON;
      const enchanment = MAGIC_BOOK.fire;
      const expectedResult = {
        name: 'Inferno Dagger of the Nooblet',
        stats: ['5 - 10 attack damage', '1.2 attack speed', '+5 fire damage'],
      };

      expect(enchant(weapon, enchanment)).toStrictEqual(expectedResult);
    });

    test('should enchant weapon with agility', () => {
      const weapon = WEAPON;
      const enchanment = MAGIC_BOOK.agility;
      const expectedResult = {
        name: 'Quick Dagger of the Nooblet',
        stats: ['5 - 10 attack damage', '1.2 attack speed', '+5 agility'],
      };

      expect(enchant(weapon, enchanment)).toStrictEqual(expectedResult);
    });

    test('should enchant weapon with lifesteal', () => {
      const weapon = WEAPON;
      const enchanment = MAGIC_BOOK.lifesteal;
      const expectedResult = {
        name: 'Vampire Dagger of the Nooblet',
        stats: ['5 - 10 attack damage', '1.2 attack speed', '+5 lifesteal'],
      };

      expect(enchant(weapon, enchanment)).toStrictEqual(expectedResult);
    });

    test('should enchant weapon different from Dagger', () => {
      const weapon = {
        name: 'Sword of Destiny',
        stats: ['35 - 50 attack damage', '1.5 attack speed'],
      };
      const enchanment = MAGIC_BOOK.lifesteal;
      const expectedResult = {
        name: 'Vampire Sword of Destiny',
        stats: ['35 - 50 attack damage', '1.5 attack speed', '+5 lifesteal'],
      };

      console.log(enchant(weapon, enchanment));

      expect(enchant(weapon, enchanment)).toStrictEqual(expectedResult);
    });
  });

  describe('getRandomEnchantment', () => {
    test('should return a random enchantment of magic book', () => {
      const enchantments = Object.values(MAGIC_BOOK);
      expect(Object.values(MAGIC_BOOK)).toContain(getRandomEnchantment(enchantments));
      expect(Object.values(MAGIC_BOOK)).toContain(getRandomEnchantment(enchantments));
      expect(Object.values(MAGIC_BOOK)).toContain(getRandomEnchantment(enchantments));
    });
  });

  describe('roll', () => {
    test('should return a weapon with random enchantment of magic book', () => {
      const weapon = WEAPON;
      const enchantments = Object.values(MAGIC_BOOK);

      const { name } = roll(weapon);

      expect(
        enchantments.some(({ prefix }) => name.startsWith(prefix))
      ).toBeTruthy();
    });

    test('should drop enchantment almost one time', () => {
      let weapon = WEAPON;
      let dropTimes = 0;

      for (let index = 0; index < 11; index++) {
        const {name} = roll(weapon);

        if(name.startsWith('Dagger')){
          dropTimes++;
        }
      }

      expect(dropTimes).toBeGreaterThan(0);
    });
  });
});
