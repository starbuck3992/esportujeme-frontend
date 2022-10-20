import {createWebHistory, createRouter} from 'vue-router';
import routes from '@/router/routes';
import {useUserStore} from '@/stores/user';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const {loggedIn} = useUserStore();

  const canNavigate = to.matched.some(() => {
    if (!loggedIn && to.meta.requiresAuth) {
      return false;
    } else return !(loggedIn && to.meta.guest);
  });

  if (!canNavigate) {
    return next('/');
  } else {
    next();
  }
});

export default router;
