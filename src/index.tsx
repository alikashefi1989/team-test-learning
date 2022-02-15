import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from './components/post/Post';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" caseSensitive element={<App />} />
        <Route path="/post" caseSensitive element={<Post />} />
        <Route path="*" caseSensitive element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
