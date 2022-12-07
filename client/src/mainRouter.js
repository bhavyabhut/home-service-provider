import React, { lazy, Suspense, useContext } from 'react';
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import Spinner from './Components/Spinner';
import Routers from './router';
import { GlobalContext } from './Context/GlobalContext';

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      console.log(props, 'hu props chu re bhai');
      return isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/signin',
            state: { data: props.location },
          }}
        />
      );
    }}
  />
);
const PublicRoutes = ({ history }) => {
  const { data, dispatch } = useContext(GlobalContext);

  console.log(process.env.NODE_ENV);
  let isLoggedIn = data.isLoggedIn;

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <div>
            <Route
              path='/'
              exact={true}
              component={lazy(() => import('./Components/Signin'))}
            />
            <Route
              path='/signin'
              exact={true}
              component={lazy(() => import('./Components/Signin'))}
            />
            <Route
              path={'/signup'}
              exact={true}
              component={lazy(() => import('./Components/Signup'))}
            />

            <Route
              exact={true}
              path={'/verifyOtp'}
              component={lazy(() => import('./Components/VerifyOtp'))}
            />
            <Route
              exact={true}
              path={'/changePassword/:email'}
              component={lazy(() => import('./Components/ChangePassword'))}
            />
            <Route
              exact={true}
              path={'/forgot-password'}
              component={lazy(() => import('./Components/ForgotPassword'))}
            />
            <RestrictedRoute
              path='/home-services'
              component={Routers}
              isLoggedIn={isLoggedIn}
            />
          </div>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default PublicRoutes;
