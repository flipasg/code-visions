import { afterEach, describe, expect, test, vi } from 'vitest';
import * as adventure from '.';
import {
  dropEnchantment,
  enchant,
  enchantWeapon,
  getEnchantment,
  roll,
} from '.';
import { MAGIC_BOOK, WEAPON } from './constants';

describe('Enchantment', () => {
  const enchantments = Object.values(MAGIC_BOOK);

  afterEach(() => {
    vi.resetAllMocks();
  });
  
  describe('enchantWeapon', () => {
    test('should enchant weapon with fire', () => {
      const weapon = {
        name: 'Dagger of the Nooblet',
        stats: ['5 - 10 attack damage', '1.2 attack speed'],
      };

      const enchanment = MAGIC_BOOK.fire;
      const expectedResult = {
        name: 'Inferno Dagger of the Nooblet',
        stats: ['5 - 10 attack damage', '1.2 attack speed', '+5 fire damage'],
      };

      expect(enchantWeapon(weapon, enchanment)).toStrictEqual(expectedResult);
    });

    test('should enchant weapon with agility', () => {
      const weapon = {
        name: 'Sword of Destiny',
        stats: ['35 - 50 attack damage', '1.5 attack speed'],
      };
      const enchanment = MAGIC_BOOK.agility;
      const expectedResult = {
        name: 'Quick Sword of Destiny',
        stats: ['35 - 50 attack damage', '1.5 attack speed', '+5 agility'],
      };

      expect(enchantWeapon(weapon, enchanment)).toStrictEqual(expectedResult);
    });

    test('should enchant weapon with lifesteal', () => {
      const weapon = WEAPON;
      const enchanment = MAGIC_BOOK.lifesteal;
      const expectedResult = {
        name: 'Vampire Dagger of the Nooblet',
        stats: ['5 - 10 attack damage', '1.2 attack speed', '+5 lifesteal'],
      };

      expect(enchantWeapon(weapon, enchanment)).toStrictEqual(expectedResult);
    });
  });

  describe('getEnchantment', () => {
    test('should return a random enchantment', () => {
      const results = new Set();

      for (let i = 0; i < 100; i++) {
        results.add(getEnchantment(enchantments));
      }

      expect(results.size).toBeGreaterThanOrEqual(enchantments.length);
    });
  });

  describe('areEnchantmentsDropped', () => {
    test('should return true 10% of the time', () => {
      const rollTimes = 1000;
      let trueCount = 0;

      for (let i = 0; i < rollTimes; i++) {
        if (adventure.areEnchantmentsDropped()) {
          trueCount++;
        }
      }

      const expectedTrueCount = rollTimes * 0.1;
      const tolerance = rollTimes * 0.02; // Allow a 2% tolerance

      expect(Math.abs(trueCount - expectedTrueCount)).toBeLessThanOrEqual(
        tolerance
      );
    });
  });

  describe('getWeaponEnchantments', () => {
    test('should return the weapon enchantments', () => {
      const weapon = { name: enchantments[0].prefix + ' Sword', stats: [] };
      expect(
        adventure.getWeaponEnchantments(weapon, enchantments).length
      ).toBeGreaterThan(0);
    });
    test('should return the weapon enchantments (0 if not enchanted)', () => {
      const weapon = { name: 'Sword', stats: [] };
      expect(adventure.getWeaponEnchantments(weapon, enchantments).length).toBe(
        0
      );
    });
  });

  describe('dropEnchantment', () => {
    test('should drop the enchantment from the weapon', () => {
      const weapon = {
        name: 'Inferno Dagger of the Nooblet',
        stats: ['5 - 10 attack damage', '1.2 attack speed', '+5 fire damage'],
      };

      const enchanment = MAGIC_BOOK.fire;
      const expectedResult = {
        name: 'Dagger of the Nooblet',
        stats: ['5 - 10 attack damage', '1.2 attack speed'],
      };

      expect(dropEnchantment(weapon, enchanment)).toStrictEqual(expectedResult);
    });
    test('should return the same weapon if the enchantment is not present ', () => {
      const weapon = {
        name: 'Inferno Dagger of the Nooblet',
        stats: ['5 - 10 attack damage', '1.2 attack speed', '+5 fire damage'],
      };

      const enchanment = MAGIC_BOOK.ice;

      expect(dropEnchantment(weapon, enchanment)).toStrictEqual(weapon);
    });
  });

  describe('dropEnchantments', () => {
    test('should drop weapons all enchantments', () => {
      const weapon = {
        name: 'Quick Inferno Dagger of the Nooblet',
        stats: [
          '5 - 10 attack damage',
          '1.2 attack speed',
          '+5 fire damage',
          '+5 agility',
        ],
      };

      const expectedResult = {
        name: 'Dagger of the Nooblet',
        stats: ['5 - 10 attack damage', '1.2 attack speed'],
      };

      expect(adventure.dropEnchantments(weapon, enchantments)).toStrictEqual(
        expectedResult
      );
    });

    test('should return the same weapon if not enchanted', () => {
      const weapon = {
        name: 'Dagger of the Nooblet',
        stats: ['5 - 10 attack damage', '1.2 attack speed'],
      };

      expect(adventure.dropEnchantments(weapon, enchantments)).toStrictEqual(
        weapon
      );
    });
  });

  describe('enchant', () => {
    test('should return a weapon with random enchantment of magic book', () => {
      const weapon = WEAPON;
      vi.spyOn(adventure, 'areEnchantmentsDropped').mockReturnValue(false);

      const { name } = enchant(weapon, enchantments, 1);

      expect(
        enchantments.some(({ prefix }) => name.startsWith(prefix))
      ).toBeTruthy();
    });

    test('should return a weapon with random enchantment of magic book (max 3)', () => {
      let weapon = WEAPON;
      const limit = 3;
      vi.spyOn(adventure, 'areEnchantmentsDropped').mockReturnValue(false);

      for (let i = 0; i < 150; i++) {
        weapon = enchant(weapon, enchantments, limit);
      }

      expect(weapon.stats.length).toBe(WEAPON.stats.length + limit);
    });
  });
});
