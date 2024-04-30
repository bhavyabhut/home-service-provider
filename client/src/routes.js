import React, { lazy, Suspense, useContext } from 'react';
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
  redirect,
  Outlet,
} from 'react-router-dom';
import Spinner from './Components/Spinner';
import { GlobalContext } from './Context/GlobalContext';
import { getauth } from './utils/auth';
import Layout from './Layout';

const routes = [
  {
    path: '/',
    exact: true,
    Component: lazy(() => import('./Components/College')),
  },
  {
    path: 'allColleges',
    exact: true,
    Component: lazy(() => import('./Components/College')),
  },
  {
    path: 'allCategories',
    exact: true,
    Component: lazy(() => import('./Components/Category')),
  },
  {
    path: 'addCategory',
    exact: true,
    Component: lazy(() => import('./Components/Category/addCategory')),
  },
  {
    path: 'allServices',
    exact: true,
    Component: lazy(() => import('./Components/Services')),
  },
  {
    path: 'addService',
    exact: true,
    Component: lazy(() => import('./Components/Services/addService')),
  },
  {
    path: 'allServices/:serviceId',
    exact: true,
    Component: lazy(() => import('./Components/Services/Profile')),
  },
  {
    path: 'charts/services',
    exact: true,
    Component: lazy(() => import('./Components/Charts/Services')),
  },
  {
    path: 'charts/categories',
    exact: true,
    Component: lazy(() => import('./Components/Charts/Categories')),
  },
  {
    path: 'addCollege',
    exact: true,
    Component: lazy(() => import('./Components/ComingSoon')),
  },
  {
    path: 'allStudents',
    exact: true,
    Component: lazy(() => import('./Components/Student')),
  },
  {
    path: 'addStudent',
    exact: true,
    Component: lazy(() => import('./Components/ComingSoon')),
  },
  {
    path: 'charts/state',
    exact: true,
    Component: lazy(() => import('./Components/Charts/State')),
  },
  {
    path: 'charts/state/:stateId',
    exact: true,
    Component: lazy(
      () => import('./Components/Charts/State/CollegeChartTable'),
    ),
  },
  {
    path: 'charts/course',
    exact: true,
    Component: lazy(() => import('./Components/Charts/Course')),
  },
  {
    path: 'student/:studentId',
    exact: true,
    Component: lazy(() => import('./Components/Student/Profile')),
  },
  {
    path: 'college/:collegeId',
    exact: true,
    Component: lazy(() => import('./Components/College/Profile')),
  },
];

const PrivateRoutes = ({ isLoggedIn }) =>
  isLoggedIn ? <Outlet /> : <Navigate to='/signin' replace />;

const PublicRoutes = () => {
  const { data } = useContext(GlobalContext);

  const auth = getauth();

  const isLoggedIn = data.isLoggedIn || !auth;

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path='/'
            Component={lazy(() => import('./Components/Signin'))}
          />
          <Route
            path='/signin'
            Component={lazy(() => import('./Components/Signin'))}
          />
          <Route
            path='/signup'
            Component={lazy(() => import('./Components/Signup'))}
          />
          <Route
            path='/verifyOtp'
            Component={lazy(() => import('./Components/VerifyOtp'))}
          />
          <Route
            path='/changePassword/:email'
            Component={lazy(() => import('./Components/ChangePassword'))}
          />
          <Route
            path='/forgot-password'
            Component={lazy(() => import('./Components/ForgotPassword'))}
          />
          <Route element={<PrivateRoutes isLoggedIn={isLoggedIn} />}>
            <Route exact path='/' render={() => redirect('/signin')} />
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
