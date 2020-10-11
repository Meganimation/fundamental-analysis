import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

 

  const [sharePrice, setSharePrice] = useState()
 
  const [numOfOutstandingShares, setNumOfOutstandingShares] = useState()

  const [newRevNum, setNewRevNum] = useState()
  const [totalRevNum, setTotalRevNum] = useState()
  const [unitRevNum, setUnitRevNum] = useState()
  const [prevYearNum, setPrevYearNum] = useState()
  const [currentAssets, setCurrentAssets] = useState()
  const [currentLiabilities, setCurrentLiabilites] = useState()
 
  const [state, setState] = useState({numOfShares: '2', anotherNum: '3'})





  function checkRatio(num) {
   if (num > 1) {
     return 'apparently thats a good number'
   }
   else return ''
  }





  const currentRatio=()=>{
    return (currentAssets && currentLiabilities) ? (currentAssets / currentLiabilities).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '0'
  }

  return (
    <div className="App">
      <header className="App-header">
      <br />   
<li>
    
        Market Value = <input placeholder='shareprice' label='test' value={sharePrice} onChange={e => setSharePrice(e.target.value)} /> x <input placeholder='no of shares outstanding x 1000' value={numOfOutstandingShares} onChange={e => setNumOfOutstandingShares(e.target.value)} />
     <br/> 
      The Market Value is ${sharePrice && numOfOutstandingShares ? ((sharePrice * numOfOutstandingShares) * 1000).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '0'} 
   
<br />
</li>
<li>
   
     Year-to-year percentage change = <input placeholder='new year rev num' value={newRevNum} onChange={e => setNewRevNum(e.target.value)} /> - <input placeholder='prev year num' value={prevYearNum} onChange={e => setPrevYearNum(e.target.value)} /> / <input value={prevYearNum} placeholder='prev year num' />
     <br />
     The y2y change is {newRevNum && prevYearNum ? (((newRevNum - prevYearNum) / prevYearNum) * 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '0'}%
  
      </li>
    
<li>
   
     how large a unit of a company is = <input placeholder='unit revenue' value={unitRevNum} onChange={e => setUnitRevNum(e.target.value)} /> - <input placeholder='total revenue' value={totalRevNum} onChange={e => setTotalRevNum(e.target.value)} /> x 100
     <br />
     1 company unit =  {unitRevNum && totalRevNum ? (unitRevNum / totalRevNum * 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '0'}%
  
      </li>

      <li>
   
     current ratio = <input placeholder='current assets' value={currentAssets} onChange={e => setCurrentAssets(e.target.value)} /> / <input placeholder='current liabilities' value={currentLiabilities} onChange={e => setCurrentLiabilites(e.target.value)} /> x 100
     <br />
     current ratio = {currentRatio()}
    <small>
     {checkRatio(currentAssets / currentLiabilities)}
    </small>
  
      </li>
      </header>
    </div>
  );
}

export default App;
