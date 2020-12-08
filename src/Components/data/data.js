import React from 'react'
import fast from "../../assets/images/fast.svg"

const data = () => {
    return (
        <div className="area">
            <img className="lec" src={fast} width="35px" height="35px"  style={{paddingTop : "0px" } }/>
            <h2>Featured Today</h2>
        </div>
    )
}

export default data;
