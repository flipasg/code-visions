import { MagicBook } from './MagicBook';
import { Weapon } from './Weapon';

export class Durance {
  weapon: Weapon;
  magicBook: MagicBook;
  limit: number;

  constructor(weapon: Weapon, magicBook: MagicBook, limit: number) {
    this.weapon = weapon;
    this.magicBook = magicBook;
    this.limit = limit;
  }

  public enchant() {
    const { enchantments } = this.weapon;
    if (enchantments.length === this.limit) {
      this.weapon.dropLastEnchantment();
    }

    const allowedEntchantments = this.magicBook.enchantments.filter(
      ({ prefix }) => !enchantments.find((e) => e.prefix === prefix)
    );
    let enchanment = new MagicBook(allowedEntchantments).getEnchantment();

    return this.weapon.enchant(enchanment);
  }

  public areEnchantmentsDropped() {
    return Math.random() <= 0.1;
  }

  public roll(numberOfTimes: number) {
    for (let index = 0; index < numberOfTimes; index++) {
      !this.areEnchantmentsDropped()
        ? this.enchant()
        : this.weapon.dropLastEnchantment();
    }
  }
}
