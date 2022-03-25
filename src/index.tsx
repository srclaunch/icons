import { BasicIcons } from './iconsets/basic/index';
import { DualLightIcons } from './iconsets/dual-light/index';
import * as Basic from './iconsets/basic/index';
import * as DualLight from './iconsets/dual-light/index';

export type Icon = BasicIcons | DualLightIcons;

export { DualLight };
export { Basic };

export { BasicIcons, DualLightIcons };

export function getIcon(name:  BasicIcons | DualLightIcons): Icon {
  console.log('name', name);
  const icons = {
    ...Basic,
    ...DualLight,
  }
  console.log('icons', icons);

  const matchedIcon = [...Object.entries({...BasicIcons, ...DualLightIcons})].find(([key, value]) => value === name);
  console.log('matchedIcon', matchedIcon)

  console.log('Basic', Basic);

  return matchedIcon ? matchedIcon[1] : (DualLight as any)[name];
}