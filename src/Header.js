import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import Music from './Music'


const Header = () => {
  return (
    <>
    <Music/>
    </>
  );
};

export default Header;