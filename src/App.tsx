import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import '@grapecity/wijmo.styles/wijmo.css';
import '@grapecity/wijmo.cultures/wijmo.culture.ja';
import * as wjGrid from '@grapecity/wijmo.react.grid.multirow';
import * as wjInput from '@grapecity/wijmo.react.input'
import { getData } from './data';

function App() {
  const appData = getData()

  return (
    <div className="App">
      
      <wjGrid.MultiRow itemsSource={appData.data}  layoutDefinition={appData.lines}>
      </wjGrid.MultiRow>
    </div>
  );
}

export default App;
