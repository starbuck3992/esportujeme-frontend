import {RouteRecordRaw} from 'vue-router';
import SocialLogin from '@/components/auth/SocialLogin.vue';
import {LayoutEnum} from '@/layout/LayoutEnum';
import DashboardPage from '@/views/admin/DashboardPage.vue';
import HomePage from '@/views/public/HomePage.vue';

export enum ROUTES {
  ADMIN_DASHBOARD = 'routesAdminDashboard',
  HOME_PAGE = 'routesHomePage',
}

const routes = [
  {
    path: '/admin',
    meta: LayoutEnum.ADMIN,
    children: [
      {
        path: '',
        name: ROUTES.ADMIN_DASHBOARD,
        component: DashboardPage,
      },
    ],
  },
  {
    path: '/',
    meta: LayoutEnum.PUBLIC,
    children: [
      {
        path: '',
        name: ROUTES.HOME_PAGE,
        component: HomePage,
      },
      {
        path: 'authorize/:provider/callback',
        props: (route) => ({
          provider: route.params.provider,
        }),
        name: 'socialLogin',
        component: SocialLogin,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => HomePage,
  },
];

export default routes as RouteRecordRaw[];
