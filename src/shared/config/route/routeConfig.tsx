import { type RouteProps } from 'react-router-dom';
import {
  NotFoundPage, MainPage,
  AboutPage,
  ProfilePage,
} from 'pages';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE='profile',

  // last
  NOTFOUND = 'notFound',

}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.NOTFOUND]: '/*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: { path: RoutePath.main, element: <MainPage /> },
  [AppRoutes.ABOUT]: { path: RoutePath.about, element: <AboutPage /> },
  [AppRoutes.PROFILE]: { path: RoutePath.profile, element: <ProfilePage /> },
  // last
  [AppRoutes.NOTFOUND]: { path: RoutePath.notFound, element: <NotFoundPage /> },
};
