import { PageRole, PageRoute } from '@srclaunch/types';
import { memo, ReactElement, useEffect, useState } from 'react';

import { Introduction } from './pages/Introduction';
import { PageNotFound } from './pages/PageNotFound';
import { Component } from './types/component';
import { ComponentCategoryPage } from './pages/ComponentCategory';
import { ComponentPage } from './pages/Component';
import { RouterView } from '@srclaunch/ui';
import componentLibrary from './component-library';

export const getRoutes = async (components?: Component[]): Promise<Component[]> => {
  if (!components || components.length === 0) {
    return [];
  }

  let routes: Component[] = [];

  for (const component of components) {
    routes = [
      ...routes,
      {
        ...component,
      },
    ];

    if (component.components) {
      routes = [...routes, ...await getRoutes(component.components)];
    }
  }

  return routes;
};

export const ComponentLibraryPage = memo( ({ children }): ReactElement => {
  const [routes, setRoutes] = useState<Component[]>([])

  const getRouteComponents = async () => {
    const r = await getRoutes(componentLibrary.components);
    setRoutes(r);
  }

  useEffect(() => {
    getRouteComponents()
  }, [])

  return (
    <RouterView
      routes={[
        ...routes.map(route => ({
          path: route.path,
          component: route.component ? ComponentPage : ComponentCategoryPage,
        })),
        {
          component: PageNotFound,
          path: '*',
          role: PageRole.PageNotFound,
        },
      ]}
    />
  );
});

export default [
  {
    component: ComponentLibraryPage,
    path: '*',
  },
  {
    component: Introduction,
    role: PageRole.Index,
  },
] as PageRoute[];
