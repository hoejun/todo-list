import React, { useEffect, useState } from 'react';

// import './App.css';
import './todo.css';
import './edit.css';

import API from './api/request';
import Header from './components/Header';
// import Content from './components/HomeContent';
import ContentRouter from './components/routers/ContentRouter';
import AppTemplate from './components/AppTemplate';

const App = () => {
  return (
    <>
      <AppTemplate Header={<Header />} Content={<ContentRouter />} />
    </>
  );
};

export default App;
