import { openDB } from 'idb';

const DATABASE_NAME = 'Rekar';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'saved-prediksi';

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade: (database) => {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
    });
  },
});
