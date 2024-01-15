import { Enchantment } from './Enchantment';

export class MagicBook {
  enchantments: Enchantment[];

  constructor(enchantments: Enchantment[]) {
    this.enchantments = enchantments;
  }

  public getEnchantment(): Enchantment {
    const randomNumber = Math.floor(Math.random() * this.enchantments.length);

    return this.enchantments[randomNumber];
  }
}