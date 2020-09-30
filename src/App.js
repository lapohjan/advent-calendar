import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { StyledApp } from './AppStyles'
// import { createCalendar } from './helpers'
import Hatch from './Hatch';
import firebase from './firebase';

const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const GlobalStyle = createGlobalStyle`
body {
  background:  center / cover url('https://source.unsplash.com/7VOyZ0-iO0o')  ;
  margin: 0;
}`

function App() {
  const [hatches, setHatches] = useState([]);
  // const [dbData, setdbData] = useState();

  /*   useEffect(() => {
      hatches.length && localStorage.setItem('calendar', JSON.stringify(hatches));
    }, [hatches])
  
    useEffect(() => {
      const calendar = localStorage.calendar
        ? JSON.parse(localStorage.calendar)
        : createCalendar();
  
      setHatches(calendar);
  
    }, []); */

  // store calendar in local storage

  /**/

  // const fromDb= firebase.firestore().collection("calendar-1");

  useEffect(() => {

    firebase.firestore().collection("calendar-1").get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id, ...doc.data()

      }));
      setHatches(shuffle(data))

    });

  }, []);


  //  fromDb.get().then((snapshot)=>{
  //       console.log(fromDb)
  //       const data = snapshot.docs.map((doc)=> ({
  //         id: doc.id, ...doc.data()


  //       }));
  //       console.log("All the data from firestore", data)
  //       // setHatches(data);

  //     });

  // const getData = () => {
  //     fromDb.get().then(function(querySnapshot) {
  //       const newHatches= [];
  //       querySnapshot.forEach(function(doc){
  //         console.log(doc.id, " => ", doc.data());
  //         newHatches.push(doc.data());
  //       });
  //       console.log("This is new hatches", newHatches);
  //       });
  //   };

  // setHatches(getData());



  const handleFlipHatch = id => {
    const updatedHatches = hatches.map(hatch =>
      hatch.id === id ? { ...hatch, open: !hatch.open } : hatch
    );
    setHatches(updatedHatches)
    console.log(id)

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
