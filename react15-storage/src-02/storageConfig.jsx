import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";

const storageConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  databaseURL: import.meta.env.VITE_databaseURL,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId,
};
const app = initializeApp(storageConfig);
const storage = getStorage(app,"gs://myreactapp-94554.firebasestorage.app");
export {storage};