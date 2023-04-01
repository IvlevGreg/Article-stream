import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(
  async () => new Promise((res) => {
    // @ts-expect-error
    // Искуственная задержка загрузки для удобства разработки
    setTimeout(() => res(import('./ArticleDetailsPage')), 1000);
  }),
);
