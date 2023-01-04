import logo from './logo.svg';
import './App.css';

import {currentToken,onMessageListener} from './firebaseinit'

function App() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }

    currentToken().then().catch((err)=>console.log("catched:",err))
    onMessageListener().then(payload => {
      console.log(payload);
    }).catch(err => console.log('failed: ', err));


return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
