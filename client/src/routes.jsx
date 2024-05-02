import React, { lazy, Suspense, useContext } from 'react';
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
  Outlet,
} from 'react-router-dom';
import Spinner from './pages/Spinner';
import { GlobalContext } from './Context/GlobalContext';
import { getauth } from './utils/auth';
import Layout from './Layout';

const routes = [
  {
    path: '/',
    exact: true,
    Component: lazy(() => import('./pages/AllCategory')),
  },
  {
    path: 'allCategories',
    exact: true,
    Component: lazy(() => import('./pages/AllCategory')),
  },
  {
    path: 'addCategory',
    exact: true,
    Component: lazy(() => import('./pages/AddCategory')),
  },
  {
    path: 'allServices',
    exact: true,
    Component: lazy(() => import('./pages/AllService')),
  },
  {
    path: 'addService',
    exact: true,
    Component: lazy(() => import('./pages/AddService')),
  },
  {
    path: 'allServices/:serviceId',
    exact: true,
    Component: lazy(() => import('./pages/ServiceDetail')),
  },
  {
    path: 'charts/services',
    exact: true,
    Component: lazy(() => import('./pages/ServiceChart')),
  },
  {
    path: 'charts/categories',
    exact: true,
    Component: lazy(() => import('./pages/CategoryChart')),
  },
];

const PrivateRoutes = ({ isLoggedIn }) =>
  isLoggedIn ? <Outlet /> : <Navigate to='/login' />;

const PublicRoutes = () => {
  const { data } = useContext(GlobalContext);

  const auth = getauth();

  const isLoggedIn = data.isLoggedIn || !!auth;

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' Component={lazy(() => import('./pages/Login'))} />
          <Route
            path='/login'
            Component={lazy(() => import('./pages/Login'))}
          />
          <Route
            path='/registration'
            Component={lazy(() => import('./pages/Registration'))}
          />
          <Route
            path='/verifyOtp'
            Component={lazy(() => import('./pages/VerifyOtp'))}
          />
          <Route
            path='/changePassword/:email'
            Component={lazy(() => import('./pages/ChangePassword'))}
          />
          <Route
            path='/forgot-password'
            Component={lazy(() => import('./pages/ForgotPassword'))}
          />
          <Route element={<PrivateRoutes isLoggedIn={isLoggedIn} />}>
            {routes.map(({ path, Component, exact }) => (
              <Route
                path={`home-services/${path}`}
                key={path}
                exact={exact}
                element={
                  <Layout>
                    <Component />
                  </Layout>
                }
              ></Route>
            ))}
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default PublicRoutes;
