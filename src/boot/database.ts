import { InjectionKey } from 'vue';
import { boot } from 'quasar/wrappers';
import { createRxDatabase, RxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/dexie';

export const dbKey: InjectionKey<RxDatabase> = Symbol('database');

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  const db = await createRxDatabase({
    name: 'heroesdb',
    storage: getRxStorageDexie(),
    password: 'myPassword',
    multiInstance: true,
    eventReduce: true,
  });

  app.provide(dbKey, db);
});
