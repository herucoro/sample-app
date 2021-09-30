import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import '@grapecity/wijmo.styles/wijmo.css';
import '@grapecity/wijmo.cultures/wijmo.culture.ja';
import * as wjGrid from '@grapecity/wijmo.react.grid.multirow';
import * as wjInput from '@grapecity/wijmo.react.input'
import { getName } from './name';
import { Button } from '@material-ui/core';

import { appDataType, getMaterial, IGetResponse } from './material';

function App() {
  // const appData = getData()
  // const test = getMaterial()
  const [appData, setAppData] = useState<appDataType>({
    data: null,
    lines: null,
  })
  const [orderName, setOrderName] = useState("")
  const [employeeCode, setEmployeeCode] = useState("")
  useEffect(() => {
    const f = async() => {
      console.log(orderName)
      await getName(employeeCode)
            .then(response => {
              setOrderName(response)
            })
            .catch(() => setOrderName(""))
    }
    f()
  }, [employeeCode])
  useEffect(() => {
    const f = async() => {
      await getMaterial()
            .then(res => {
              setAppData(res)
            })
    }    
    f()
  },[])

// const codeChange = (e) =>{
//   setEmployeeCode(() => e.target.value)
// }

  return (
    <div className="App">
      <div className="grid-parent">
        <form onSubmit={(e) => e.preventDefault}>
          <div className="">
            <label>追加</label>
          </div>
          <div className="child1">
            <label htmlFor="ordernumber">伝票番号</label>            
            <wjInput.InputMask id="ordernumber" mask="00-00000" />
            
            <label htmlFor="manegenumber">管理番号</label>
            <wjInput.InputMask id="managenumber" mask="00L-00000" />
          </div>
          <div className="child2">
            <label htmlFor="orderdate">依頼日</label>
            <wjInput.InputDate id="orderdate" width="200"/>

            <label htmlFor="employeecode">依頼者</label>
            <wjInput.InputMask id="employeecode" mask="00000" value={employeeCode} lostFocus={(e: any) => (setEmployeeCode(e.value))} />
            <label>{orderName}</label>
          </div>
          <div className="child3">
            <label htmlFor="orderremake">伝票備考</label>
            <input type="text" width="300" />
            <Button type="submit" onClick={(e) => e.preventDefault()}>表示</Button>
          </div>
        </form>
      </div>
      <div>
        <wjGrid.MultiRow itemsSource={appData.data}  layoutDefinition={appData.lines}
          allowDragging={3}>
        </wjGrid.MultiRow>        
      </div>

    </div>
  );
}

export default App;
