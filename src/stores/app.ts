import { defineStore } from 'pinia';
import { findMenu, findCategory } from '@/api';
import { treeMenuData } from '@/utils';

type AppState = {
  menus: Menu[];
  category: Category[];
};

export const useAppStore = defineStore('app', {
  state(): AppState {
    return {
      menus: [],
      category: [],
    };
  },
  actions: {
    /** 初始化菜单 */
    initApp() {
      this.initMenusAction();
    },
    /** 初始化菜单 */
    async initMenusAction() {
      const [_] = await findMenu();
      this.menus = await treeMenuData(_);
    },
    /** 初始化分类菜单信息 */
    async initCategorAction() {
      const [_] = await findCategory();
      this.category = _;
    },
  },
  persist: {
    paths: ['menus', 'category'],
  },
});
