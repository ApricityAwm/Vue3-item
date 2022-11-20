import type { RouteRecordRaw } from 'vue-router';
import { dashboard } from './modules/dashboard';
import { question } from './modules/question';
import { system } from './modules/system';

/** 登录路由配置 */
const login: RouteRecordRaw = {
  name: 'login',
  path: '/login',
  component: () => import('@/layouts/login.vue'),
};

/** 主页路由 */
const main: RouteRecordRaw = {
  name: 'main',
  path: '/',
  component: () => import('@/layouts/layout.vue'),
  children: [...dashboard, ...question, ...system],
};

export default [login, main];
