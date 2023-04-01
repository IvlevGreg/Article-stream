import { type RouteProps } from 'react-router-dom';

import {
  NotFoundPage, MainPage,
  AboutPage,
  ProfilePage,
} from 'pages';
import { ArticlesPage } from 'pages/ArticlePage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE='profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'articleDetails',
  // last
  NOTFOUND = 'notFound',

}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
  // last
  [AppRoutes.NOTFOUND]: '/*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: { path: RoutePath.main, element: <MainPage /> },
  [AppRoutes.ABOUT]: { path: RoutePath.about, element: <AboutPage /> },
  [AppRoutes.PROFILE]: { path: RoutePath.profile, element: <ProfilePage />, authOnly: true },
  [AppRoutes.ARTICLES]: { path: RoutePath.articles, element: <ArticlesPage />, authOnly: true },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.articleDetails}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  // last
  [AppRoutes.NOTFOUND]: { path: RoutePath.notFound, element: <NotFoundPage /> },
};
