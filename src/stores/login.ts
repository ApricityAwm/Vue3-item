import { accountLogin } from '@/api';
import { defineStore } from 'pinia';
import router from '@/router';
import { useAppStore } from './app';

type LoginState = {
  userInfo: User;
  token: string;
};

export const useLoginStore = defineStore('login', {
  state: (): LoginState => ({
    token: '',
    userInfo: {} as User,
  }),
  actions: {
    /** 登录 */
    async loginAction(loginInfo: { account: string; password: string }) {
      const { token, user } = await accountLogin(loginInfo);
      this.token = token;
      this.userInfo = user;

      // 初始化
      const { initApp } = useAppStore();
      initApp();

      router.push('/');
    },
    /** 注销登录 */
    logoutAction() {
      this.token = '';
      this.userInfo = {} as User;
      router.replace('/login');
    },
  },
  persist: true,
});
