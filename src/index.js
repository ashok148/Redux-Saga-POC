import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './reducers/userReducer';
import createSagaMiddleware from 'redux-saga';
import userSaga from './sagas/userSaga';
const root = ReactDOM.createRoot(document.getElementById('root'));

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: userReducer,
  middleWare: [...getDefaultMiddleware(), sagaMiddleware]
})
// then run the saga
sagaMiddleware.run(userSaga);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);

