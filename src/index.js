import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // If you want to add global styles, create an index.css file
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();