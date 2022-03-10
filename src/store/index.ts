import { store } from 'quasar/wrappers';
import { InjectionKey } from 'vue';
import { createPinia, Pinia } from 'pinia';

declare module '@quasar/app' {
  interface BootFileParams<TState> {
    store: Pinia;
  }
  interface PreFetchOptions<TState> {
    store: Pinia;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Pinia;
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<Pinia> = Symbol('pinia-key');

export default store(function (/* { ssrContext } */) {
  const Store = createPinia();
  return Store;
});
