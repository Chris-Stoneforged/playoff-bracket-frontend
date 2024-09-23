import { createBrowserRouter, RouteObject } from 'react-router-dom';

export default class BrowserRouterBuilder {
  routes: RouteObject[] = [];

  addRoute(route: string, element: JSX.Element) {
    this.routes.push({
      path: route,
      element: element,
    });

    return this;
  }

  build() {
    return createBrowserRouter(this.routes);
  }
}
