import { IEnchantment } from '../types';

export class Enchantment implements IEnchantment {
  prefix: string;
  attribute: string;

  constructor(prefix: string, attribute: string) {
    this.prefix = prefix;
    this.attribute = attribute;
  }
}