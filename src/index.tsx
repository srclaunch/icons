import { BasicIcons } from './basic/index';
import { DualLightIcons } from './dual-light/index';

export { BasicIcons, DualLightIcons };
export type Icon = BasicIcons | DualLightIcons;

export async function getIcon(name: Icon) {
  return import(`.${''}/$${name}.js`);
}

export * as Basic from './basic/index';
export * as DualLight from './dual-light/index';
