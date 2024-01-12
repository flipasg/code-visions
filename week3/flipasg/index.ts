import { Enchantment, Weapon } from './types';

export const enchant = (weapon: Weapon, enchantment: Enchantment): Weapon => {
  const { name, stats } = weapon;
  const { prefix, attribute } = enchantment;

  let newName = name;
  if(!newName.startsWith('Dagger')){
    newName = newName.substring(newName.indexOf('Dagger'));
  }

  const originalStats = stats.length > 2 ? stats.slice(0, 2) : stats;

  return {
    name: `${prefix} ${newName}`,
    stats: [...originalStats, attribute],
  };
};
