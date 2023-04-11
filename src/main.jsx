import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Admin from './Admin';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route exact path="/admin" element={<Admin/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);