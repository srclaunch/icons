import { BasicIcons } from './iconsets/basic/index';
import { DualLightIcons } from './iconsets/dual-light/index';
import * as Basic from './iconsets/basic/index';
import * as DualLight from './iconsets/dual-light/index';

export type Icon = BasicIcons | DualLightIcons;

export { DualLight };
export { Basic };

export { BasicIcons, DualLightIcons };

export function getIcon(name: string): Icon {
  console.log('Basic', Basic);
  // @ts-ignore
  console.log('name', Basic?.[name] ?? DualLight?.[name]);
  // @ts-ignore
  return Basic?.[name] ?? DualLight?.[name];
}