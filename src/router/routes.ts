import {RouteRecordRaw} from 'vue-router';
import {LayoutEnum} from '@/layout/LayoutEnum';
import DashboardPage from '@/views/admin/DashboardPage.vue';
import RegisterPage from '@/views/auth/RegisterPage.vue';
import HomePage from '@/views/public/HomePage.vue';

export enum ROUTES {
  ADMIN_DASHBOARD = 'routesAdminDashboard',
  HOME_PAGE = 'routesHomePage',
  REGISTER_PAGE = 'routesRegisterPage',
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
        path: 'register',
        name: ROUTES.REGISTER_PAGE,
        component: RegisterPage,
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
