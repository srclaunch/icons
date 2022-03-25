import { BasicIcons } from './basic/index';
import { DualLightIcons } from './dual-light/index';

export type Icon = DualLightIcons | BasicIcons;

export async function getIcon(name: Icon) {
  return import(`.${''}/$${name}.js`);
}

export * as BasicIcons from './basic/index';
export * as DualLightIcons from './dual-light/index';
