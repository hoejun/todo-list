import React, { useEffect } from 'react';
import './styles/todo.css';
import './styles/edit.css';
import Header from './components/Header';
import ContentRouter from './components/routers/ContentRouter';
import AppTemplate from './components/templates/AppTemplate';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, getDoc, doc } from 'firebase/firestore';
// import { firebaseConfig } from './config/config';

// const _firebaseConfig = firebaseConfig;
// const app = initializeApp(_firebaseConfig);
// const db = getFirestore(app);

const App = () => {
  // const getDate = async () => {
  //   const docRef = doc(db, 'todos', 'todo-fire');
  //   const docSnap = await getDoc(docRef);
  //   // console.log(docSnap.data());
  // };
  // useEffect(() => {
  //   getDate();
  // }, []);
  return <AppTemplate Header={<Header />} Content={<ContentRouter />} />;
};

export default App;
