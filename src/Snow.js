import React, { useEffect } from 'react'
import { StyledSnow } from './SnowStyles'


const Snow = () => {
    const [snowing, setSnowing] = React.useState(false);

    return (
    <>  
        <StyledSnow>
        <button
                onClick={() => {
                setSnowing(!snowing);
                }}
            >
                Snow!
            </button>
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
        </StyledSnow>
    </>
    )
}

export default Snow;