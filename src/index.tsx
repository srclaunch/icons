import { BasicIcons } from './iconsets/basic/index';
import { DualLightIcons } from './iconsets/dual-light/index';

export { BasicIcons, DualLightIcons };
export type Icon = BasicIcons | DualLightIcons;

export async function getIcon(name: Icon) {
  return import(`./iconsets/${name}.js`);
}

export * as Basic from './iconsets/basic/index';
export * as DualLight from './iconsets/dual-light/index';
