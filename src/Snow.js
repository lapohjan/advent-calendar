import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import './Snow.css'

const Snow = () => {
    const [snowing, setSnowing] = useState(false);

    return (
    <>  
        {/* <button */}
        <FontAwesomeIcon
                onClick={() => {
                setSnowing(!snowing);
                }}
                className="far.snowflake"
                style={{color: "white"}}
                icon={faSnowflake}
            >
                Snow!
            </FontAwesomeIcon>
            {/* </button> */}
            <div className={snowing ? "snowflakes" : "noSnowflakes"}>
                    <div className="snowflake">
                    ❆
                    </div>
                    <div className="snowflake">
                    ❅
                    </div>
                    <div className="snowflake">
                    ❅
                    </div>
                    <div className="snowflake">
                    ❆
                    </div>
                    <div className="snowflake">
                    ❅
                    </div>
                    <div className="snowflake">
                    ❆
                    </div>
                    <div className="snowflake">
                    ❄
                    </div>
                    <div className="snowflake">
                    ❅
                    </div>
                    <div className="snowflake">
                    ❆
                    </div>
                    <div className="snowflake">
                    ❄
                    </div>
                    <div className="snowflake">
                    ❅
                    </div>
                    <div className="snowflake">
                    ❆
                    </div>
                    <div className="snowflake">
                    ❄
                    </div>
                    <div className="snowflake">
                    ❅
                    </div>
                    <div className="snowflake">
                    ❆
                    </div>
            </div>
    </>
    )
}

export default Snow;