import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from './components/post/Post';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistedStore, store } from "../redux/store"

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <Router>
        <Routes>
          <Route path="/" caseSensitive element={<App />} />
          <Route path="/post" caseSensitive element={<Post />} />
          <Route path="*" caseSensitive element={<App />} />
        </Routes>
      </Router>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);
