import { Enchantment } from './Enchantment';
import { IWeapon } from '../types';

export class Weapon implements IWeapon {
  name: string;
  stats: string[];
  enchantments: Enchantment[];

  constructor(name: string, stats: string[]) {
    this.name = name;
    this.stats = stats;
    this.enchantments = [];
  }

  public enchant(enchantment: Enchantment) {
    this.enchantments.push(enchantment);
  }

  public dropLastEnchantment() {
    this.enchantments = this.enchantments.slice(0, -1);
  }

  public describe(){
    const prefix = this.enchantments.map(({ prefix }) => prefix).join(' ');
    const enchanments = this.enchantments.map(({ attribute }) => attribute).join('\n');
    return `${prefix} ${this.name}\n${this.stats.join('\n')}\n${enchanments}`;
  }
}