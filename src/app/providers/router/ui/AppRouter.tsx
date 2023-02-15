import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense, useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/route/routeConfig';

export function AppRouter() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            element={<div className="page-wrapper">{element}</div>}
            key={path}
            path={path}
          />
        ))}
      </Routes>
    </Suspense>
  );
}
