import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import { useLoginStore } from '@/stores/login';

import routes from './routes';

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
});

router.beforeEach((to) => {
  NProgress.start();
  const loginStore = useLoginStore();
  if (to.path !== '/login' && !loginStore.token) {
    return '/login';
  }
});

router.afterEach(() => {
  NProgress.done();
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
