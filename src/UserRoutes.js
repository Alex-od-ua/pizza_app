import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from 'shared/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CartPage = lazy(() => import('./pages/CartPage/CartPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
