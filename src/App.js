import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { StyledApp } from './AppStyles'
import { createCalendar } from './helpers'
import Hatch from './Hatch';



const GlobalStyle = createGlobalStyle`
body {
  background:  center / cover url('https://source.unsplash.com/7VOyZ0-iO0o')  ;
  margin: 0;
}`

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


  const handleFlipHatch = (id, nr) => {

    const today = new Date();
    const thisDay = today.getDate();
    const month = today.getMonth();

    // console.log(today);
    // console.log(thisDay);
    // console.log(month);

    const updatedHatches = hatches.map(hatch =>
      hatch.id === id && hatch.nr <= thisDay && month === 8
        ? { ...hatch, open: !hatch.open } : hatch
    );

    setHatches(updatedHatches);
    console.log(nr);
    console.log(id);

  }




  return (
    <>
      <GlobalStyle />
      <StyledApp>
        {hatches.map(hatch =>
          <Hatch
            key={hatch.id}
            hatchData={hatch}
            handleClick={handleFlipHatch}
          />)}

      </StyledApp>

    </>
  );
}

export default App;