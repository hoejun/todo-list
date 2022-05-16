import React from 'react';
import ReactDOM from 'react-dom';
// import * as ReactDOMClient from 'react-dom/client';

import App from './App';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
