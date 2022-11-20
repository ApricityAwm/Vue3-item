import type { App } from 'vue';
import { setupPinia } from './pinia';
import { setupElementIcon } from './element';
import './tailwindcss';

/** 加载插件 */
export function setupPlugins(app: App<Element>) {
  setupPinia(app);
  setupElementIcon(app);
}
