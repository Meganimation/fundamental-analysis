import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [sharePrice, setSharePrice] = useState()
 
  const [numOfOutstandingShares, setNumOfOutstandingShares] = useState()

  const [newRevNum, setNewRevNum] = useState()
  const [prevYearNum, setPrevYearNum] = useState()
 
  const [state, setState] = useState({numOfShares: '2', anotherNum: '3'})


  return (
    <div className="App">
      <header className="App-header">
      <br />   

      <form> 
        Market Value = <input placeholder='shareprice' label='test' value={sharePrice} onChange={e => setSharePrice(e.target.value)} /> x <input placeholder='no of shares outstanding x 1000' value={numOfOutstandingShares} onChange={e => setNumOfOutstandingShares(e.target.value)} />
     <br/> 
      The Market Value is ${sharePrice && numOfOutstandingShares ? ((sharePrice * numOfOutstandingShares) * 1000).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '0'} 
      </form>
<br />
      <form> 
     <br />
     Year-to-year percentage change = <input placeholder='new year rev num' value={newRevNum} onChange={e => setNewRevNum(e.target.value)} /> - <input placeholder='prev year num' value={prevYearNum} onChange={e => setPrevYearNum(e.target.value)} /> / <input value={prevYearNum} placeholder='prev year num' />
     <br />
     The y2y change is {newRevNum && prevYearNum ? (((newRevNum - prevYearNum) / prevYearNum) * 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '0'}%
      </form>
      </header>
    </div>
  );
}

export default App;
