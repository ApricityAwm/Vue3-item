import { findAll, del } from '@/api';
import { defineStore } from 'pinia';

type BaseState = {
  category: Category[];
  categoryCount: number;

  problem: Problem[];
  problemCount: number;

  // 动态key  方便动态为this加值
  [key: string]: any;
};

export const useBaseStore = defineStore('base', {
  state: (): BaseState => ({
    category: [],
    categoryCount: 0,
    problem: [],
    problemCount: 0,
  }),
  actions: {
    /** 查询数据 */
    async findAllAction(pageName: string, queryParams?: QueryParams) {
      const { page = 1, take = 10, where = {} } = queryParams || {};
      const [data, count] = await findAll(`/${pageName}`, {
        page,
        take,
        where: JSON.stringify(where),
      });
      this[pageName] = data;
      this[`${pageName}Count`] = count;
    },

    /** 删除一个数据 */
    async delAction(pageName: string, id: number | number[]) {
      try {
        await del(`${pageName}`, { id });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
