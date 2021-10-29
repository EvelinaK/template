import { lazy } from 'react';

const Tenants = lazy(() =>
  import('./components/tenants/tenants' /*webpackChunkName: "login-page" */),
);
const Form = lazy(() =>
  import('./components/form/formInitialize' /*webpackChunkName: "registration-page" */),
);



const routes = [
  
    {
      exact: true,
      path: '/register',
      label: 'register',
      component: Form,
      isProtected: false,
      isLogBar: true,
      redirectTo: '/tenants',
    },
    {
        path: '/tenants',
        component: Tenants,
        label: 'Tenants',
        isProtected: true,
        isNav: true,
        redirectTo: '/register',
      },

  ];
  export default routes;
 