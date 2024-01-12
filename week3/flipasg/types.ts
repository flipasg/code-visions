export interface Weapon {
  name: string;
  stats: string[];
}

export interface Enchantment {
  prefix: string;
  attribute: string;
}

export type MagicBook = Record<string, Enchantment>;