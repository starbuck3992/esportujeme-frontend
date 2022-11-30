import {RouteRecordRaw} from 'vue-router';
import SocialLogin from '@/components/auth/SocialLogin.vue';
import {LayoutEnum} from '@/layout/LayoutEnum';
import DashboardPage from '@/views/admin/DashboardPage.vue';
import HomePage from '@/views/public/HomePage.vue';
import TournamentPage from '@/views/public/tournament/TournamentPage.vue';
import UserIntegrationsPage from '@/views/public/user/UserIntegrationsPage.vue';
import UserPasswordPage from '@/views/public/user/UserPasswordPage.vue';
import UserProfilePage from '@/views/public/user/UserProfilePage.vue';
import UserSettingsRouterView from '@/views/public/user/UserSettingsRouterView.vue';

export enum ROUTES {
  NOT_FOUND = 'routesNotFound',
  ADMIN_DASHBOARD = 'routesAdminDashboard',
  HOME_PAGE = 'routesHomePage',
  USER_SETTINGS_ROUTER_VIEW = 'routesUserSettingsRouterView',
  USER_PROFILE_PAGE = 'routesUserProfilePage',
  USER_PASSWORD_PAGE = 'routesUserPasswordPage',
  USER_INTEGRATIONS_PAGE = 'routesUserIntegrationsPage',
  TOURNAMENTS_PAGE = 'routesTournamentsPage',
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
        path: 'settings',
        name: ROUTES.USER_SETTINGS_ROUTER_VIEW,
        component: UserSettingsRouterView,
        meta: {
          requiresAuth: true,
        },
        children: [
          {
            path: 'profile',
            name: ROUTES.USER_PROFILE_PAGE,
            component: UserProfilePage,
          },
          {
            path: 'password',
            name: ROUTES.USER_PASSWORD_PAGE,
            component: UserPasswordPage,
          },
          {
            path: 'integrations',
            name: ROUTES.USER_INTEGRATIONS_PAGE,
            component: UserIntegrationsPage,
          },
        ],
      },
      {
        path: 'tournaments',
        name: ROUTES.TOURNAMENTS_PAGE,
        component: TournamentPage,
        children: [
        ],
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
    name: ROUTES.NOT_FOUND,
    component: HomePage,
  },
];

export default routes as RouteRecordRaw[];
