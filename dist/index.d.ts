import { BasicIcons } from './iconsets/basic/index';
import { DualLightIcons } from './iconsets/dual-light/index';
export declare type Icon = BasicIcons | DualLightIcons;
import * as Basic from './iconsets/basic/index';
import * as DualLight from './iconsets/dual-light/index';
export { BasicIcons, DualLightIcons };
export declare function getIcon(name: keyof typeof Basic | keyof typeof DualLight): Icon;
//# sourceMappingURL=index.d.ts.map