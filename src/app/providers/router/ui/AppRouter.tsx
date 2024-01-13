import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/route/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

export function AppRouter() {
  const renderWithWrapper = useCallback((route:AppRoutesProps) => {
    const el = (
      <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">{route.element}</div>
      </Suspense>
    );
    return (
      <Route
        element={route.authOnly ? <RequireAuth>{el}</RequireAuth> : el}
        key={route.path}
        path={route.path}
      />
    );
  }, []);

  return (

    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  );
}
