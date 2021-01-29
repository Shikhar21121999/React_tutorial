
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App1 from './App1'
// This renders our app conponent
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>,
  document.getElementById('secondary_root')
);

