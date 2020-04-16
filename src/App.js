import React from 'react';
import './App.css';
import Dates from './Dates';
const App = () => {
  return (
    <div className="App" style={{fontFamily: "sans-serif"}}>
      <h1 style={{color:"#800000"}}>Date Timeline</h1>
      <h3 style={{color:"#25adbc"}}>Enter a list of dates seperated by commas in the input field to view the timeline</h3>
      <h4>Example(copy and paste this into the input field): 2019-06-28,2019-06-27,2019-06-26,2019-06-22,2019-07-25,2020-02-02</h4>
      <h4>Add or delete dates to see the changes to the timeline as you scroll along the x-axis</h4>
      <Dates />
    </div>
  );
}

export default App;
