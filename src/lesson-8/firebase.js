import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "",
  databaseURL: "",
};

const app = firebase.initializeApp(config);
const db = firebase.database(app);
const base = Rebase.createClass(db);

export default base;
