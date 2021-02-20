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
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     const token = getauth();
  //     setIsLoggedIn(true);
  //   }
  //   console.log("use effect tokenni");
  // });
  // useEffect(() => {
  //   const token = getauth();
  //   const fetch = async () => {
  //     try {
  //       const { data } = await axios.get(API.auth, {
  //         headers: { "auth-token": token },
  //       });
  //       console.log("useEffect auth ni");
  //       if (data.success === true) {
  //         // console.log("yaa hu thav chu");
  //         // history.push("/home-services");
  //         setIsLoggedIn(true);
  //       } else {
  //         // ErrorDispathcer(data.msg);
  //       }
  //     } catch (e) {
  //       // ErrorDispathcer(e.response.statusText);
  //     }
  //   };
  //   fetch();
  // }, []);
  const { data, dispatch } = useContext(GlobalContext);

  // const token = getauth();
  let isLoggedIn = data.isLoggedIn;
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
