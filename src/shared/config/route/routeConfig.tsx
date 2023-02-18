import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage/ui/NotFoundPage';
import { type RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOTFOUND = 'notFound',

}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOTFOUND]: '/*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: { path: RoutePath.main, element: <MainPage /> },
  [AppRoutes.ABOUT]: { path: RoutePath.about, element: <AboutPage /> },
  [AppRoutes.NOTFOUND]: { path: RoutePath.notFound, element: <NotFoundPage /> },
};
