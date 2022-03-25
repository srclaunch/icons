import { BasicIcons } from './iconsets/basic/index';
import { DualLightIcons } from './iconsets/dual-light/index';
import * as Basic from './iconsets/basic/index';
import * as DualLight from './iconsets/dual-light/index';

export type Icon = BasicIcons | DualLightIcons;

export { DualLight };
export { Basic };

export { BasicIcons, DualLightIcons };

export function getIcon(name: keyof typeof BasicIcons | keyof typeof DualLightIcons): Icon {
  const icons = {
    ...Basic,
    ...DualLight,
  }
  console.log('icons', icons);

  const matchedIcon = [...Object.entries(icons)].find(([key, value]) => key === name);
  console.log('matchedIcon', matchedIcon)

  console.log('Basic', Basic);
  // @ts-ignore
  console.log('name', Basic[name] ?? DualLight[name]);
  // @ts-ignore
  return matchedIcon ? matchedIcon[1] : (DualLight as any)[name];
}