import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBpJn34RlwSEsi3agX8cB8N1Ez0plWPuaY',
  authDomain: 'hw3p2-8c6c6.firebaseapp.com',
  databaseURL: 'https://hw3p2-8c6c6.firebaseio.com',
  storageBucket: 'hw3p2-8c6c6.appspot.com',
};

firebase.initializeApp(config);

const database = firebase.database();

export function fireDelete(id) {
  database.ref('notes').child(id)
  .remove();
}
export function fireUpdate(id, fields) {
  database.ref('notes').child(id)
  .update(fields);
}
export function fireCreate(title) {
  database.ref('notes')
  .push({
    title,
    text: '',
    x: 20,
    y: 20,
    zIndex: 0,
  });
}
export function onNewNotes(handleNewNotes) {
  database.ref('notes').on('value', (snapshot) => {
    const newNotes = snapshot.val();
    handleNewNotes(newNotes);
  });
}
