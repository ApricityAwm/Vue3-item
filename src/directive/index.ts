import dayjs from 'dayjs'; // 导入dayjs格式化为正常的年月日
import type { App } from 'vue';

/** time vue3自定义组件的方式   */
export function setupDirective(app: App<Element>) {
  app.directive('time', {
    mounted(el, { value }) {
      // 自定义指令格式化年月日
      el.textContent = dayjs(value).format('YYYY-MM-DD HH:mm:ss');
    },
  });
}
