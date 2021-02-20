import React, { lazy, Suspense } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Layout from "./Layout";
import Spinner from "./Components/Spinner";

const routes = [
  // {
  //   path: "/signin",
  //   exact: true,
  //   Component: lazy(() => import("./Components/Signin")),
  // },
  {
    path: "/",
    exact: true,
    Component: lazy(() => import("./Components/College")),
  },
  {
    path: "allColleges",
    exact: true,
    Component: lazy(() => import("./Components/College")),
  },
  {
    path: "addCollege",
    exact: true,
    Component: lazy(() => import("./Components/ComingSoon")),
  },
  {
    path: "allStudents",
    exact: true,
    Component: lazy(() => import("./Components/Student")),
  },
  {
    path: "addStudent",
    exact: true,
    Component: lazy(() => import("./Components/ComingSoon")),
  },
  {
    path: "charts/state",
    exact: true,
    Component: lazy(() => import("./Components/Charts/State")),
  },
  {
    path: "charts/state/:stateId",
    exact: true,
    Component: lazy(() =>
      import("./Components/Charts/State/CollegeChartTable")
    ),
  },
  {
    path: "charts/course",
    exact: true,
    Component: lazy(() => import("./Components/Charts/Course")),
  },
  {
    path: "student/:studentId",
    exact: true,
    Component: lazy(() => import("./Components/Student/Profile")),
  },
  {
    path: "college/:collegeId",
    exact: true,
    Component: lazy(() => import("./Components/College/Profile")),
  },
];

class Routers extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Suspense fallback={<Spinner />}>
            <Switch render={({ children }) => ({ children })}>
              <Route exact path="/" render={() => <Redirect to="/signin" />} />
              {routes.map(({ path, Component, exact }) => {
                console.log(this.props, `${this.props.match.url}${path}`);
                return (
                  <Route
                    path={`${this.props.match.url}/${path}`}
                    key={path}
                    exact={exact}
                  >
                    <Component />
                  </Route>
                );
              })}
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    );
  }
}

export default Routers;
