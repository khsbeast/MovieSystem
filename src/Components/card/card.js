import React from 'react'
import "./card.css"
import op from "../../assets/images/op.jpg"
import star from "../../assets/images/star.svg"
import play from "../../assets/images/play.svg"

const card = () => {
    return (
        <div class="card">
            <img src={op} className="imagee" />
            <div className="sect">
            <p className="cardtext"> The Queen’s Gambit </p>
            <div className="rate">
                <img src={star} width="22px" height="22px" />
                <p className="cardtext" id="cop"> 9.6</p>
            </div>
            </div>
            <div className="conut">
            <img src={play} width="61px" height="61px" style={{padding:"auto"}}/>
            </div>
        </div> 
    )
}

export default card
