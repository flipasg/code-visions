import { afterEach, describe, expect, test, vi } from 'vitest';
import { MAGIC_BOOK, WEAPON } from './constants';
import { Weapon } from './classes/Weapon';
import { MagicBook } from './classes/MagicBook';
import { Durance } from './classes/Durance';

describe('Durance', () => {

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('Weapon > enchant', () => {
    test('should enchant weapon with fire', () => {
      const weapon = new Weapon('Dagger of the Nooblet', [
        '5 - 10 attack damage',
        '1.2 attack speed',
      ]);

      weapon.enchant(MAGIC_BOOK.fire);

      expect(weapon.describe()).toBe(`Inferno Dagger of the Nooblet\n5 - 10 attack damage\n1.2 attack speed\n+5 fire damage`);
    });

    test('should enchant weapon with agility', () => {
      const weapon = new Weapon('Dagger of the Nooblet', [
        '5 - 10 attack damage',
        '1.2 attack speed',
      ]);
      weapon.enchant(MAGIC_BOOK.agility);

      expect(weapon.describe()).toBe(`Quick Dagger of the Nooblet\n5 - 10 attack damage\n1.2 attack speed\n+5 agility`);
    });

    test('should enchant weapon with lifesteal', () => {
      const weapon = new Weapon('Dagger of the Nooblet', [
        '5 - 10 attack damage',
        '1.2 attack speed',
      ]);
      weapon.enchant(MAGIC_BOOK.lifesteal);

      expect(weapon.describe()).toBe(`Vampire Dagger of the Nooblet\n5 - 10 attack damage\n1.2 attack speed\n+5 lifesteal`);
    });
  });

  describe('Magic Book > getEnchantment', () => {
    test('should return a random enchantment', () => {
      const magicBook = new MagicBook(Object.values(MAGIC_BOOK));
      const results = new Set();

      for (let i = 0; i < 100; i++) {
        results.add(magicBook.getEnchantment());
      }

      expect(results.size).toBeGreaterThanOrEqual(magicBook.enchantments.length);
    });
  });

  describe('Durance > areEnchantmentsDropped', () => {
    test('should return true 10% of the time', () => {
      const magicBook = new MagicBook(Object.values(MAGIC_BOOK));

      const durance = new Durance(
        new Weapon('Dagger of the Nooblet', [
          '5 - 10 attack damage',
          '1.2 attack speed',
        ]),
        magicBook,
        3
      );

      const rollTimes = 1000;
      let trueCount = 0;

      for (let i = 0; i < rollTimes; i++) {
        if (durance.areEnchantmentsDropped()) {
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

  describe('enchant', () => {
    test('should return a weapon with random enchantment of magic book', () => {
      const magicBook = new MagicBook(Object.values(MAGIC_BOOK));

      const durance = new Durance(
        new Weapon('Dagger of the Nooblet', [
          '5 - 10 attack damage',
          '1.2 attack speed',
        ]),
        magicBook,
        3
      );
      vi.spyOn(durance, 'areEnchantmentsDropped').mockReturnValue(false);

      durance.roll(1);

      expect(
        durance.weapon.enchantments.length
      ).toBe(1);
      expect(
        durance.weapon.enchantments.every(({ prefix }) =>
          Object.values(MAGIC_BOOK).map(({prefix}) => prefix).includes(prefix)
        )
      ).toBeTruthy();
    });

    test('should return a weapon with random enchantment of magic book (max 3)', () => {
      const magicBook = new MagicBook(Object.values(MAGIC_BOOK));

      const durance = new Durance(
        new Weapon('Dagger of the Nooblet', [
          '5 - 10 attack damage',
          '1.2 attack speed',
        ]),
        magicBook,
        3
      );
      vi.spyOn(durance, 'areEnchantmentsDropped').mockReturnValue(false);

      durance.roll(150);

      expect(durance.weapon.enchantments.length).toBe(3);
    });

    test('should drop last enchantment if areEnchantmentsDropped is true', () => {
      const magicBook = new MagicBook(Object.values(MAGIC_BOOK));

      const weapon = new Weapon('Dagger of the Nooblet', [
        '5 - 10 attack damage',
        '1.2 attack speed',
      ]);
      const durance = new Durance(
        weapon,
        magicBook,
        3
      );
      vi.spyOn(durance, 'areEnchantmentsDropped').mockReturnValue(true);
      const spy = vi.spyOn(weapon, 'dropLastEnchantment');

      durance.roll(1);

      expect(spy).toHaveBeenCalled();
    });
  });
});
