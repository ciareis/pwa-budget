import auth from '../pages/auth/routes';
import tenants from '../pages/tenants/routes';
import tenant from '../pages/tenant/routes';

const routes = [
  ...auth,
  ...tenants,
  ...tenant,
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
