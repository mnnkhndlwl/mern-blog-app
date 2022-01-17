import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from "./context/Context";
//if u use ContextProvider here all compoments inside app.js can use that data

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

