import React from 'react';
import './App.css';
import NumberProvider from './components/NumberProvider';
import Calculator from './components/Calculator';

const App = () => {
  return ( <
    NumberProvider >
    <
    Calculator / >
    <
    /NumberProvider>
  )
};

export default App;