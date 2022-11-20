import type { App } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

export function setupPinia(app: App<Element>) {
  const pinia = createPinia();
  // pinia使用持久化插件
  pinia.use(piniaPluginPersistedstate);

  app.use(pinia);
}
