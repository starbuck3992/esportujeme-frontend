import {createWebHistory, createRouter} from 'vue-router';
import routes from '@/router/routes';
import {useUserStore} from '@/stores/user';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const {loggedIn} = useUserStore();

  if (to.matched.some((record) => record.meta.guest)) {
    if (loggedIn) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
