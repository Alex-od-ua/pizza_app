import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from 'layouts/MainLayout';

import Loader from 'shared/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CartPage = lazy(() => import('./pages/CartPage/CartPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<HomePage />} />
          <Route
            path="cart"
            element={
              <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
                <CartPage />
              </Suspense>
            }
          />
          {/* <Route
            path="pizza/:id"
            element={
              <Suspense fallback={<div>Идёт загрузка...</div>}>
                <FullPizza />
              </Suspense>
            }
          /> */}
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Идёт загрузка...</div>}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}
    </Suspense>
  );
};

export default UserRoutes;
