import { lazy } from 'react';

export const MainPageAsync = lazy(
  () =>
    new Promise((res) => {
      // @ts-ignore
      // Искуственная задержка загрузки для удобства разработки
      setTimeout(() => res(import('./MainPage')), 1000);
    })
);
