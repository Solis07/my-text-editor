import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {

  console.error('putDb not implemented');

  // Create a connect to the database and the version
  const jateDB = await openDB('jate', 1);

  // Creates a new transaction and specify the database and data privileges
  const tx = jateDB.transaction('jate', 'readwrite');

  // Opens up the desired object store
  const store = tx.objectStore('jate');

  //Passes the content
  const request = store.put({ id: 1, value: content });

  //Confirmation of the request
  const result = await request;
  console.log(' data has been saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error("getDb not implemented");

  // Create a connect to the database and the version
  const jateDB = await openDB("jate, 1");

  // Creates a new transaction and specify the database and data privileges
  const tx = jateDB.transaction("jate", "readonly");

  // Opens up desired object store
  const store = tx.objectStore("jate");

  // Get all request
  const request = store.getAll();

  // Confirmation on result and return
  const result = await request;
  console.log("data was read", result);
  return result.value;
};

initdb();
