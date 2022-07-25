import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { openRoutes } from './routes';

export default function OpenRoutes() {
  return (
    <div>
      <Suspense fallback={'loading...'}>
        <Routes>
          {openRoutes.map((route, i) => {
            return (
              <Route
                element={<route.element />}
                exact={route.exact}
                path={route.path}
                key={i}
              />
            );
          })}
        </Routes>
      </Suspense>
    </div>
  );
}
