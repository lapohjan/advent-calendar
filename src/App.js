import React, { useState, useEffect } from 'react';
import { createCalendar } from './helpers'
import './App.scss'
import Hatch from './Hatch';

function App() {
  const [hatches, setHatches] = useState([]);

  useEffect(() => {
    hatches.length && localStorage.setItem('calendar', JSON.stringify(hatches));
  }, [hatches])

  useEffect(() => {
    const calendar = localStorage.calendar
      ? JSON.parse(localStorage.calendar)
      : createCalendar();

    setHatches(calendar);
  }, []);

  // store calendar in local storage

  /**/


  const handleFlipHatch = (id,nr) => {
   
    const today = new Date();
    const thisDay = today.getDate();
    const month = today.getMonth();

    // console.log(today);
    // console.log(thisDay);
    // console.log(month);
    
    const updatedHatches = hatches.map(hatch =>
      hatch.id === id &&  hatch.nr <= thisDay && month === 8
      ? { ...hatch, open: !hatch.open } : hatch
      );

    setHatches(updatedHatches);
    console.log(nr);
    console.log(id);
   
  }

  


  return (
    <>
      <div class="globalstyle"/>
      <div class="styledapp">
        {hatches.map(hatch =>
          <Hatch class="hatch"
            key={hatch.id}
            hatchData={hatch}
            handleClick={handleFlipHatch}
          />)}
      </div>

    </>
  );
}

export default App;
