import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMusic } from '@fortawesome/free-solid-svg-icons';
import './Header.css'


// CREATIVE COMMONS LICENSE

// Have A Happy Christmas
// Exzel Music Publishing (freemusicpublicdomain.com)
// Licensed under Creative Commons: By Attribution 3.0
// http://creativecommons.org/licenses/by/3.0/


const useAudio = () => {
//   const [audio] = useState(new Audio('/assets/bensound-littleidea.mp3'));
  const [audio] = useState(new Audio('/assets/geoff-hurly-have-a-happy-christmas.mp3'));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  });

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  });

  return [playing, toggle];
};

const Header = () => {
//   const [playing, toggle] = useAudio('/assets/bensound-littleidea.mp3');
  const [playing, toggle] = useAudio('/assets/geoff-hurly-have-a-happy-christmas.mp3');
  return (
     <>
            {/* <FontAwesomeIcon */}
            <button
              onClick={toggle}
              className="far music"
            //   icon={faMusic}
            >
              {playing ? 'Pause' : 'Play'}
            </button>
            {/* </FontAwesomeIcon> */}
    </>
  );
};

export default Header;