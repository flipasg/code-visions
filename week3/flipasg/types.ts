export interface IWeapon {
  name: string;
  stats: string[];
}

export interface IEnchantment {
  prefix: string;
  attribute: string;
}

export type IMagicBook = Record<string, IEnchantment>;