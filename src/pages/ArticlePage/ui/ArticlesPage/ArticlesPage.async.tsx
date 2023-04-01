import { lazy } from 'react';

export const ArticlesPageAsync = lazy(
  async () => new Promise((res) => {
    // @ts-expect-error
    // Искуственная задержка загрузки для удобства разработки
    setTimeout(() => res(import('./ArticlesPage')), 1000);
  }),
);
