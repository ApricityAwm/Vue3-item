import http from '@/plugins/axios';

/** 登录 */
export const accountLogin = (data: any) => {
  return http.post({ url: '/auth/login', data });
};
