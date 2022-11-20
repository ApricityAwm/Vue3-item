import { createApp } from 'vue';

import App from './App.vue';
import { setupPlugins } from './plugins';
import { setupRouter } from './router';
import { setupDirective } from './directive'; // 自定义组件

import './assets/css/main.css';
// 暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css';

const bootstrap = async () => {
  const app = createApp(App);
  setupDirective(app);
  setupPlugins(app);
  setupRouter(app);
  app.mount('#app');
};
bootstrap();
