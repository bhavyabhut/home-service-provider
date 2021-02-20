import React, { lazy, Suspense, useEffect, useState, useContext } from "react";
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
// import { ConnectedRouter } from "react-router-redux";
import Spinner from "./Components/Spinner";
import Routers from "./router";
import API from "./api";
import axios from "axios";
import { GlobalContext } from "./Context/GlobalContext";
import { getauth } from "./utils/auth";

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);
const PublicRoutes = ({ history }) => {
  const { data, dispatch } = useContext(GlobalContext);

  // const token = getauth();
  let isLoggedIn = data.isLoggedIn;
  // let isLoggedIn = true;

  // if (token) isLoggedIn = true;
  return (
    // <ConnectedRouter history={history}>
    <Router>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <div>
            <Route
              path="/"
              exact={true}
              component={lazy(() => import("./Components/Signin"))}
            />
            <Route
              path="/signin"
              exact={true}
              component={lazy(() => import("./Components/Signin"))}
            />
            <Route
              path={"/signup"}
              exact={true}
              component={lazy(() => import("./Components/Signup"))}
            />
            {/* <Route
            exact={true}
            path={"/reset-password/:token"}
            component={asyncComponent(() =>
              import("./containers/Page/reset_password/resetPassword")
            )}
          /> */}
            <Route
              exact={true}
              path={"/forgot-password"}
              component={lazy(() => import("./Components/ForgotPassword"))}
            />
            <RestrictedRoute
              path="/home-services"
              component={Routers}
              isLoggedIn={isLoggedIn}
            />
            {/* <Route
            exact
            path={"/404"}
            path={"/"}
            component={asyncComponent(() => import("./containers/Page/404"))}
          /> */}
            {/* <Route
          exact
          path={"/500"}
          component={asyncComponent(() => import("./containers/Page/500"))}
        /> */}
          </div>
        </Switch>
      </Suspense>
    </Router>
  );
};

// export default connect((state) => ({
//   isLoggedIn: state.Auth.get("idToken") !== null,
// }))(PublicRoutes);
export default PublicRoutes;
