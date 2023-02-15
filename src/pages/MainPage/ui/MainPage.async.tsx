import { lazy } from 'react';

export const MainPageAsync = lazy(
  async () => new Promise((res) => {
    // @ts-expect-error
    // Искуственная задержка загрузки для удобства разработки
    setTimeout(() => {
      res(import('./MainPage'));
    }, 1000);
  }),
);
