import http from '@/plugins/axios';

/** 查询菜单 */
export const findMenu = () => {
  return http.get({ url: '/menu' });
};

/** 查询分类 */
export const findCategory = () => {
  return http.get({ url: '/category' });
};
