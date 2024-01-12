import { Enchantment, Weapon } from './types';

export const enchant = (weapon: Weapon, enchantment: Enchantment): Weapon => {
  const { name, stats } = weapon;
  const { prefix, attribute } = enchantment;

  return {
    name: `${prefix} ${name}`,
    stats: [...stats, attribute],
  };
};
