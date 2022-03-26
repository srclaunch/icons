import { BasicIcons } from './iconsets/basic/index';
import { DualLightIcons } from './iconsets/dual-light/index';
import * as Basic from './iconsets/basic/index';
import * as DualLight from './iconsets/dual-light/index';

export type Icon = BasicIcons | DualLightIcons;

export { DualLight };
export { Basic };

export { BasicIcons, DualLightIcons };

export function getIcon(name:  BasicIcons | DualLightIcons): Icon | null {
  const { BasicIcons: notUsedBasic, ...otherBasicIcons } = Basic;
  const { DualLightIcons: notUsedDualLight, ...otherDualLightIcons } = DualLight;
  const icons = {
    ...otherBasicIcons,
    ...otherDualLightIcons,
  }
  const matchedIcon = [...Object.entries({...BasicIcons, ...DualLightIcons})].find(([key, value]) => value === name);

  if (matchedIcon && matchedIcon[0]) {
  // @ts-ignore
    return icons[matchedIcon[0]];    
  }

  return null;
}