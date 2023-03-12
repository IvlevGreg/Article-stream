import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  async () => new Promise((res) => {
    // Искуственная задержка загрузки для удобства разработки
    setTimeout(() => res(import('./LoginForm')), 1000);
  }),
);
