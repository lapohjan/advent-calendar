import React from 'react';
import { StyledHatch } from './HatchStyles'

const overlayOn = (text) => {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayText").innerHTML = text


}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
}

const Hatch = ({ hatchData: { id, nr, text, img, open }, handleClick }) => (
    <StyledHatch background={img}>
        <div onClick={() => handleClick(id)} className={open ? "front hatch open" : "front hatch"}>
            <p >{nr}</p>
        </div>
        <div className={open ? "back hatch open" : "hatch back"}>
            <p onClick={() => handleClick(id)}>{text}</p>
            <button className="overlay-btn" onClick={() => overlayOn(text)}>show overlay</button>
        </div>
        <div id="overlay" >
            <div className="hatch-content">
                <p background={img} id="overlayText"></p>
                <button className="closebutton" onClick={overlayOff}>close</button>
            </div>

        </div>

    </StyledHatch>
)


export default Hatch;