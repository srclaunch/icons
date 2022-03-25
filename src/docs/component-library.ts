import { Exception } from '@srclaunch/exceptions';
import { ElementType } from 'react';
import { BasicIcons, DualLightIcons } from '..';
import { IconGrid } from './components/IconGrid';
import { Component, ComponentLibrary } from './types/component';

const getComponents =  async (iconSet: Record<string, string>) => {
  const entries =   [...Object.entries(iconSet), ...Object.entries(BasicIcons)];
 
  let comps: Component[] = [];
  for (const entry in   entries) {

    // @ts-ignore
    const [name, icon] = entries[entry];

    const component = await import(`../iconsets/${icon}.tsx`) as Component;
    // @ts-ignore
    const routeComponent = component[name] as ElementType;

    comps = [...comps, {
      name,
      title: name,
      path: `/${icon}`,
      // @ts-ignore
      component: routeComponent,
      examples: [{
        title: 'Basic',
        // properties: {}
      }]
    }];
  }

  return comps;
}
  // )).slice(0, 5);
  // console.log('entries', entries);

  // let compos = [];

  // for (const entry in  entries) {
  //   console.log('entry', entry)
  //   const name = entry[0];
  //   const icon = entry[1];
  //   // const comp = await entries.map(async () => {
  //     console.log('name,', name);
  //     console.log('icon,', icon);
      
  //   //   // const component = await import(`./dual-light/$${name}`);
  //   //   // @ts-ignore
  // 

  //     compos = [ ...compos, {
  //       component: compo.component ? compo : undefined,
  //       title: name, // The name of the icon
  //       // icon, // The icon itself
  //       // description: icon.description, // The description of the icon
  //       path: icon, // The path to the icon
  //     }];
  //   // });
  // }

 
  // return compos;
// };

// @ts-ignore
const basicIcons =  await getComponents(BasicIcons);
// @ts-ignore
const dualLightIcons =  await getComponents(DualLightIcons);

const exp =  {
  name: 'AppLab Icons',
  description: 'A library of icons for AppLab applications',
  components: [
    {
      title: 'Basic',
      description: 'Basic filled icons',
      path: '/basic',
      components: basicIcons
    },
    {
      title: 'Dual Light',
      description: 'Blue-ish dual tone icon set',
      path: '/dual-light',
      components: dualLightIcons,
    },
  ],
} as ComponentLibrary;

export default exp;
