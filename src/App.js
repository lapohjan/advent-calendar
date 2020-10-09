import React, { useState, useEffect } from 'react';
import './App.scss'
import Hatch from './Hatch/Hatch';
import firebase from './firebase';
import Header from './Header/Header'
import Footer from './Footer/Footer'

const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};


function App() {
  const [hatches, setHatches] = useState([]);

  useEffect(() => {
    let calendar = [];
    if (localStorage.calendar !== undefined) {
      calendar = JSON.parse(localStorage.calendar)
    }
    else {
      firebase.firestore().collection("calendar-1").get().then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id, ...doc.data(),
        }));
        setHatches(shuffle(data));
      }
      )
      calendar = hatches;
    };
    setHatches(calendar);
  }, []);

  useEffect(() => {
    hatches.length && localStorage.setItem('calendar', JSON.stringify(hatches));
  }, [hatches])


  const handleFlipHatch = (id) => {

    /*  const today = new Date();
     const thisDay = today.getDate();
     const month = today.getMonth(); */

    // console.log(today);
    // console.log(thisDay);
    // console.log(month);

    const updatedHatches = hatches.map(hatch =>
      hatch.id === id /* && hatch.id <= thisDay && month === 9 */
        ? { ...hatch, open: !hatch.open } : hatch
    );

    setHatches(updatedHatches);
    /*     console.log(nr);
        console.log(id); */

  }

  return (
    <>
      <Header/>
      <div className="calendar">

        {hatches.map(hatch =>
          <Hatch
            key={hatch.id}
            hatchData={hatch}
            handleClick={handleFlipHatch}
          />)}

      </div>
      <Footer/>
    </>
  );
}

export default App;