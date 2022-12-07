import React, { lazy, Suspense } from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import Layout from './Layout';
import Spinner from './Components/Spinner';

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
    Component: lazy(() =>
      import('./Components/Charts/State/CollegeChartTable'),
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

class Routers extends React.PureComponent {
  render() {
    const {
      match: { url },
    } = this.props;
    return (
      <Router>
        <Layout>
          <Suspense fallback={<Spinner />}>
            <Switch render={({ children }) => ({ children })}>
              <Route exact path='/' render={() => <Redirect to='/signin' />} />
              {routes.map(({ path, Component, exact }) => {
                return (
                  <Route path={`${url}/${path}`} key={path} exact={exact}>
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
