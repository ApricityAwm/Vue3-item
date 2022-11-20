import type { App } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import 'element-plus/es/components/notification/style/css';
import 'element-plus/es/components/loading/style/css';
// 引入所有css样式
// import 'element-plus/dist/index.css';

export function setupElementIcon(app: App) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
}
