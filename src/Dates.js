import React, { useState } from 'react';
import './App.css';
const Dates = () => {
    const [inputDates, setInputDates] = useState([])
    let [stringArr, setStringArr] = useState([])
    let [diffArr, setDiffArr] = useState([])
    let [items, setitems] = useState([])
    let newDate=[]; 

    const displayDatesOnTimeline = () => {
        diffArr = [];
        if(inputDates !== null) {
        let temp = inputDates.split(",");
        let uniqueArr= temp.filter((item, index) => temp.indexOf(item) === index);
        uniqueArr.map((ele) => {
                let date = new Date(ele)
                newDate.push(date)
                })
                let sortedArray = newDate.sort((a, b) => a.valueOf() - b.valueOf())
                for(let i=0;i<sortedArray.length-1;i++) {
                    let difftime = Math.abs(sortedArray[i] - sortedArray[i+1]);
                    diffArr.push(Math.ceil(difftime / (1000 * 60 * 60 * 24)));
                }
        setDiffArr(diffArr);
        stringArr = sortedArray.map((ele) => ele.toUTCString())
        setStringArr(stringArr)
        setTimeout(() => {
            items = document.getElementsByClassName('dateItem');
            for(var i = 0; i < items.length+1; i++) {
                for(var j=0; j< diffArr.length+1; j++) {
                    if(items[i] === undefined) {
                        return 
                    }
                    items[i].style.marginRight = diffArr[j]+".px";  
                    i +=1; 
                }
            }
            }, 0);
        }
        
    }

    const getInputDates = (event) => {
        setInputDates(event);
    }

  return (
    <div className="App">
        <div>
            <input type="text" style={{width:"60%", height:"60%"}}
            id="datestring" 
            value={inputDates} 
            onChange={event => getInputDates(event.target.value)}></input>
            <button onClick={displayDatesOnTimeline}>Submit</button>
        </div>
      <div className="flex-wrapper">
          {stringArr.map((ele, index) =>
          <div key={index} className='dateItem'  style={{padding:"1%", background:"#25adbc", minWidth:"15rem"}}>
          <p>{ele.split(' ').slice(0, 4).join(' ')}</p>
          </div>)}
     </div>
    </div>
  );
}

export default Dates;
