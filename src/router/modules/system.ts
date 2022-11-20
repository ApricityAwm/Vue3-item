import type { RouteRecordRaw } from 'vue-router';

export const system: RouteRecordRaw[] = [
  {
    name: 'menu',
    path: '/system/menu',
    component: () => import('@/views/system/menu/index.vue'),
  },
  {
    name: 'test1',
    path: '/system/test1',
    component: () => import('@/views/system/test1/index.vue'),
  },
];
