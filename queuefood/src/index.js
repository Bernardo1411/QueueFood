import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import { BrowserRouter } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';
import rootReducer from './Reducers/RootReducer'
import firebase from './config/firebaseConfig'
import './index.css';

const store = createStore(rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
)

const rrfProps = {
  firebase,
  config: { userProfile: 'users', useFirestoreForProfile: true },
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();