import React from 'react';
import ReactDOM from 'react-dom/client'; //needed to render your react application

import App from './App';
import Doc from './doc';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <>
    <Doc/>
    <App />
    </>
  </React.StrictMode> //helps to run extra checks during development to find the potential problem in the code
);

