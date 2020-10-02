import React from 'react';
import './App.css';
import Main from "./pages/Main";
import {Route} from 'react-router-dom';

const App = () => {
  return(
      <Route component={Main} path='/' exact />
  );
}


export default App;
