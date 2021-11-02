import firebase from 'firebase/app';
import 'firebase/firestore';

import getEnvVars from '../utils/environment';

const { API_KEY, DATABASE_URL, PROJECT_ID, APP_ID } = getEnvVars();

const firebaseConfig = {
  apiKey: API_KEY,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  appId: APP_ID,
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
