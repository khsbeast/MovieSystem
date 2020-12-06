import React from 'react';
import "./header.css"
import mov from "../../assets/images/source.gif"
import reel from "../../assets/images/source2.gif"

const header = () => {
    return (
        <div className="header">
         <div class="centred">
             <img className="hgif2" src={mov} height="152px" width="155px"  alt="gif" />
             <h1>BEASTiPLEX</h1>
             <img className="hgif1" src={reel} height="92px" width="92px"  alt="gif" />
         </div>
        </div>
    )
}

export default header;