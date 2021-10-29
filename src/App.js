// import React from 'react';




// export default function App() {
//   return (
//        <ThemeProvider theme={theme}>
//        <BrowserRouter>
//         <Switch>
//         <Route exact path="/" component={Form} />
//       </Switch>
//       </BrowserRouter>
//       </ThemeProvider>
//   );
// }


   
import { Switch, Route } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import routes from '../src/routes';


import Form from './components/form/formInitialize';
import { ThemeProvider } from '@material-ui/core/styles';
import  theme  from './config/theme';


import { useDispatch } from 'react-redux';
import { authOperations } from '../src/redux/auth';

import PrivateRoute from '../src/components/PrivateRoute/PrivateRoute';
import PublicRoute from '../src/components/PublicRoute/PublicRoute';

import Loader from './components/Loader/Loader';

export default function App() {
  const dispatch = useDispatch();
  const onRefresh = () => {
    dispatch(authOperations.currentUser());
  };

  useEffect(() => {
    onRefresh();
    // eslint-disable-next-line
  }, []);

  return (
    <>
     <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <Switch>
          {routes.map(
            ({ path, isProtected, redirectTo, exact, component: Component }) =>
              isProtected === null ? (
                <Route
                  exact={exact}
                  key={[path]}
                  path={path}
                  component={Component}
                  redirectTo={redirectTo}
                />
              ) : isProtected ? (
                <PrivateRoute
                  exact={exact}
                  key={path}
                  path={path}
                  component={Component}
                  redirectTo={redirectTo}
                />
              ) : (
                <PublicRoute
                  exact={exact}
                  key={[path]}
                  path={path}
                  component={Component}
                  redirectTo={redirectTo}
                />
              ),
          )}
        </Switch>
      </Suspense>
      </ThemeProvider>
      <ToastContainer
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}