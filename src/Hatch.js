import React from 'react';

const Hatch = ({ hatchData: { id, nr, text, img, open }, handleClick }) => (
    <div background={img} onClick={() => handleClick(id,nr)}>
        <div className={open ? "front open" : "front"}>
            <p>{nr}</p>
        </div>
        <div className={open ? "back open" : "back"}>
            <p>{text}</p>
        </div>
    </div>
)


export default Hatch;
