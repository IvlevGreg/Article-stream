import { lazy } from 'react';

export const ProfilePageAsync = lazy(
  async () => new Promise((res) => {
    // @ts-expect-error
    // Искуственная задержка загрузки для удобства разработки
    setTimeout(() => res(import('./ProfilePage')), 1000);
  }),
);
