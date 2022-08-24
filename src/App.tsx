import React from 'react';
import './styles/todo.css';
import './styles/edit.css';
import Header from './components/Header';
import ContentRouter from './components/routers/ContentRouter';
import AppTemplate from './components/AppTemplate';

// 테스트
const App = () => {
  return <AppTemplate Header={<Header />} Content={<ContentRouter />} />;
};

export default App;
