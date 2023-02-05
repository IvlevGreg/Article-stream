import { Suspense, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import classes from './app.module.scss';
import { classNames } from './helpers/classNames/classNames';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Theme, ThemeContext } from './theme/themeContext';
import { useTheme } from './theme/useTheme';

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>

      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>

      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}
