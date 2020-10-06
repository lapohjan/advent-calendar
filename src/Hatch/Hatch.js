import React from 'react';
import './Hatch.scss'

const overlayOn = (overlay, popupImg) => {
    document.getElementById("overlay").style.display = "block";

    document.getElementById("overlayText").innerHTML = overlay

    document.getElementById("popup-img").src = popupImg
}

const overlayOff = () => {
    document.getElementById("overlay").style.display = "none";
}

const Hatch = ({ hatchData: { id, nr, text, overlay, img, open, popupImg }, handleClick }) => (
    <div className="hatch-background" background={img}>
        <div onClick={() => handleClick(id)} className={open ? "front hatch open" : "front hatch"}>
            <p >{id}</p>
        </div>
        <div className={open ? "back hatch open" : "hatch back"}>
            <p onClick={() => handleClick(id)}>{text}</p>
            <button className="btn btn-overlay" onClick={() => overlayOn(overlay, popupImg)}>show it</button>
        </div>
        <div id="overlay" >
            <div className="hatch-content">
                <p id="overlayText"></p>
                <img className="popup-image" id="popup-img" alt />
                <button className="btn btn-close" onClick={overlayOff}>close</button>
            </div>

        </div>

    </div>
)


export default Hatch;