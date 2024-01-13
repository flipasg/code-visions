import { MAGIC_BOOK } from './constants';
import { Enchantment, Weapon } from './types';

export const enchantWeapon = (
  weapon: Weapon,
  enchantment: Enchantment
): Weapon => {
  const { name, stats } = weapon;
  const { prefix, attribute } = enchantment;

  return {
    name: `${prefix} ${name}`,
    stats: [...stats, attribute],
  };
};

export const getEnchantment = (enchantments: Enchantment[]): Enchantment => {
  const randomNumber = Math.floor(Math.random() * enchantments.length);

  return enchantments[randomNumber];
};

export const areEnchantmentsDropped = () => {
  return Math.random() <= 0.1;
};

export const getWeaponEnchantments = (
  weapon: Weapon,
  enchantments: Enchantment[]
) => {
  return enchantments.filter(
    ({ prefix }) => weapon.name.indexOf(prefix) !== -1
  );
};

export const dropEnchantment = (weapon: Weapon, enchantment: Enchantment) => {
  const name =
    weapon.name.indexOf(enchantment.prefix) !== -1
      ? weapon.name.replace(enchantment.prefix + ' ', '')
      : weapon.name;

    const stats = [...weapon.stats];
    const indexOfStat = stats.lastIndexOf(enchantment.attribute);
    if(indexOfStat !== -1){
      stats.splice(stats.lastIndexOf(enchantment.attribute), 1);
    }
  return {
    name,
    stats,
  };
};

const dropLastEnchantment = (weapon: Weapon, enchanments: Enchantment[]) => {

  for (let index = enchanments.length - 1; index >= 0; index--) {
    const enchantment = enchanments[index];
    if(weapon.name.startsWith(enchantment.prefix)){
      return dropEnchantment(weapon, enchantment);
    }
  }
  return weapon;
};

export const dropEnchantments = (
  weapon: Weapon,
  enchantments: Enchantment[]
) => {
  let weaponWithoutEnchantments = weapon;

  enchantments.forEach((enchantment) => {
    weaponWithoutEnchantments = dropEnchantment(
      weaponWithoutEnchantments,
      enchantment
    );
  });

  return weaponWithoutEnchantments;
};

export const enchant = (
  weapon: Weapon,
  enchantments: Enchantment[],
  limit: number
) => {
  const weaponEnchantments = getWeaponEnchantments(weapon, enchantments);
  if (weaponEnchantments.length === 0) {
    return enchantWeapon(weapon, getEnchantment(enchantments));
  }

  const allowedEntchantments = enchantments.filter(
    ({ prefix }) => !weaponEnchantments.find((e) => e.prefix === prefix)
  );
  let enchanment = getEnchantment(allowedEntchantments);

  let newWeapon = weapon;
  if (weaponEnchantments.length === limit) {
    newWeapon = dropLastEnchantment(weapon, enchantments);
  }
  return enchantWeapon(newWeapon, enchanment);
};



export const roll = (
  weapon: Weapon,
  enchantments: Enchantment[],
  numberOfTimes: number,
  limit: number
): Weapon => {
  let newWeapon = weapon;
  for (let index = 0; index < numberOfTimes; index++) {
    newWeapon = !adventure.areEnchantmentsDropped()
      ? adventure.enchant(newWeapon, enchantments, limit)
      : adventure.dropEnchantments(newWeapon, enchantments);
  }
  return newWeapon;
};

const adventure = {
  enchant,
  dropEnchantments,
  areEnchantmentsDropped,
  roll,
};

export default adventure;
