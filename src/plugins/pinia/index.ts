import type { App } from 'vue';
import { createPinia } from 'pinia';

export function setupPinia(app: App<Element>) {
  const pinia = createPinia();

  app.use(pinia);
}
