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

function RestrictedRoute({ component: Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
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
}
function PublicRoutes() {
  const { data } = useContext(GlobalContext);

  console.log(process.env.NODE_ENV);
  const { isLoggedIn } = data;

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <div>
            <Route
              path='/'
              exact
              component={lazy(() => import('./Components/Signin'))}
            />
            <Route
              path='/signin'
              exact
              component={lazy(() => import('./Components/Signin'))}
            />
            <Route
              path='/signup'
              exact
              component={lazy(() => import('./Components/Signup'))}
            />

            <Route
              exact
              path='/verifyOtp'
              component={lazy(() => import('./Components/VerifyOtp'))}
            />
            <Route
              exact
              path='/changePassword/:email'
              component={lazy(() => import('./Components/ChangePassword'))}
            />
            <Route
              exact
              path='/forgot-password'
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
}

export default PublicRoutes;
