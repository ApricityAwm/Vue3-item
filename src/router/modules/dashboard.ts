import type { RouteRecordRaw } from 'vue-router';

export const dashboard: RouteRecordRaw[] = [
  {
    name: 'workplace',
    path: '/dashboard/workplace',
    component: () => import('@/views/dashboard/workplace/index.vue'),
  },
  {
    name: 'about',
    path: '/dashboard/about',
    component: () => import('@/views/dashboard/about/index.vue'),
  },
];
