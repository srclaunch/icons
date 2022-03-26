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
  console.log('otherBasicIcons', otherBasicIcons)
  const { DualLightIcons: notUsedDualLight, ...otherDualLightIcons } = DualLight;
  console.log('otherDualLightIcons', otherDualLightIcons)
  const icons = {
    ...otherBasicIcons,
    ...otherDualLightIcons,
  }
  console.log('icons', icons)

  const matchedIcon = [...Object.entries(name.includes('basic/') ? {...BasicIcons, } : { ...DualLightIcons})].find(([key, value]) => value === name);
  console.log('matchedIcon', matchedIcon)
  if (matchedIcon && matchedIcon[0]) {
    // @ts-ignore
    return icons[matchedIcon[0]];    
  }

  return null;
}