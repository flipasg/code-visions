import { MAGIC_BOOK } from './constants';
import { Enchantment, Weapon } from './types';

export const enchant = (weapon: Weapon, enchantment: Enchantment): Weapon => {
  const { name, stats } = weapon;
  const { prefix, attribute } = enchantment;

  return {
    name: `${prefix} ${name}`,
    stats: [...stats, attribute],
  };
};

export const getRandomEnchantment = (
  enchantments: Enchantment[]
): Enchantment => {
  const randomNumber = Math.floor(Math.random() * enchantments.length);

  return enchantments[randomNumber];
};

export const roll = (weapon: Weapon) => {
  const dropPossibilities = Math.floor(Math.random() * 10);
  const enchantments = Object.values(MAGIC_BOOK);

  let enchanment = getRandomEnchantment(enchantments);
  const isEnchanted = enchantments.some(({ prefix }) =>
    weapon.name.startsWith(prefix)
  );
  const weaponPrefix = weapon.name.substring(0, weapon.name.indexOf(' '));

  const weaponWithoutEnchantment = {
    name: weapon.name.substring(weapon.name.indexOf(' ')),
    stats: [...weapon.stats].slice(0, -1),
  };

  if(dropPossibilities === 1){
    return isEnchanted ? weaponWithoutEnchantment : weapon;
  }
  while (enchanment.prefix === weaponPrefix) {
    enchanment = getRandomEnchantment(enchantments);
  }

  return enchant(isEnchanted ? weaponWithoutEnchantment : weapon, enchanment);
};

export const rollWeapon = (weapon: Weapon, numberOfTimes: number): Weapon => {
  let newWeapon = weapon;
  for (let index = 0; index < 11; index++) {
    newWeapon = roll(weapon);
  }
  return newWeapon;
};
