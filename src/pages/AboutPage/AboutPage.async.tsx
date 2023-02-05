import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () =>
    new Promise((res) => {
      // @ts-ignore
      // Искуственная задержка загрузки для удобства разработки
      setTimeout(() => res(import('./AboutPage')), 1000);
    })
);
