import React from 'react';
import { StyledHatch } from './HatchStyles'

const overlayOn = (overlay, popupImg) => {
    document.getElementById("overlay").style.display = "grid";
    document.getElementById("overlayText").innerHTML = overlay
    document.getElementById("popup-img").innerHTML = popupImg
}

const overlayOff = () => {
    document.getElementById("overlay").style.display = "none";
}

const Hatch = ({ hatchData: { id, nr, text, overlay, img, open, popupImg }, handleClick }) => (
    <StyledHatch background={img}>
        <div onClick={() => handleClick(id)} className={open ? "front hatch open" : "front hatch"}>
            <p >{id}</p>
        </div>
        <div className={open ? "back hatch open" : "hatch back"}>
            <p onClick={() => handleClick(id)}>{text}</p>
            <button className="overlay-btn" onClick={() => overlayOn(overlay, popupImg)}>show overlay</button>
        </div>
        <div id="overlay" >
            <div className="hatch-content">
                <p id="overlayText"></p>
                <div className="popup-image" id="popup-img"></div>
                <button className="closebutton" onClick={overlayOff}>close</button>
            </div>

        </div>

    </StyledHatch>
)


export default Hatch;