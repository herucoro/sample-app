import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './components/pages/sample';
import SampleHeader from './components/organisms/header';

function App() {
  return (
    <div className="App">
      <SampleHeader />
      <Sample />
    </div>
  );
}

export default App;
