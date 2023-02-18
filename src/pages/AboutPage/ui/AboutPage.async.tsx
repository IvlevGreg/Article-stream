import { lazy } from 'react';

export const AboutPageAsync = lazy(
  async () => new Promise((res) => {
    // @ts-expect-error
    // Искуственная задержка загрузки для удобства разработки
    setTimeout(() => res(import('./AboutPage')), 1000);
  }),
);
