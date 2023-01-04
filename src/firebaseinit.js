import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "authDomain",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId",
  appId: "appId",
  measurementId: "measurementId"
  };

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const currentToken = () => {
  return getToken(messaging, {vapidKey: 'vapidKey'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  })
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log(payload)
      resolve(payload);
    });
});
