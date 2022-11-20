import type { RouteRecordRaw } from 'vue-router';

export const question: RouteRecordRaw[] = [
  {
    name: 'category',
    path: '/question/category',
    component: () => import('@/views/question/category/index.vue'),
  },
  {
    name: 'problem',
    path: '/question/problem',
    component: () => import('@/views/question/problem/index.vue'),
  },
];
